import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Heading.scss';

const Heading = ({ children, level }) => {
  const classes = classNames('Heading', {
    [`Heading--${level}`]: true,
  });

  const Element = `h${level}`;

  return <Element className={classes}>{children}</Element>;
};

export default Heading;

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
};

Heading.defaultProps = {
  level: 2,
};
