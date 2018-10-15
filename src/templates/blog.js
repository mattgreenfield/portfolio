import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import PostHeader from '../components/Post/PostHeader/PostHeader';
import PostFooter from '../components/Post/PostFooter/PostFooter';

export default function Template({ data, pageContext }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const { prev, next } = pageContext;

  return (
    <Layout width="medium">
      <article>
        <PostHeader
          title={pageContext.title}
          publishDate={frontmatter.date}
          postType={pageContext.type}
        />
        <main>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </main>
        <PostFooter prev={prev} next={next} />
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
