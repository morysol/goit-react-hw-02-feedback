import PropTypes from 'prop-types';
import React from 'react';

const Notification = ({ noFeedback }) => (
  <p className="Notification">{noFeedback}</p>
);

Notification.propTypes = {
  noFeedback: PropTypes.string,
};
export default Notification;
