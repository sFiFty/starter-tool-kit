import * as React from 'react';
import Router from 'next/router'


import { Modal } from 'components/Modal';
import { IAuthModes } from './config';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { routes } from 'utils/routes';
import './styles.scss';

export interface ISignInFormPropsProps {
  mode: IAuthModes;
  onClose?(): void; 
}

export const Auth = ({ mode, onClose }: ISignInFormPropsProps) => {
  const [isModalShown, showModal] = React.useState(true);
  const [authMode, onModeChange] = React.useState(mode);

  const onModalVisibilityChange = (isShown: boolean) => {
    if (!isShown && !onClose) {
      Router.push(routes.home)
    }
    if (onClose) {
      onClose();
      return;
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
              {
                authMode === IAuthModes.signIn && (
                  <SignInForm onModeChange={onModeChange} />
                )
              }
              {
                authMode === IAuthModes.signUp && (
                  <SignUpForm onModeChange={onModeChange} />
                )
              }
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
