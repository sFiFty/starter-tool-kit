import * as React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { Dropdown } from 'components/Dropdown';
import { Avatar } from 'components/Avatar';
import { Button, IButtonTypes } from 'components/Button';
import { Auth, IAuthModes } from 'components/Auth';
import './styles.scss';

export interface IAuthUserProps {
  authUser: firebase.User | null;
}

export const AuthUser = ({ authUser }: IAuthUserProps) => {

  const [isLoginModalShown, showLogin] = React.useState<boolean>(false);
  const [isSignupModalShown, showSignup] = React.useState<boolean>(false);
 
  const authModalClose = () => {
    showLogin(false);
    showSignup(false);
  }

  const logOut = () => {
    firebase.auth().signOut().then(function() {
      console.log(1);
    }, function(error) {
      console.log(2);
    });
  }



  return (
    <div className="auth-user-container">
      {
        authUser ? (
          <Dropdown trigger={<Avatar userName={authUser.displayName || 'Oleksandr Rudin'} avatar={authUser.photoURL} />}>
            <a href="#" className="dropdown-item">Profile</a>
            <hr className="dropdown-divider" />
            <a href="#" onClick={logOut} className="dropdown-item">Logout</a>
          </Dropdown>
        ) : (
          <div className="auth-buttons">
            <Button styleType={IButtonTypes.primary} onClick={() => showLogin(true)}>
              Log In
            </Button>
            <Button styleType={IButtonTypes.success} onClick={() => showSignup(true)}>
              Sign Up
            </Button>
          </div>
        )
      }
      { isLoginModalShown && <Auth mode={IAuthModes.signIn} onClose={authModalClose} /> }
      { isSignupModalShown && <Auth mode={IAuthModes.signUp} onClose={authModalClose} /> }
      
    </div>
  );
}
