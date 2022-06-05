import PropTypes from 'prop-types';
import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => (
  <ul className="FeedbackStatistics">
    <li>Good : {good}</li>
    <li>Neutral : {neutral}</li>
    <li>Bad : {bad}</li>
    <li>Total : {total}</li>
    <li>Positive Feedback: {positivePercentage} %</li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
