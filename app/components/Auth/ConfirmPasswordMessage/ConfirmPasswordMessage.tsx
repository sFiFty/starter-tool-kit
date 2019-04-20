import * as React from 'react';

export interface IConfirmPasswordMessageProps {
  email: string | null;
}

export const ConfirmPasswordMessage = ({ email }: IConfirmPasswordMessageProps) => {
  return (
    <div>
      We’ve sent a message to {email} with a link to activate your account.
    </div>
  );
}
