import * as React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { AuthModal } from 'components/AuthModal';

interface ILayoutProps {
  children: any;
}

export const Layout = (props: ILayoutProps) => {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          {props.children}
        </div>
      </section>
      <Footer />
      <AuthModal />
    </>
  );
}
