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
          {items.map(({ node }) => {
            const item = node.frontmatter;
            return (
              <li key={item.path}>
                <Link to={item.path} className="PostList__item plain-link">
                  <Heading level={headingLevel + 1}>{item.title}</Heading>
                  <span>{item.date}</span>
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
