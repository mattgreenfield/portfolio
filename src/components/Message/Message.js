import React from 'react';
import PropTypes from 'prop-types';

import './Message.scss';

const Message = ({ children }) => {
  return <div className="Message">{children}</div>;
};

export default Message;

Message.propTypes = {
  children: PropTypes.node,
};
