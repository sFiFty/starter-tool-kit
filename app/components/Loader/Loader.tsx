import * as React from 'react';
import LoaderImage from 'static/loader.svg';

import './styles.scss';

export interface ILoaderProps {
  withContainer?: boolean;
  size?: number;
}

export const Loader = ({ withContainer = false, size = 2 }: ILoaderProps) => {
  if (withContainer) {
    return (
      <div className="loader-container container">
        <img className="loader-image" src={LoaderImage} alt="loader"/>
      </div>
    )
  }
  return <img src={LoaderImage} alt="loader"/>
}
