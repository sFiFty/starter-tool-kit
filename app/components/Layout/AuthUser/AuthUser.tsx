import * as React from 'react';
import { withAuthProfile } from 'containers/WithAuthProfile';

export interface IAppProps {
}

const AuthUserComponent = (props: IAppProps) => {
  console.log(props);
  return (
    <div>
      a
    </div>
  );
}

export const AuthUser = withAuthProfile(AuthUserComponent);
