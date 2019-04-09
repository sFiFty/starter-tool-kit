import * as React from 'react';

interface INotificationContainer extends HTMLDivElement {
  addNotification(config: any): void;
}

let notificationElement: React.MutableRefObject<INotificationContainer>;

export const saveMessageContainer = (element: React.MutableRefObject<INotificationContainer>) => {
  notificationElement = element;
}

export const success = (title: string, message:string): void => {
  showSuccessMessage(notificationElement, title, message);
}

export const error = (title: string, message:string): void => {
  showErrorMessage(notificationElement, title, message);
}

const showSuccessMessage = (element: React.MutableRefObject<INotificationContainer>, title: string, message:string) => {
  if (element && element.current) {
    notificationElement.current.addNotification({
      title,
      message,
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 5000 },
      dismissable: { click: true }
    });
  }
}

const showErrorMessage = (element: React.MutableRefObject<INotificationContainer>, title: string, message:string) => {
  if (element && element.current) {
    element.current.addNotification({
      title,
      message,
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 5000 },
      dismissable: { click: true }
    });
  }
}