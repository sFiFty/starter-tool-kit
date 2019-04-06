import React from 'react';

import { Home } from 'screens/Home';
import { Layout } from 'components/Layout';

export default class extends React.Component {
  render() {    
    return (
      <Layout>
        <Home />
      </Layout>
    )
  }
}