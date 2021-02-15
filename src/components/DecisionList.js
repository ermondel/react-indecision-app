import React from 'react';
import DecisionItem from './DecisionItem';

const DecisionList = React.memo(({ decisions, removeDecision }) => {
  if (decisions.length <= 0) {
    return (
      <p className='decisions__list__message'>
        Please add an option to get started!
      </p>
    );
  }

  return decisions.map((option, index) => (
    <DecisionItem
      key={option}
      value={option}
      num={index + 1}
      remove={removeDecision}
    />
  ));
});

export default DecisionList;
