import React from 'react';

const OptionAddMessage = ({ text }) => {
  return text ? <p className='option-add__message'>{text}</p> : null;
};

export default OptionAddMessage;
