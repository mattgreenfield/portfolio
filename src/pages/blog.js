import React from 'react';
import { graphql } from 'gatsby';
import PostList from '../components/PostList/PostList';

export default function BlogPage({ data }) {
  const pages = data.allMarkdownRemark.edges;
  return (
    <>
      <div className="PageWrapper">
        <PostList title="All blog posts" items={pages} headingLevel={1} />
      </div>
    </>
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
            date(formatString: "MMMM Do, YYYY")
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
