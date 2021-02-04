import React, { Component } from 'react';
import FormMessage from './FormMessage';

class AddForm extends Component {
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
      <div>
        <FormMessage text={this.props.message} />

        <form className='add-option' onSubmit={this.onSubmit}>
          <input
            className='add-option__input'
            type='text'
            value={this.state.value}
            onChange={this.onChange}
          />

          <button className='button'>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddForm;
