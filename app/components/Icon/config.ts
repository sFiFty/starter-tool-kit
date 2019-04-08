import CloseIcon from 'static/icons/close.svg';
import ArrowBottomIcon from 'static/icons/arrow-bottom/svg';

const close: string = CloseIcon;
const arrowBottom: string = ArrowBottomIcon;

export enum IIconsNames {
  close = 'close',
  arrowBottom = 'arrowBottom',
}

export const icons = {
  close: CloseIcon,
  arrowBottom: ArrowBottomIcon,
}

export const getIconByName = (name: IIconsNames): string => {
  return icons[name];
}

