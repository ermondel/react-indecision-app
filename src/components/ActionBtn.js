import React from 'react';

const ActionBtn = React.memo(({ onClick, disabled }) => (
  <button className='main-action-btn' onClick={onClick} disabled={disabled}>
    What should I do?
  </button>
));

export default ActionBtn;
