import React from 'react';

import Layout from '@components/layout';
import Venue from '@components/Venue/Venue';

const Index = ({ query }) => {
  return (
    <Layout>
      <Venue query={query} />
    </Layout>
  );
};

Index.getInitialProps = async ({ query }) => {
  return { query };
};

export default Index;
