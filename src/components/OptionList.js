import React from 'react';
import Option from './Option';
import OptionAdd from './OptionAdd';
import OptionsRemoveAll from './OptionsRemoveAll';

const OptionList = (props) => {
  const displayList = props.options.length > 0;

  const emptyListMessage = (
    <p className='option-list__message'>Please add an option to get started!</p>
  );

  const list = props.options.map((option, index) => {
    return (
      <Option
        key={option}
        value={option}
        num={index + 1}
        remove={props.removeItem}
      />
    );
  });

  return (
    <div className='option-list'>
      <div className='option-list__header'>
        <h3 className='option-list__title'>Your Options</h3>
        <OptionsRemoveAll display={displayList} onClick={props.removeAll} />
      </div>

      {displayList ? list : emptyListMessage}

      <OptionAdd onSubmit={props.addItem} message={props.resultMessage} />
    </div>
  );
};

export default OptionList;
