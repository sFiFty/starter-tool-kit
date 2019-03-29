  /**
   * concatenates default class and extra classes 
   * @param classNames - extra classes
   */
  export const addClassNames = (classNames?: string, defaultClasses: string = ''): string => {
    if (!classNames) return defaultClasses;
    return `${defaultClasses} ${classNames}`;
  }