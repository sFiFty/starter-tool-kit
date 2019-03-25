import * as React from 'react';

export const AuthModal = () => {
  return (
    <div className="auth-container">
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
