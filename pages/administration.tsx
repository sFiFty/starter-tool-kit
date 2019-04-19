import * as React from 'react';
import { administrationApi } from 'services/administration';

import { Administration } from 'screens/Administration';
import { Layout } from 'components/Layout';

const administration = (props: any) => {
  return (
    <Layout isSecure>
      <Administration { ...props } />
    </Layout>
  )
}


administration.getInitialProps = async function() {
  const res = await administrationApi.getAppConfiguration();
  const data = await res.json();
  return {
    data: data,
  }

}

export default administration;
