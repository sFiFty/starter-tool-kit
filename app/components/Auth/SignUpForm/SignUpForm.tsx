import * as React from 'react';
import * as Yup from 'yup';
import { Formik, FormikActions, Form, Field, FieldProps } from 'formik';

import { Input, IInputSizes } from 'components/Input';
import { Button, IButtonTypes, IButtonSizes } from 'components/Button';

import { IAuthModes } from '../config';

export interface ISignUpFormProps {
  onModeChange(mode: IAuthModes): void;
}

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const ValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, 'First name has not to be longer than 50 characters!')
    .required('First name is required!'),
  lastName: Yup.string()
    .max(50, 'Last name has not to be longer than 50 characters!')
    .required('Last name is required!'),
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: Yup.string()
    .min(6, 'Password has to be longer than 6 characters!')  
    .required('Password is required!')
});

export const SignUpForm = ({ onModeChange }: ISignUpFormProps) => {

  const onSumbit = (values: SignUpFormValues, actions: FormikActions<SignUpFormValues>) => {
    console.log(values);
    console.log(actions);
  }

  return (
    <>
      <h1 className="is-size-2 is-size-3-mobile has-text-black has-text-centered">Create your new account</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
        onSubmit={onSumbit}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={ValidationSchema}
      >
      {
        ({ errors, touched, isSubmitting }) => {
          console.log(errors);
          return (
            <Form>
              <div className="names is-flex">
                <Field
                  name="firstName"
                  render={({ field }: FieldProps<SignUpFormValues>) => (
                    <Input type="text" error={errors.firstName} placeholder="First name" size={IInputSizes.medium} {...field} />
                  )}
                />
                <Field
                  name="lastName"
                  render={({ field }: FieldProps<SignUpFormValues>) => (
                    <Input type="text" error={errors.lastName} placeholder="Last name" size={IInputSizes.medium} {...field} />
                  )}
                />
              </div>
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
          )
        }
      }
      </Formik>
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
