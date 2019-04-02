import * as React from 'react';
import Router from 'next/router'

import { Input, IInputSizes } from 'components/Input';
import { Modal } from 'components/Modal';
import { Button, IButtonTypes, IButtonSizes } from 'components/Button';
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
              <h1 className="is-size-2 is-size-3-mobile has-text-black has-text-centered">Hello again!</h1>
              <form action="login">
                <Input type="email" placeholder="Email" size={IInputSizes.medium} />
                <Input  type="password" placeholder="Password" size={IInputSizes.medium} />
                <div className="has-text-centered">
                  <Button className="is-size-5" type="submit" styleType={IButtonTypes.primary} size={IButtonSizes.medium}>
                    SIGN IN
                  </Button>
                </div>
              </form>
              <div className="new-account">
                <p className="has-text-centered is-size-5">
                  Don’t have an account?
                </p>
                <div className="has-text-centered">
                  <Button className="is-size-5" type="button" styleType={IButtonTypes.success} size={IButtonSizes.medium}>
                    SIGN UP
                  </Button>
                </div>              
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
