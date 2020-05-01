import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Heading.scss';

const Heading = ({ children, level, subHeading }) => {
  const classes = classNames('Heading', [`Heading--${level}`]);

  const Element = `h${level}`;
  const heading = <Element className={classes}>{children}</Element>;

  if (subHeading) {
    return (
      <header className="heading-group">
        {heading}
        <div className="meta">{subHeading}</div>
      </header>
    );
  }

  return heading;
};

export default Heading;

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
  subHeading: PropTypes.node,
};

Heading.defaultProps = {
  level: 2,
};
