import React from 'react';

const ActionBtn = ({ onClick, disabled }) => (
  <div>
    <button className='action-btn' onClick={onClick} disabled={disabled}>
      What should I do?
    </button>
  </div>
);

export default ActionBtn;
