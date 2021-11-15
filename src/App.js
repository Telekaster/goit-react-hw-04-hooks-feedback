import { useState } from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [good_value, setGood] = useState(0);
  const [neutral_value, setNeutral] = useState(0);
  const [bad_value, setBad] = useState(0);

  function handleClick(evt) {
    const key = evt.target.id;

    switch (key) {
      case "good_value":
        setGood(good_value + 1);
        break;

      case "neutral_value":
        setNeutral(neutral_value + 1);
        break;

      case "bad_value":
        setBad(bad_value + 1);
        break;

      default:
        break;
    }
  }

  function countTotalFeedback() {
    return good_value + neutral_value + bad_value;
  }
  function countPositiveFeedbackPercentage() {
    return Math.round((good_value / countTotalFeedback()) * 100);
  }

  return (
    <>
      <Section
        title="Please leave feedback"
        children={<FeedbackOptions onClick={handleClick} />}
      />
      {!good_value && !neutral_value && !bad_value ? (
        <Section title="Statistics" children={<Notification />} />
      ) : (
        <Section
          title="Statistics"
          children={
            <Statistics
              good_value={good_value}
              neutral_value={neutral_value}
              bad_value={bad_value}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          }
        />
      )}
    </>
  );
}
