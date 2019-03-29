import * as React from 'react';

import { addClassNames } from 'utils/component-helpers';
import './styles.scss';

export interface IModalProps {
  children: any;
  fullScreen: boolean;
  contentClassName?: string
}

const DEFAULT_CONTENT_CLASSES = 'modal-content';
const FULL_SCREEN_CLASS = 'full-screen';

export const Modal = ({ contentClassName, children, fullScreen }: IModalProps) => {
  let contentClassNames = addClassNames(contentClassName, DEFAULT_CONTENT_CLASSES);
  if (fullScreen) contentClassNames = addClassNames(FULL_SCREEN_CLASS, contentClassNames);
  return (
    <div className="modal modal-container is-active">
      <div className="modal-background"></div>
      <div className={contentClassNames}>
        {children}
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
}
