import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      type="button"
      key={option}
      onClick={() => onLeaveFeedback(option)}
      className={s.btn}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
