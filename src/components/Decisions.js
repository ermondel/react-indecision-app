import React from 'react';
import DecisionsRemoveAll from './DecisionsRemoveAll';
import DecisionList from './DecisionList';
import DecisionForm from './DecisionForm';

const Decisions = (props) => (
  <div className='decisions'>
    <div className='decisions__header'>
      <h3 className='decisions__title'>Your Options</h3>

      <DecisionsRemoveAll
        display={props.decisions.length > 0}
        onClick={props.removeAllDecisions}
      />
    </div>

    <DecisionList
      decisions={props.decisions}
      removeDecision={props.removeDecision}
    />

    <DecisionForm
      message={props.message}
      addMessage={props.addMessage}
      addDecision={props.addDecision}
      checkDecision={props.checkDecision}
    />
  </div>
);

export default Decisions;
