import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => (
  <div className="FeedbackStatistics">
    <p className="statsLabel">Statistics</p>
    <ul>
      <li>Good : {good}</li>
      <li>Neutral : {neutral}</li>
      <li>Bad : {bad}</li>
      <li>Total : {total}</li>
      <li>Positive Feedback: {positivePercentage} %</li>
    </ul>
  </div>
);

export default Statistics;
