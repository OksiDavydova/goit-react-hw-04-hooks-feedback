import { useState } from "react";
import "./App.css";
import { Section } from "./components/Section/Section";
import { Statistics } from "./components/Statistics/Statistics";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions";
import { Notification } from "./components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (option) => {
    switch (option) {
      case "good":
        setGood((prev) => prev + 1);
        break;

      case "neutral":
        setNeutral((prev) => prev + 1);
        break;

      case "bad":
        setBad((prev) => prev + 1);
        break;

      default:
    }
  };

  const totalFeedback = () => {
    let total = good + bad + neutral;
    return total;
    //Object.values(objState).reduce((acc, option) => acc + option, 0);
  };

  const positiveFeedbackPercentage = () => {
    const positiveFeedback = Math.round((good / totalFeedback()) * 100) || 0;
    return positiveFeedback;
  };

  return (
    <div className="container">
      <Section>
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification />
        )}
      </Section>
    </div>
  );
}

export default App;
