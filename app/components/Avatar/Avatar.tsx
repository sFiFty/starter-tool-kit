import * as React from 'react';
import './styles.scss';

export interface IAvatarProps {
  avatar: string | null;
  userName: string;
}

export const Avatar = ({ avatar, userName }: IAvatarProps) => {
  if (avatar) {
    const initialsArray: string[] = userName.match(/\b\w/g) || [];
    const initials: string = ((initialsArray.shift() || '') + (initialsArray.pop() || '')).toUpperCase();
    return (
      <div>
        {initials}
      </div>
    );
  }
  return (
    <div className="avatar-container">
      <figure className="image is-32x32 avatar">
        <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
    </div>
  )
}
