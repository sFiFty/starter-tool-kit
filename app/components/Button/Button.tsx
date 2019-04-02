import * as React from 'react';

import { addClassNames } from 'utils/component-helpers';
import { IButtonTypes, getButtonType, getButtonSize, IButtonSizes } from './config';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: IButtonSizes;
  children: any;
  styleType?: IButtonTypes;
}

const DEFAULT_CLASS = 'button';

export const Button = ({ className = '', size, children, styleType, ...rest }: IButtonProps) => {
  let classNames = addClassNames(className, DEFAULT_CLASS);

  const buttonTypeClass = getButtonType(styleType);
  classNames = addClassNames(classNames, buttonTypeClass);

  const buttonSizeClass = getButtonSize(size);
  classNames = addClassNames(classNames, buttonSizeClass);

  return (
    <button className={classNames} {...rest} >
      {children}
    </button>
  )
}
