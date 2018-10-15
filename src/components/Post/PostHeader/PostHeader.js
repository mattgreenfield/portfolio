import React from 'react';
import { Link } from 'gatsby';

import './PostHeader.scss';

const PostHeader = ({ title, publishDate, postType }) => {
  return (
    <header className="PostHeader">
      {postType === 'blog' && <Link to="/blog">Writing</Link>}
      <h1 className="PostHeader__title">{title}</h1>
      {publishDate && <span className="PostHeader__date">{publishDate}</span>}
    </header>
  );
};

export default PostHeader;
