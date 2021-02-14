import React, { Component } from 'react';

class DecisionForm extends Component {
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
      <div className='decisions__add'>
        {this.props.message ? (
          <p className='decisions__add__message'>{this.props.message}</p>
        ) : null}

        <form className='decisions__add__form' onSubmit={this.onSubmit}>
          <input
            className='decisions__add__input'
            type='text'
            value={this.state.value}
            onChange={this.onChange}
          />

          <button className='decisions__add__submit-btn'>Add Option</button>
        </form>
      </div>
    );
  }
}

export default DecisionForm;
