import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, FieldProps } from 'formik';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { Input, IInputSizes } from 'components/Input';
import { Button, IButtonTypes, IButtonSizes } from 'components/Button';
import { IAuthModes } from '../config';

export interface ISignInFormProps {
  showMessage(): void;
  onModeChange(mode: IAuthModes): void;
}

interface SignInFormValues {
  email: string;
  password: string;
}

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')  
    .required('Password is required!')
});

export const SignInForm = ({ onModeChange, showMessage }: ISignInFormProps) => {

  const onSumbit = (values: SignInFormValues) => {
    firebase.auth().signInWithEmailAndPassword(values.email, values.password)
    .then(() => {
      showMessage();
    })
    .catch((error) => {
      console.log(error.message);
    });
  }

  return (
    <>
      <h1 className="is-size-2 is-size-3-mobile has-text-black has-text-centered">Hello again!</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSumbit}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={ValidationSchema}
      >
      {
        ({ errors }) => {
          return (
            <Form>
              <Field
                name="email"
                render={({ field }: FieldProps<SignInFormValues>) => (
                  <Input type="email" error={errors.email} placeholder="Email" size={IInputSizes.medium} {...field}/>
                )}
              />
              <Field
                name="password"
                render={({ field }: FieldProps<SignInFormValues>) => (
                  <Input  type="password" error={errors.password} placeholder="Password" size={IInputSizes.medium} {...field} />
                )}
              />
              <div className="has-text-centered">
                <Button type="submit" styleType={IButtonTypes.primary} size={IButtonSizes.medium}>
                  SIGN IN
                </Button>
              </div>
            </Form>
          )
        }
      }
      </Formik>
      <div className="new-account">
        <p className="has-text-centered is-size-5">
          Don’t have an account?
        </p>
        <div className="has-text-centered">
          <Button
            type="button"
            styleType={IButtonTypes.success}
            onClick={() => onModeChange(IAuthModes.signUp)}
          >
            SIGN UP
          </Button>
        </div>              
      </div>
    </>
  );
}
