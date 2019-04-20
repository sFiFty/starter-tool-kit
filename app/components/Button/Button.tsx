import * as React from 'react';

import { addClassNames, removeClassName } from 'utils/component-helpers';
import { IButtonTypes, getButtonType, getButtonSize, IButtonSizes } from './config';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: IButtonSizes;
  children: any;
  styleType?: IButtonTypes;
  loading?: boolean;
}

const DEFAULT_CLASS = 'button st-button';

export const Button = ({ className = '', size, children, styleType, loading, ...rest }: IButtonProps) => {
  let classNames = addClassNames(className, DEFAULT_CLASS);

  const buttonTypeClass = getButtonType(styleType);
  classNames = addClassNames(classNames, buttonTypeClass);

  const buttonSizeClass = getButtonSize(size);
  classNames = addClassNames(classNames, buttonSizeClass);

  classNames = loading ? addClassNames(classNames, 'is-loading') : removeClassName(classNames, 'is-loading')

  return (
    <button className={classNames} {...rest} >
      {children}
    </button>
  )
}
