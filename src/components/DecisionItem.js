import React from 'react';

const DecisionItem = ({ num, value, remove }) => (
  <div className='decisions__item'>
    <p className='decisions__value'>
      {num}. {value}
    </p>
    <button className='decisions__remove-btn' onClick={() => remove(value)}>
      remove
    </button>
  </div>
);

export default DecisionItem;
