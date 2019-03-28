import * as React from 'react';

export interface ILoaderProps {
  withContainer?: boolean;
  size?: number;
}

export const Loader = ({ withContainer = false, size = 2 }: ILoaderProps) => {
  if (withContainer) {
    return (
      <div className="loader-container container">
        <img src={require('static/loader.svg')} alt="loader" />
      </div>
    )
  }
  return (
    <div>
      <img src={require('static/loader.svg')} alt="loader" />
    </div>
  );
}
