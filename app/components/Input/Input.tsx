import * as React from 'react';

export interface IInputProps {
  type?: string;
  placeholder?: string;
  className?: string;
}

const DEFAULT_CLASSES = 'input';
const DEFAULT_TYPE = 'text';

export const Input = ({ type = DEFAULT_TYPE, placeholder = '', className }: IInputProps) => {
  /**
   * concatenates default class and extra classes 
   * @param classNames - extra classes
   */
  const addClassNames = (classNames: string): string => {
    if (!classNames) return DEFAULT_CLASSES;
    return `${DEFAULT_CLASSES} ${className}`;
  }
  const classNames = addClassNames(className);
  return (
    <input className={classNames} type={type} placeholder={placeholder} />
  );
}
