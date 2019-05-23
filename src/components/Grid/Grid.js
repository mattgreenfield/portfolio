import React from 'react';
import PropTypes from 'prop-types';

import './Grid.scss';

const Grid = ({ children, isList, columns }) => {
  const Element = isList ? 'ul' : 'div';

  return (
    <Element
      className="Grid reset-list"
      style={{ gridTemplateColumns: columns }}
    >
      {isList
        ? React.Children.map(children, child => <li>{child}</li>)
        : children}
    </Element>
  );
};

export default Grid;

Grid.propTypes = {
  children: PropTypes.node,
  isList: PropTypes.bool,
  columns: PropTypes.string,
};

Grid.defaultProps = {
  isList: true,
  columns: 'repeat(auto-fill, 80px)',
};
