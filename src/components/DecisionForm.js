import React from 'react';

const DecisionForm = React.memo((props) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const decision = event.target.decision.value.trim();

    event.target.decision.value = '';
    event.target.submitbtn.blur();

    if (!decision) {
      props.addMessage('Enter valid value to add item');
      return;
    }

    if (props.checkDecision(decision)) {
      props.addMessage('This decision already exists');
      return;
    }

    if (decision.length > 170) {
      props.addMessage('The text is too long (max 170 characters)');
      return;
    }

    props.addDecision(decision);
  };

  return (
    <div className='decisions__add'>
      {props.message && <p className='decisions__add__message'>{props.message}</p>}

      <form className='decisions__add__form' onSubmit={onSubmit}>
        <input className='decisions__add__input' type='text' name='decision' />

        <button className='decisions__add__submit-btn' name='submitbtn'>
          Add Option
        </button>
      </form>
    </div>
  );
});

export default DecisionForm;
