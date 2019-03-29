import * as React from 'react';
import { Input } from 'components/Input';
import { Modal } from 'components/Modal';
import './styles.scss';

export const Auth = () => {
  return (
    <div className="auth-modal-container">
      <Modal fullScreen>
        <div className="auth-modal-content">
          <div className="landing">
            <div className="landing-content">
              Some landing content
            </div>
          </div>
          <div className="auth">
            <div className="auth-content">
              <h1>To continue Log in or Sign up into the Starter Toolkit </h1>
              <Input type="email" placeholder="Text input" />
              <Input  type="password" placeholder="Text input" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
