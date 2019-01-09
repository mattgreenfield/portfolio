import React from 'react';
import Layout from '../components/Layout/Layout';
import Heading from '../components/Heading/Heading';

const NotFoundPage = () => (
  <Layout>
    <Heading>Page not found (404)</Heading>
    <p>Please try another page or ensure the URL was typed correctly.</p>
  </Layout>
);

export default NotFoundPage;
