import * as React from 'react';
import ReactNotification from "react-notifications-component";

import { Footer } from './Footer';
import { Header } from './Header';

interface ILayoutProps {
  children: any;
}

export const Layout = (props: ILayoutProps) => {
  const notificationElement = React.useRef<HTMLDivElement, {add}>();
  const addNotification = () => {
    if (notificationElement && notificationElement.current) {
      notificationElement.current.addNotification({
        type: "awesome",
        title: "Custom",
        message: "Notifications can be customized to suit your needs",
        container: "top-right"
      }));
    }
  }
  return (
    <>
      <Header />
      <section>
        <div className="container">
          {props.children}
        </div>
      </section>
      <Footer />
      <ReactNotification
        ref={notificationElement}
      />
    </>
  );
}
