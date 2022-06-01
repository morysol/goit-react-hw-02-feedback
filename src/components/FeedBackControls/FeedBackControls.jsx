import React from 'react';

import Controls from './Controls';
import Statistics from './Statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedbackGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  addFeedbackNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  addFeedbackBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <Controls
          addGood={this.addFeedbackGood}
          addNeutral={this.addFeedbackNeutral}
          addBad={this.addFeedbackBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

export default Feedback;
