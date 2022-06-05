import React from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

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
        [pressedButton]: prevState[pressedButton] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <Section title="Please, leave your feedback!">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={Math.round(
                this.countPositiveFeedbackPercentage()
              )}
            ></Statistics>
          ) : (
            <Notification></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
