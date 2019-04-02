import * as React from 'react';
import Router from 'next/router'


import { Modal } from 'components/Modal';
import { SignInFormProps } from './SignInForm';
import { routes } from 'utils/routes';
import './styles.scss';

export const Auth = () => {
  const [isModalShown, showModal] = React.useState(true);
  const onModalVisibilityChange = (isShown: boolean) => {
    if (!isShown) {
      Router.push(routes.home)
    }
    showModal(isShown);

  }
  return (
    <div className="auth-modal-container">
      <Modal fullScreen onVisibilityChange={onModalVisibilityChange} isVisible={isModalShown}>
        <div className="auth-modal-content">
          <div className="landing">
            <div className="inner-content">
              Some landing content
            </div>
          </div>
          <div className="auth">
            <div className="inner-content">
              <SignInFormProps />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
