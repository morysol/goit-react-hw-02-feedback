import React from 'react';

const FeedbackOptions = ({ state, onLeaveFeedback }) => (
  <div id="FeedBackControls" className="FeedBackControls">
    <p className="controlsLabel">Please, leave your feedback!</p>
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

export default FeedbackOptions;
