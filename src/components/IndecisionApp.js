import React from 'react';
import CentralButton from './CentralButton';
import Decisions from './Decisions';
import DecisionModal from './DecisionModal';
import {
  randomOption,
  addOption,
  removeOption,
  saveOptions,
  readOptions,
} from '../lib/optionList';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    modalOpen: false,
    message: '',
  };

  showRandomOption = () => {
    this.__setState({
      selectedOption: randomOption(this.state.options),
      modalOpen: true,
    });
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

    this.__setState({
      options: addOption(this.state.options, option),
    });
  };

  closeModal = () => {
    this.__setState({ modalOpen: false });
  };

  removeDecision = (option) => {
    this.__setState({
      options: removeOption(this.state.options, option),
    });
  };

  removeAllDecisions = () => {
    this.__setState({
      options: [],
    });
  };

  componentDidUpdate(prevProps, prevState) {
    saveOptions(this.state.options, prevState.options);
  }

  componentDidMount() {
    const options = readOptions();

    if (options && options.length) {
      this.__setState({ options });
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
      <React.Fragment>
        <main className='main'>
          <div className='action-bar'>
            <CentralButton
              disabled={this.state.options.length <= 0}
              onClick={this.showRandomOption}
            />
          </div>

          <Decisions
            options={this.state.options}
            addItem={this.addOption}
            removeItem={this.removeDecision}
            removeAll={this.removeAllDecisions}
            resultMessage={this.state.message}
          />
        </main>

        <DecisionModal
          closeModal={this.closeModal}
          isOpen={this.state.modalOpen}
          selectedOption={this.state.selectedOption}
        />
      </React.Fragment>
    );
  }
}

export default IndecisionApp;
