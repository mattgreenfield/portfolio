import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import Showcase from '../components/Showcase/Showcase';

export default function BlogPage({ data }) {
  const blogPages = data.allSitePage.edges;
  return (
    <Layout>
      <div className="PageWrapper">
        <Showcase title="Writing" items={blogPages} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query allBlogPosts {
    allSitePage(
      filter: { context: { type: { eq: "blog" } } }
      sort: { fields: [context___date], order: DESC }
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
