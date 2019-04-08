import * as React from 'react';

import { addClassNames } from 'utils/component-helpers';
import { getIconByName, IIconsNames } from './config';
import './styles.scss';

export interface IIconProps {
  name: IIconsNames;
  className?: string;
}

const DEFAULT_CLASS = '';

export function Icon ({ name, className = '', ...rest }: IIconProps) {
  const classNames = addClassNames(className, DEFAULT_CLASS);
  const icon = getIconByName(name);
  return (
    <span className="icon-container" {...rest}>
      <img className={classNames} src={icon} alt={name} />
    </span>
  );
}
