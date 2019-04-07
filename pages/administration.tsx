import * as React from 'react';

import { Administration } from 'screens/Administration';
import { Layout } from 'components/Layout';

const administration = (props: any) => {
  console.log(props)
  return (
    <Layout>
      <Administration />
    </Layout>
  )
}

export default administration;
