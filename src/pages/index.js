import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Billboard from '../components/Billboard/Billboard';
import Showcase from '../components/Showcase/Showcase';

export default function IndexPage({ data }) {
  const latestBlogPosts = data.blogPosts.edges;
  const latestWorkPosts = data.workPosts.edges;
  const siteData = data.siteData.siteMetadata;

  return (
    <Layout>
      <Billboard
        heading={siteData.title}
        subHeading={siteData.job_description}
      />
      <Showcase title="Writing" to="/blog" items={latestBlogPosts} />
      <Showcase title="Work" to="/work" items={latestWorkPosts} />
      <h2>About</h2>
      <p>{siteData.about}</p>
      <p>
        If you'd like to know more, please{' '}
        <a href={`mailto: ${siteData.email}`}>send me an email.</a>
      </p>
    </Layout>
  );
}

export const pageQuery = graphql`
  query homePage {
    siteData: site {
      siteMetadata {
        title
        job_description
        about
        email
      }
    }
    blogPosts: allSitePage(
      filter: { context: { type: { eq: "blog" } } }
      limit: 3
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
    workPosts: allSitePage(
      filter: { context: { type: { eq: "work" } } }
      limit: 3
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
