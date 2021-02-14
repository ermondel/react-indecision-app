import React from 'react';

const DecisionsRemoveAll = ({ display = true, onClick }) => {
  if (!display) {
    return null;
  }

  return (
    <button className='decisions__remove-all-btn' onClick={onClick}>
      Remove All
    </button>
  );
};

export default DecisionsRemoveAll;
