import './App.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notifications/Notification';
import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countPositiveFeedbackPercentage = () => {
    let total = good + neutral + bad;
    return total === 0 ? 0 : ((good / total) * 100).toFixed(0);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const handleClick = evt => {
    const buttonName = evt.target.innerText;
    buttonName === 'Good' && setGood(i => i + 1);
    buttonName === 'Neutral' && setNeutral(i => i + 1);
    buttonName === 'Bad' && setBad(i => i + 1);
  };

  return (
    <main className="App">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {good === 0 && neutral === 0 && bad === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </main>
  );
}

export default App;
