import React, { Component } from 'react';
import OptionAddMessage from './OptionAddMessage';

class OptionAdd extends Component {
  state = {
    value: '',
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.value.trim());
    this.setState(() => ({ value: '' }));
  };

  onChange = (event) => {
    const value = event.target.value;
    this.setState(() => ({ value }));
  };

  render() {
    return (
      <div className='option-add'>
        <OptionAddMessage text={this.props.message} />

        <form className='option-add__form' onSubmit={this.onSubmit}>
          <input
            className='option-add__input'
            type='text'
            value={this.state.value}
            onChange={this.onChange}
          />

          <button className='option-add__submit-btn'>Add Option</button>
        </form>
      </div>
    );
  }
}

export default OptionAdd;
