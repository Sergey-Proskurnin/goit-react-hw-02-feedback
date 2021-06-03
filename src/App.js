import React, { Component } from "react";

import "./App.css";
import Statistics from "components/Statistics";
import FeedbackOptions from "components/FeedbackOptions";
import Notification from "components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  totalPositiv() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  countPositiveFeedbackPercentage() {}
  render() {
    const total = this.countTotalFeedback();
    const positivTotal = this.totalPositiv() ? this.totalPositiv() : 0;
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <>
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.handleIncrement}
        />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivTotal}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}

export default App;
