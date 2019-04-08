import * as React from 'react';
import ReactNotification from "react-notifications-component";
import getConfig from 'next/config';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const { publicRuntimeConfig } = getConfig();

import { Footer } from './Footer';
import { Header } from './Header';
import { Loader } from 'components/Loader';
import { Auth, IAuthModes } from 'components/Auth';

interface ILayoutProps {
  children: any;
  isSecure?: boolean;
}

interface INotificationContainer extends HTMLDivElement {
  addNotification(config: any): void;
}

export const Layout = ({ isSecure, children }: ILayoutProps) => {
  const notificationElement = React.useRef<INotificationContainer>();
  const [authUser, setUser] = React.useState<firebase.User | null>(null);
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [isAuthorized, setIsAuthorized] = React.useState<boolean>(true);

  React.useEffect(() => {
    const { FIREBASE_CONFIG } = publicRuntimeConfig;
    if (firebase.apps.length === 0) firebase.initializeApp(FIREBASE_CONFIG);
    firebase.auth().onAuthStateChanged((authUser: firebase.User | null) => {
      if (authUser) {
        setUser(authUser);
        setLoading(false);
        setIsAuthorized(true)
      } else {
        setUser(null);
        setLoading(false);
        setIsAuthorized(false);
      }
    });
  }, [0]);

  const showMessage = () => {
    if (notificationElement && notificationElement.current) {
      notificationElement.current.addNotification({
        title: "Awesomeness",
        message: "Awesome Notifications!",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 2000 },
        dismissable: { click: true }
      });
    }
  }
  if (isLoading) {
    return (
      <Loader withContainer />
    )
  }
  if (isSecure && !isAuthorized) {
    return <Auth mode={IAuthModes.signIn} />
  }

  const componentChildren = React.Children.map(children, (child) => React.cloneElement(child, { authUser, showMessage }));
  return (
    <>
      <Header />
      <section>
        <div className="container">
          {componentChildren}
        </div>
      </section>
      <Footer />
      <ReactNotification
        ref={notificationElement}
      />
    </>
  );
}
