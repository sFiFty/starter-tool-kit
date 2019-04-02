export enum IButtonTypes {
  primary = 'primary',
  link = 'link',
  info = 'info',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
}

export enum buttonType {
  default = '',
  primary = 'is-primary',
  link = 'is-link',
  info = 'is-info',
  success = 'is-success',
  warning = 'is-warning',
  danger = 'is-danger',
}

export enum IButtonSizes {
  small = 'small',
  normal = 'normal',
  medium = 'medium',
  large = 'large'
}

export enum buttonSize {
  default = '',
  small = 'is-small',
  normal = 'is-normal',
  medium = 'is-medium',
  large = 'is-large'
}

export const getButtonType = (type?: IButtonTypes): buttonType => {
  if (!type) return buttonType.default;
  return buttonType[type];
};

export const getButtonSize = (size?: IButtonSizes): buttonSize => {
  if (!size) return buttonSize.default;
  return buttonSize[size];
};
