import React from 'react';

import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
// import Controls from './Controls';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // addFeedbackGood = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };

  // addFeedbackNeutral = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  // addFeedbackBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  onLeaveFeedback = e => {
    // console.log(e.target.classList.value);
    // console.log(e.target.id);
    // console.dir(e.target);
    // const pressedButton = e.target.classList.value;
    const pressedButton = e.target.id;
    this.setState(prevState => {
      return {
        [[pressedButton]]: prevState[pressedButton] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        {/* <Controls
          addGood={this.addFeedbackGood}
          addNeutral={this.addFeedbackNeutral}
          addBad={this.addFeedbackBad}
        /> */}
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={Math.round(
            this.countPositiveFeedbackPercentage() || 0
          )}
        />
      </div>
    );
  }
}

export default Feedback;
