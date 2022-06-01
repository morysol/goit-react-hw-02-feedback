import React from 'react';

const Statistics = ({ good, neutral, bad }) => (
  <div className="FeedbackStatistics">
    <p className="statsLabel">Statistics</p>
    <ul>
      <li>Good : {good}</li>
      <li>Neutral : {neutral}</li>
      <li>Bad : {bad}</li>
    </ul>
  </div>
);

export default Statistics;
