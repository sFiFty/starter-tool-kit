export enum IInputSizes {
  small = 'small',
  normal = 'normal',
  medium = 'medium',
  large = 'large'
}

export enum inputSize {
  default = '',
  small = 'is-small',
  normal = 'is-normal',
  medium = 'is-medium',
  large = 'is-large'
}

export const getInputSize = (size?: IInputSizes): inputSize => {
  if (!size) return inputSize.default;
  return inputSize[size];
};