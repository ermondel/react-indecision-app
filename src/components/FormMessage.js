import React from 'react';

const FormMessage = ({ text }) => {
  return text ? <p className='add-option-message'>{text}</p> : null;
};

export default FormMessage;
