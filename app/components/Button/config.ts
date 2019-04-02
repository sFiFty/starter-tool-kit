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

export const getButtonType = (type?: IButtonTypes): buttonType => {
  if (!type) return buttonType.default;
  return buttonType[type];
};
