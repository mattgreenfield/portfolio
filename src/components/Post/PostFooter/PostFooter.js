import React from 'react';
import { Link } from 'gatsby';

import './PostFooter.scss';

const PostFooter = ({ prev, next }) => (
  <footer className="PostFooter">
    <nav className="PostFooter__nav">
      {prev && <Link to={prev.frontmatter.path}>{prev.frontmatter.title}</Link>}
      {next && <Link to={next.frontmatter.path}>{next.frontmatter.title}</Link>}
    </nav>
  </footer>
);

export default PostFooter;
