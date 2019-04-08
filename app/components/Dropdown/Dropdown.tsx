import * as React from 'react';

import './styles.scss';

export interface IDropdownProps {
  children: any;
  trigger: any;
}

const CONTENT_CONTAINER_CLASS = 'dropdown-content-container';
const CONTAINER_CLASS = 'dropdown';

export const Dropdown = ({ children, trigger }: IDropdownProps) => {
  const [isDropdownShown, showDropdown] = React.useState<boolean>(false);
  React.useEffect(() => {
    /**
     * if user clicks outside of dropdown container - hide dropdown
     */
    document.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLDivElement;
      if (isParentHasClass(target, CONTAINER_CLASS)) return;
      if (!isParentHasClass(target, CONTENT_CONTAINER_CLASS)) {
        showDropdown(false);
      } 
    });
  }, [0]);

  /**
   * Checks if this element has parents with particular className
   * @param className class for checking
   */
  const isParentHasClass = (element: HTMLElement, className: string): boolean | undefined | null => {
    if (element.className && element.className.split(' ').indexOf(className) >= 0) return true;
    const parent = element.parentNode as HTMLElement;
    return element.parentNode && isParentHasClass(parent, className);
}

  const switchDropdownVisibility = () => showDropdown(!isDropdownShown);
  return (
    <div className="dropdown-container">
      <div className={`dropdown ${isDropdownShown ? 'is-active' : ''}`}>
        <div className="dropdown-trigger" onClick={switchDropdownVisibility}>
          {trigger}
        </div>
        <div className={`dropdown-menu ${CONTENT_CONTAINER_CLASS}`} id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
