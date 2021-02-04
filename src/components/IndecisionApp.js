import React from 'react';
import Header from './Header';
import AddForm from './AddForm';
import ActionBtn from './ActionBtn';
import OptionList from './OptionList';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    modalOpen: false,
    message: '',
  };

  subtitle = 'Put your life in the hands of a computer';

  showRandomOption = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.__setState({ selectedOption: option, modalOpen: true });
  };

  addOption = (option) => {
    if (!option) {
      this.__setState({ message: 'Enter valid value to add item' });
      return;
    }

    if (this.state.options.indexOf(option) >= 0) {
      this.__setState({ message: 'This option already exists' });
      return;
    }

    this.__setState({ options: this.state.options.concat(option) });
  };

  closeModal = () => {
    this.__setState({ modalOpen: false });
  };

  removeOption = (option) => {
    this.__setState({
      options: this.state.options.filter((el) => el !== option),
    });
  };

  removeAllOptions = () => {
    this.__setState({ options: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem('options'));

      if (options) {
        this.__setState({ options });
      }
    } catch (e) {
      console.log('[APP]', 'Local storage error');
    }
  }

  __setState(nextState) {
    if (!nextState.message && this.state.message) {
      nextState.message = '';
    }

    this.setState(nextState);
  }

  render() {
    return (
      <div>
        <Header subtitle={this.subtitle} />

        <main className='container'>
          <ActionBtn
            disabled={this.state.options.length <= 0}
            onClick={this.showRandomOption}
          />

          <div className='widget'>
            <OptionList
              options={this.state.options}
              removeItem={this.removeOption}
              removeAll={this.removeAllOptions}
            />

            <AddForm onSubmit={this.addOption} message={this.state.message} />
          </div>
        </main>

        <OptionModal
          closeModal={this.closeModal}
          isOpen={this.state.modalOpen}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
