import * as React from 'react';

import { addClassNames } from 'utils/component-helpers';
import { Icon, IIconsNames } from 'components/Icon';
import './styles.scss';

export interface IModalProps {
  children: any;
  fullScreen: boolean;
  contentClassName?: string;
  isVisible: boolean;
  onVisibilityChange(visibility?: boolean): void;
}

const DEFAULT_CONTENT_CLASSES = 'modal-content';
const FULL_SCREEN_CLASS = 'full-screen';

export const Modal = ({ contentClassName, children, fullScreen, isVisible, onVisibilityChange }: IModalProps) => {
  let contentClassNames = addClassNames(contentClassName, DEFAULT_CONTENT_CLASSES);
  if (fullScreen) contentClassNames = addClassNames(FULL_SCREEN_CLASS, contentClassNames);
  return (
    <div className={`modal modal-container ${isVisible && 'is-active'}`}>
      <div className="modal-background"></div>
      <div className={contentClassNames}>
        {children}
      </div>
      <button className="button button-close is-no-effects is-rounded" onClick={() => onVisibilityChange(!isVisible)}>
        <Icon  name={IIconsNames.close} />
      </button>
    </div>
  );
}
