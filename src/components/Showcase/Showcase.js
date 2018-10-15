import React from 'react';
import { Link } from 'gatsby';

import './Showcase.scss';

const Showcase = ({ title, to, items }) => (
  <div className="Showcase">
    <h2 className="Showcase__title">{title}</h2>
    {items && (
      <ul className="Showcase__items">
        {items.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.path} className="Card">
              <div className="Card__inner">
                <div className="Card__title">{node.context.title}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    )}
    {to && (
      <Link to={to} className="Showcase__more">
        View all
      </Link>
    )}
  </div>
);

export default Showcase;
