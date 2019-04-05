import * as React from 'react';
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

interface INotificationContainer extends HTMLDivElement {
  addNotification(config: any): void;
}

export const withNotification = <P extends object>(Component: React.ComponentType<P>) => {
  return class WithNotification extends React.Component<P, any> {
    private notificationDOMRef: React.RefObject<INotificationContainer>;
    constructor(props: P) {
      super(props);
      this.notificationDOMRef = React.createRef();
    }

    public addNotification = () => {
      console.log(this.notificationDOMRef);
      if (!this.notificationDOMRef || !this.notificationDOMRef.current) return;
      this.notificationDOMRef.current.addNotification({
        title: "Awesomeness",
        message: "Awesome Notifications!",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 2000 },
        dismissable: { click: true }
      });
    }

    render() {
      return (
        <>
          <ReactNotification ref={this.notificationDOMRef} />
          <Component {...this.props as P} showMessage={this.addNotification} />
        </>
      );
    }
  };
}

