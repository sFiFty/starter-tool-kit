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
}

export const Auth = ({ mode }: ISignInFormPropsProps) => {
  const [isModalShown, showModal] = React.useState(true);
  const [onModeChange, authMode] = React.useState(mode);

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
              {
                mode === IAuthModes.signIn && (
                  <SignInForm onModeChange={onModeChange} />
                )
              }
              {
                mode === IAuthModes.signUp && (
                  <SignUpForm />
                )
              }
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
