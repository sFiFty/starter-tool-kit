import * as React from 'react';

import { addClassNames } from 'utils/component-helpers';
import { IButtonTypes, getButtonType } from './config';

export interface IButtonProps {
  className?: string;
  type?: IButtonTypes;
  children: any;
}

const DEFAULT_CLASS = 'button';

export const Button = ({ className = '', type, children }: IButtonProps) => {
  let classNames = addClassNames(className, DEFAULT_CLASS);
  const buttonTypeClass = getButtonType(type);
  classNames = addClassNames(classNames, buttonTypeClass);
  return (
    <button className={classNames}>
      {children}
    </button>
  )
}
