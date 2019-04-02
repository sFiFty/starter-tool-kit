import * as React from 'react';

import { addClassNames } from 'utils/component-helpers';
import { IButtonTypes, getButtonType, getButtonSize, IButtonSizes } from './config';

export interface IButtonProps {
  className?: string;
  type?: IButtonTypes;
  size?: IButtonSizes;
  children: any;
}

const DEFAULT_CLASS = 'button';

export const Button = ({ className = '', type, size, children }: IButtonProps) => {
  let classNames = addClassNames(className, DEFAULT_CLASS);

  const buttonTypeClass = getButtonType(type);
  classNames = addClassNames(classNames, buttonTypeClass);

  const buttonSizeClass = getButtonSize(size);
  classNames = addClassNames(classNames, buttonSizeClass);
  return (
    <button className={classNames}>
      {children}
    </button>
  )
}
