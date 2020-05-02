import React from 'react';
import { graphql } from 'gatsby';

import Billboard from '../components/Billboard/Billboard';
import PostList from '../components/PostList/PostList';

export default function IndexPage({ data }) {
  const latestBlogPosts = data.blogPosts.edges;
  const { title, job_description, about } = data.siteData.siteMetadata;

  return (
    <>
      <Billboard heading={title} subHeading={job_description} />
      <p className="mb-6">{about}</p>
      <PostList
        title="Blog"
        to="/blog"
        headingLevel={2}
        items={latestBlogPosts}
      />
    </>
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
    blogPosts: allMarkdownRemark(
      filter: { frontmatter: { path: { regex: "^/blog+/" } } }
      limit: 5
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
