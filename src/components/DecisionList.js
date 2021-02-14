import React from 'react';
import DecisionItem from './DecisionItem';

const DecisionList = ({ options, removeItem }) => {
  if (options.length <= 0) {
    return (
      <p className='decisions__list__message'>
        Please add an option to get started!
      </p>
    );
  }

  return options.map((option, index) => (
    <DecisionItem key={option} value={option} num={index + 1} remove={removeItem} />
  ));
};

export default DecisionList;
