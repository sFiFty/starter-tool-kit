import * as React from 'react';
import fetch from 'isomorphic-unfetch';

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
  const res = await fetch('http://localhost:3005/api/test');
  const data = await res.text();

  return {
    data: data,
  }

}

export default administration;
