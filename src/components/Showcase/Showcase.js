import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './Showcase.scss';

const availableColors = [
  '#f3e888',
  '#ffaabb',
  '#BEE9E8',
  '#FFC15E',
  '#9DD9D2',
  '#BAD9B5',
];
const colors = [...availableColors, ...availableColors, ...availableColors];

export default function Showcase({ title, to, items }) {
  return (
    <div className="Showcase">
      <h2 className="Showcase__title">{title}</h2>
      {items && (
        <ul className="Showcase__items">
          {items.map(({ node }, index) => {
            const item = node.frontmatter;

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="Card"
                  style={{ backgroundColor: colors[index] }}
                >
                  <div className="Card__inner">
                    {item.image && (
                      <Img
                        fluid={item.image.childImageSharp.fluid}
                        className="Card__image"
                      />
                    )}
                    <div className="Card__footer">
                      <div className="Card__title">{item.title}</div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {to && (
        <Link to={to} className="Showcase__more">
          View all
        </Link>
      )}
    </div>
  );
}
