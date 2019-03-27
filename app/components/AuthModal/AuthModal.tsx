import * as React from 'react';
import './styles.scss';

export const AuthModal = () => {
  return (
    <div className="auth-modal-container">
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          Content
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
  );
}
