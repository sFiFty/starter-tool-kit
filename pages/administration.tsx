import * as React from 'react';

import { Administration } from 'screens/Administration';
import { withAuth } from 'containers/WithAuth';

const administration = (props: any) => {
  console.log(props)
  return (
    <Administration />
  )
}

export default withAuth(administration);
