import React, { useState } from 'react';
import { Section, Statistics, FeedbackOptions, Notification } from './Feedback';

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedback, setFeedback] = useState(initialFeedback);

  const handleLeaveFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const handleResetFeedback = () => {
    setFeedback(initialFeedback);
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, curr) => acc + curr, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.floor((feedback.good / total) * 100) || 0;
  };

  return (
    <div>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        options={feedback}
        onLeaveFeedback={handleLeaveFeedback}
        onResetFeedback={handleResetFeedback}
      />
      <Section title="Statistics" />
      {!!countTotalFeedback() ? (
        <Statistics
          {...feedback}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default App;
