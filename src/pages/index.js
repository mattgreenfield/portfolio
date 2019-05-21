import React from 'react';
import { graphql } from 'gatsby';

import Billboard from '../components/Billboard/Billboard';
import PostList from '../components/PostList/PostList';
import Heading from '../components/Heading/Heading';

export default function IndexPage({ data }) {
  const latestBlogPosts = data.blogPosts.edges;
  const siteData = data.siteData.siteMetadata;

  return (
    <>
      <Billboard
        heading={siteData.title}
        subHeading={siteData.job_description}
      />
      <PostList
        title="Blog"
        to="/blog"
        headingLevel={2}
        items={latestBlogPosts}
      />
      <Heading level={2}>About</Heading>
      <p>{siteData.about}</p>
      <p>
        If you'd like to know more, please{' '}
        <a href={`mailto: ${siteData.email}`}>send me an email.</a>
      </p>
      {/* <h2>CV</h2>
      <p>Here are some of the places I've worked.</p> */}
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
