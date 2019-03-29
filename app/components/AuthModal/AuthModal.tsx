import * as React from 'react';
import { Input } from 'components/Input';
import { Modal } from 'components/Modal';
import './styles.scss';

export const AuthModal = () => {
  return (
    <Modal>
      <h1>To continue Log in or Sign up into the Starter Toolkit </h1>
      <Input type="email" placeholder="Text input" />
      <Input  type="password" placeholder="Text input" />
    </Modal>
  );
}
