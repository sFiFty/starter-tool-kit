import * as React from 'react';
import getConfig from 'next/config';
import firebase from 'firebase';

const { publicRuntimeConfig } = getConfig();


export const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return class WithAuth extends React.Component<P> {
    componentDidMount() {
      const { FIREBASE_CONFIG } = publicRuntimeConfig;
      firebase.initializeApp(FIREBASE_CONFIG);
    }
    render() {
      return <Component {...this.props as P} />;
    }
  };
}

