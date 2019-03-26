import * as React from 'react';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();

export const Administration = () => {
  console.log(publicRuntimeConfig.staticFolder);
  return (
    <div>
      Administration
    </div>
  );
}
