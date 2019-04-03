import * as React from 'react';

import { Input, IInputSizes } from 'components/Input';
import { Button, IButtonTypes, IButtonSizes } from 'components/Button';
import { IAuthModes } from '../config';

export interface ISignInFormProps {
  onModeChange(mode: IAuthModes): void;
}

export const SignInForm = ({ onModeChange }: ISignInFormProps) => {
  return (
    <>
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
          <Button
            className="is-size-5"
            type="button"
            styleType={IButtonTypes.success}
            size={IButtonSizes.medium}
            onClick={() => onModeChange(IAuthModes.signUp)}
          >
            SIGN UP
          </Button>
        </div>              
      </div>
    </>
  );
}
