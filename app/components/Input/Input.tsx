import * as React from 'react';

import { addClassNames } from 'utils/component-helpers';
import { getInputSize, IInputSizes } from './config';
import './styles.scss';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
  type?: string;
  customSize?: IInputSizes;
  placeholder?: string;
  className?: string;
  error?: string;
  noAutocomplete?: boolean;
}

const DEFAULT_CLASSES = 'input st-input';
const DEFAULT_TYPE = 'text';

export const Input = (
  { type = DEFAULT_TYPE, placeholder = '', className, customSize, error, noAutocomplete, ...rest }: IInputProps
  ) => {
  let classNames = addClassNames(className, DEFAULT_CLASSES);
  const inputTypeClass = getInputSize(customSize);
  classNames = addClassNames(classNames, inputTypeClass);
  if (error) addClassNames(classNames, 'is-danger');
  return (
    <div className={`input-container ${error && 'has-error'}`}>
      <input
        autoComplete={noAutocomplete ? 'new-password' : undefined}
        className={classNames}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
      { error && (<div className="error">{error}</div>) }
    </div>
  );
}
