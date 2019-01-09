import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout/Layout';
import PostList from '../components/PostList/PostList';

export default function BlogPage({ data }) {
  const pages = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="PageWrapper">
        <PostList title="All blog posts" items={pages} headingLevel={1} />
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query allBlogPosts {
    allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "^/blog+/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            image {
              childImageSharp {
                fluid(maxWidth: 340) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
