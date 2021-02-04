import React from 'react';

const RemoveAllBtn = ({ display = true, onClick }) => {
  return display ? (
    <button className='button button--link' onClick={onClick}>
      Remove All
    </button>
  ) : null;
};

export default RemoveAllBtn;
