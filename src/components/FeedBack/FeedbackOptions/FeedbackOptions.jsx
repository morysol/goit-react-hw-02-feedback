import PropTypes from 'prop-types';
import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div id="FeedBackControls" className={s.controls}>
    <button
      onClick={onLeaveFeedback}
      id="good"
      type="submit"
      className={s.feedbackButton}
    >
      good
    </button>
    <button
      onClick={onLeaveFeedback}
      id="neutral"
      type="submit"
      className={s.feedbackButton}
    >
      neutral
    </button>
    <button
      onClick={onLeaveFeedback}
      id="bad"
      type="submit"
      className={s.feedbackButton}
    >
      bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
