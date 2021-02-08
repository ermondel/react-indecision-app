import React from 'react';

const Option = ({ num, value, remove }) => (
  <div className='option-list__item'>
    <p className='option-list__value'>
      {num}. {value}
    </p>
    <button className='option-list__remove-btn' onClick={() => remove(value)}>
      remove
    </button>
  </div>
);

export default Option;
