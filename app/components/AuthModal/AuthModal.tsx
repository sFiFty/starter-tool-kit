import * as React from 'react';
import { Input } from 'components/Input';
import './styles.scss';

export const AuthModal = () => {
  return (
    <div className="auth-modal-container">
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <h1>To continue Log in or Sign up into the system </h1>
          <input className="input" type="email" placeholder="Text input" />
          <input className="input" type="password" placeholder="Text input" />
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
  );
}
