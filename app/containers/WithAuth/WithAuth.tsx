import * as React from 'react';
import getConfig from 'next/config';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { Auth, IAuthModes } from 'components/Auth';
import { Loader } from 'components/Loader';

const { publicRuntimeConfig } = getConfig();


export const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  interface IWithAuthState {
    authUser: firebase.User | null;
    isAuthorized: boolean;
    isLoading: boolean;
  }
  return class WithAuth extends React.Component<P, IWithAuthState> {
    constructor(props: P) {
      super(props);
      this.state = { authUser: null, isLoading: true, isAuthorized: false }
    }
    componentDidMount() {
      const { FIREBASE_CONFIG } = publicRuntimeConfig;
      firebase.initializeApp(FIREBASE_CONFIG);
      firebase.auth().onAuthStateChanged((authUser: firebase.User | null) => {
        if (authUser) {
          this.setState({ authUser, isLoading: false, isAuthorized: true });
        } else {
          this.setState({ authUser: null, isLoading: false, isAuthorized: false })
        }
      });
    }
    render() {
      const { isLoading, isAuthorized } = this.state;
      if (isLoading) return <Loader withContainer />;
      if (isAuthorized) {
        return <Component {...this.props as P} />;
      }
      return (
        <Auth mode={IAuthModes.signIn} />
      )
    }
  };
}

