import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import PostHeader from '../components/Post/PostHeader/PostHeader';
import PostFooter from '../components/Post/PostFooter/PostFooter';

import Prism from 'prismjs';
import './blog.scss';

class Blog extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    const { data, pageContext } = this.props;
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    const { prev, next } = pageContext;

    return (
      <Layout width="medium">
        <article>
          <PostHeader
            title={frontmatter.title}
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
}

export default Blog;

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
