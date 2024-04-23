import { Component } from 'react';
import { Section, Statistics, FeedbackOptions, Notification } from './Feedback';

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};
export class App extends Component {
  state = initialFeedback;

  handleLeaveFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };
  handleResetFeedback = () => {
    this.setState(initialFeedback);
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce((acc, curr) => {
      return acc + this.state[curr];
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100) || 0;
  }

  render() {
     

    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleLeaveFeedback}
          onResetFeedback={this.handleResetFeedback}
        />
        <Section title="Statistics" />

        {!!this.countTotalFeedback() ? (
          <Statistics
            {...this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
