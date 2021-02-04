import React from 'react';
import RemoveAllBtn from './RemoveAllBtn';
import Option from './Option';

const OptionList = ({ options, removeItem, removeAll }) => {
  const list = options.map((option, index) => (
    <Option key={option} value={option} num={index + 1} remove={removeItem} />
  ));

  return (
    <div>
      <div className='widget-header'>
        <h3 className='widget-header__title'>Your Options</h3>

        <RemoveAllBtn display={options.length > 0} onClick={removeAll} />
      </div>
      {options.length > 0 ? (
        list
      ) : (
        <p className='widget-message'>Please add an option to get started!</p>
      )}
    </div>
  );
};

export default OptionList;
