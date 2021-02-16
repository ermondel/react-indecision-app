import React from 'react';

const CentralButton = React.memo(({ onClick, disabled }) => (
  <button
    className='main-action-btn'
    onClick={(event) => {
      event.target.blur();
      onClick();
    }}
    disabled={disabled}
  >
    What should I do?
  </button>
));

export default CentralButton;
