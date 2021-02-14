import React from 'react';
import DecisionsRemoveAll from './DecisionsRemoveAll';
import DecisionList from './DecisionList';
import DecisionForm from './DecisionForm';

const Decisions = React.memo((props) => (
  <div className='decisions'>
    <div className='decisions__header'>
      <h3 className='decisions__title'>Your Options</h3>

      <DecisionsRemoveAll
        display={props.options.length > 0}
        onClick={props.removeAll}
      />
    </div>

    <DecisionList options={props.options} removeItem={props.removeItem} />

    <DecisionForm onSubmit={props.addItem} message={props.resultMessage} />
  </div>
));

export default Decisions;
