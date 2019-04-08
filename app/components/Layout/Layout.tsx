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

  const addNotification = () => {
    if (notificationElement && notificationElement.current) {
      notificationElement.current.addNotification({
        type: "awesome",
        title: "Custom",
        message: "Notifications can be customized to suit your needs",
        container: "top-right"
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
  return (
    <>
      <Header />
      <section>
        <div className="container">
          {children}
        </div>
      </section>
      <Footer />
      <ReactNotification
        ref={notificationElement}
      />
    </>
  );
}
