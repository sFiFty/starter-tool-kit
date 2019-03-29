import * as React from 'react';
import { addClassNames } from 'utils/component-helpers';

export interface IInputProps {
  type?: string;
  placeholder?: string;
  className?: string;
}

const DEFAULT_CLASSES = 'input';
const DEFAULT_TYPE = 'text';

export const Input = ({ type = DEFAULT_TYPE, placeholder = '', className }: IInputProps) => {

  const classNames = addClassNames(className, DEFAULT_CLASSES);
  return (
    <input className={classNames} type={type} placeholder={placeholder} />
  );
}