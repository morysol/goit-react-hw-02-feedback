import React from 'react';

const Controls = ({ addGood, addNeutral, addBad }) => (
  <div id="FeedBackControls" className="FeedBackControls">
    <p className="controlsLabel">Please, leave your feedback!</p>
    <button onClick={addGood} type="submit" id="good" className="good">
      good
    </button>
    <button onClick={addNeutral} type="submit" id="neutral" className="neutral">
      neutral
    </button>
    <button onClick={addBad} type="submit" id="bad" className="bad">
      bad
    </button>
  </div>
);

export default Controls;
