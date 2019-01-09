import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Heading from '../Heading/Heading';

import './PostList.scss';

export default function PostList({ title, to, items, headingLevel }) {
  return (
    <div className="PostList">
      <Heading level={headingLevel}>{title}</Heading>
      {items && (
        <ul className="PostList__list">
          {items.map(({ node }, index) => {
            const item = node.frontmatter;
            return (
              <li key={item.path}>
                <Link to={item.path} className="PostList__item plain">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {to && (
        <Link to={to} className="PostList__link">
          View all
        </Link>
      )}
    </div>
  );
}

PostList.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  items: PropTypes.array,
  headingLevel: PropTypes.number,
};

PostList.defaultProps = {
  headingLevel: 2,
};
