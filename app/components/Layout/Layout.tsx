import * as React from 'react';
import ReactNotification from 'react-notifications-component';
import getConfig from 'next/config';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const { publicRuntimeConfig } = getConfig();

import { Footer } from './Footer';
import { Header } from './Header';
import { Loader } from 'components/Loader';
import { Auth, IAuthModes } from 'components/Auth';
import { saveMessageContainer } from 'utils/messages';

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

  /**
   * Initialize firebase auth and check if user is authorized
   * Save message container to use notifications in the system
   */
  React.useEffect(() => {
    if (notificationElement) saveMessageContainer(notificationElement);
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

  if (isLoading) {
    return (
      <Loader withContainer />
    )
  }
  if (isSecure && !isAuthorized) {
    return <Auth mode={IAuthModes.signIn} />
  }

  const componentChildren = React.Children.map(children, (child) => React.cloneElement(child, { authUser }));
  return (
    <>
      <Header authUser={authUser} />
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
