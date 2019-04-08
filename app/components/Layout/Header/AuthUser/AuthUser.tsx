import * as React from 'react';

import { Dropdown } from 'components/Dropdown';
import { Avatar } from 'components/Avatar';
import './styles.scss';

export interface IAuthUserProps {
  authUser: firebase.User | null;
}

export const AuthUser = ({ authUser }: IAuthUserProps) => {
  return (
    <div className="auth-user-container">
      {
        authUser ? (
          <Dropdown trigger={<Avatar userName={authUser.displayName || 'Oleksandr Rudin'} avatar={authUser.photoURL} />}>
            <a href="#" className="dropdown-item">Profile</a>
            <hr className="dropdown-divider" />
            <a href="#" className="dropdown-item">Logout</a>
          </Dropdown>
        ) : (
          <div>To do</div>
        )
      }

    </div>
  );
}
