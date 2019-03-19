import * as React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

import { initGA, logPageView } from 'utils/reactga';

export const Layout = (props) => {
  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, []);
  return (
    <>
      <Header />
      <section>
        <div className="container">
          {props.children}
        </div>
      </section>
      <Footer />
    </>
  );
}
