import CloseIcon from 'static/icons/close.svg';

const close: string = CloseIcon;

export enum IIconsNames {
  close = 'close',
}

export const icons = {
  close: CloseIcon
}

export const getIconByName = (name: IIconsNames): string => {
  return icons[name];
}

