import React, { Component } from 'react';
import './App.css';
import { Section } from './components/Section/Section';
import { Statistics } from './components/Statistics/Statistics';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Notification } from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  totalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  positiveFeedbackPercentage = () => {
    const positiveFeedback =
      Math.round((this.state.good / this.totalFeedback()) * 100) || 0;
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.totalFeedback();
    const positivePercentage = this.positiveFeedbackPercentage();
    return (
      <div className="container">
        <Section>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            ></Statistics>
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
