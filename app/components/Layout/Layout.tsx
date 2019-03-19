import * as React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = (props) => {
  React.useEffect(() => {
    console.log(1)
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
