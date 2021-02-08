import React from 'react';

const OptionsRemoveAll = ({ display = true, onClick }) => {
  return display ? (
    <button className='remove-all-btn' onClick={onClick}>
      Remove All
    </button>
  ) : null;
};

export default OptionsRemoveAll;
