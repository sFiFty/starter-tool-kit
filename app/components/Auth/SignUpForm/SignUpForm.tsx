import * as React from 'react';

import { Input, IInputSizes } from 'components/Input';
import { Button, IButtonTypes, IButtonSizes } from 'components/Button';
import { Formik, FormikActions, FormikProps, Form, Field, FieldProps } from 'formik';
import { IAuthModes } from '../config';

export interface ISignUpFormProps {
  onModeChange(mode: IAuthModes): void;
}

interface SignUpFormValues {
  userName: string;
  email: string;
  password: string;
}

export const SignUpForm = ({ onModeChange }: ISignUpFormProps) => {

  const onSumbit = (values: SignUpFormValues, actions: FormikActions<SignUpFormValues>) => {
    console.log(values);
  }

  return (
    <>
      <h1 className="is-size-2 is-size-3-mobile has-text-black has-text-centered">Create your new account</h1>
      <Formik
        initialValues={{ userName: '', email: '', password: '' }}
        onSubmit={onSumbit}
        render={() => (
          <Form>
            <Field
              name="userName"
              render={({ field }: FieldProps<SignUpFormValues>) => (
                <Input type="text" {...field} placeholder="Username" size={IInputSizes.medium} />
              )}
            />
            <Field
              name="email"
              render={({ field }: FieldProps<SignUpFormValues>) => (
                <Input type="email" {...field} placeholder="Email" size={IInputSizes.medium} />
              )}
            />
            <Field
              name="password"
              render={({ field }: FieldProps<SignUpFormValues>) => (
                <Input  type="password" {...field} placeholder="Password" size={IInputSizes.medium} />
              )}
            />
            <div className="has-text-centered">
              <Button type="submit" styleType={IButtonTypes.primary} size={IButtonSizes.medium}>
                SIGN UP
              </Button>
            </div>
          </Form>
        )}
      />
      <div className="new-account">
        <p className="has-text-centered is-size-5">
          Already have an account?
        </p>
        <div className="has-text-centered">
          <Button
            type="button"
            styleType={IButtonTypes.success}
            onClick={() => onModeChange(IAuthModes.signIn)}
          >
            SIGN IN
          </Button>
        </div>              
      </div>
    </>
  )
}
