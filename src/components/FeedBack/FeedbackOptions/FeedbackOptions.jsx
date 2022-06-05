import PropTypes from 'prop-types';
import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div id="FeedBackControls" className="FeedBackControls">
    <button onClick={onLeaveFeedback} id="good" type="submit" className="good">
      good
    </button>
    <button
      onClick={onLeaveFeedback}
      id="neutral"
      type="submit"
      className="neutral"
    >
      neutral
    </button>
    <button onClick={onLeaveFeedback} id="bad" type="submit" className="bad">
      bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
