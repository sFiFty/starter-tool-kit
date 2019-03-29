import * as React from 'react';

export interface IModalProps {
  children: any;
  className?: string
}

export const Modal = (props: IModalProps) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        {props.children}
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}
