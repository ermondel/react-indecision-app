import React from 'react';

const ActionBtn = ({ onClick, disabled }) => (
  <button className='main-action-btn' onClick={onClick} disabled={disabled}>
    What should I do?
  </button>
);

export default ActionBtn;
