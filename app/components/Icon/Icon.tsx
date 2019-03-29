import * as React from 'react';

import { IIcons } from './icons';

export interface IIconProps {
  name: IIcons;
}

export function Icon ({ name }: IIconProps) {
  return (
    <div className="icon-container">
      <img className="loader-image" src={IIcons[name]} alt="loader"/>
    </div>
  );
}
