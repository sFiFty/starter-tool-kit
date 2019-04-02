import * as React from 'react';

import { addClassNames } from 'utils/component-helpers';
import { IButtonTypes, getButtonType } from './config';

export interface IButtonProps {
  className?: string;
  type?: IButtonTypes;
}

const DEFAULT_CLASS = 'button';

export const Button = ({ className = '', type }: IButtonProps) => {
  let classNames = addClassNames(className, DEFAULT_CLASS);
  const buttonTypeClass = getButtonType(type);
  classNames = addClassNames(classNames, buttonTypeClass);
  return (
    <button className={classNames}>
      Button
    </button>
  )
}
