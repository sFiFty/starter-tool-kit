import * as React from 'react';

export interface IDropdownItemProps {
  children: any;
}

export const DropdownItem = (props: IDropdownItemProps) => {
  return (
    <a href="#" className="dropdown-item">
      {props.children}
    </a>
  );
}
