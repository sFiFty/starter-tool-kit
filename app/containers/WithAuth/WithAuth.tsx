import * as React from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig()


export const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
  return class WithAuth extends React.Component<P> {
    componentDidMount() {
      console.log(publicRuntimeConfig);
      //firebase.initializeApp(config.get('FIREBASE_CONFIG'));
    }
    render() {
      return <Component {...this.props as P} />;
    }
  };
}

