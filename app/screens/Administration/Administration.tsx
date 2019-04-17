import * as React from 'react';

export const Administration = (props) => {
  console.log(props);
  return (
    <div>
      Administration
      {props.data}
    </div>
  );
}
