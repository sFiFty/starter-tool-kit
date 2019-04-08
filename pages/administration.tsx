import * as React from 'react';

import { Administration } from 'screens/Administration';
import { Layout } from 'components/Layout';

const administration = (props: any) => {
  return (
    <Layout isSecure>
      <Administration />
    </Layout>
  )
}

export default administration;
