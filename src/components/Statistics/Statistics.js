import React from "react";

import Section from "components/Section";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
      <Section title = "Statistics">
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
    </Section>
  );
 export default Statistics