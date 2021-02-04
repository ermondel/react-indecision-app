import React from 'react';

const Option = ({ num, value, remove }) => (
  <div className='option'>
    <p className='option__text'>
      {num}. {value}
    </p>
    <button className='button button--link' onClick={() => remove(value)}>
      remove
    </button>
  </div>
);

export default Option;
