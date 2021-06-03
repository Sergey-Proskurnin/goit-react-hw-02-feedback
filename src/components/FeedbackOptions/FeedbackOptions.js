import React from "react";

import Section from "components/Section";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Section title="Please leave feedback">
    {options.map((option, idx) => (
      <button key={idx} type="button" name={option} onClick={onLeaveFeedback}>
        {option}
      </button>
    ))}
  </Section>
);

export default FeedbackOptions;
