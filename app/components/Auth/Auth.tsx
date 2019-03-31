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
            <div className="inner-content">
              Some landing content
            </div>
          </div>
          <div className="auth">
            <div className="inner-content">
              <h1 className="is-size-2 is-size-3-mobile has-text-black has-text-centered">Hello again!</h1>
              <Input type="email" placeholder="Text input" />
              <Input  type="password" placeholder="Text input" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
