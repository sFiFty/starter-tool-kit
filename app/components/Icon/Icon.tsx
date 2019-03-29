import * as React from 'react';

import { addClassNames } from 'utils/component-helpers';
import { getIconByName, IIconsNames } from './icons';

export interface IIconProps {
  name: IIconsNames;
  className?: string;
}

const DEFAULT_CLASS = '';

export function Icon ({ name, className = '' }: IIconProps) {
  const classNames = addClassNames(className, DEFAULT_CLASS);
  const icon = getIconByName(name);
  return (
    <div className="icon-container">
      <img className={classNames} src={icon} alt={name} />
    </div>
  );
}
