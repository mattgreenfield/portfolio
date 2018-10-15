import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Showcase from '../components/Showcase/Showcase';

export default function WorkPage({ data }) {
  const pages = data.allSitePage.edges;
  return (
    <Layout>
      <div className="PageWrapper">
        <Showcase title="Work" items={pages} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query allWorkPosts {
    allSitePage(
      filter: { context: { type: { eq: "work" } } }
      sort: { fields: [context___display_order], order: ASC }
    ) {
      edges {
        node {
          id
          path
          context {
            type
            title
          }
        }
      }
    }
  }
`;
