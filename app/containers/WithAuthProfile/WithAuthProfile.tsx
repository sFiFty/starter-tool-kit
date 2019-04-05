import * as React from 'react';
import * as firebase from 'firebase/app';
import getConfig from 'next/config';
import 'firebase/auth';

import { Loader } from 'components/Loader';

const { publicRuntimeConfig } = getConfig();

interface IWithAuthProfileState {
  authUser: firebase.User | null;
  isAuthorized: boolean;
  isLoading: boolean;
}

export const withAuthProfile = <P extends object>(Component: React.ComponentType<P>) => {

  return class WithAuthProfile extends React.Component<P, IWithAuthProfileState> {
    static async getInitialProps({ req }) {
      console.log(123)
      return {  }
    }
    constructor(props: P) {
      super(props);
      this.state = { authUser: null, isLoading: true, isAuthorized: false }
    }
    componentDidMount() {
      const { FIREBASE_CONFIG } = publicRuntimeConfig;
      console.log(1);
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
      console.log(3);
      const { isLoading, isAuthorized, authUser } = this.state;
      //if (isLoading) return <Loader withContainer />;
      return <Component {...this.props as P} isAuthorized={isAuthorized} authUser={authUser} />;
    }
  };
}

