import React from 'react';
import PropTypes from 'prop-types';

import './Tag.scss';

const Tag = ({ children }) => {
  return <div className="Tag">{children}</div>;
};

export default Tag;

Tag.propTypes = {
  children: PropTypes.node,
};
