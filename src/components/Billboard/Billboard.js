import React from 'react';

import './Billboard.scss';

const Billboard = ({ heading, subHeading }) => (
  <h1 className="Billboard">
    <span className="Billboard__heading">{heading}</span>
    <span className="Billboard__sub">{subHeading}</span>
  </h1>
);

export default Billboard;
