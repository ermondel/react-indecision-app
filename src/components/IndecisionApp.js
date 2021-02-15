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

  addDecision = (option) => {
    this.__setState({ options: addOption(this.state.options, option) });
  };

  addMessage = (message) => {
    this.__setState({ message });
  };

  checkDecision = (decision) => {
    return this.state.options.indexOf(decision) >= 0 ? true : false;
  };

  closeModal = () => {
    this.__setState({ modalOpen: false });
  };

  removeDecision = (option) => {
    this.__setState({ options: removeOption(this.state.options, option) });
  };

  removeAllDecisions = () => {
    this.__setState({ options: [] });
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
            decisions={this.state.options}
            addDecision={this.addDecision}
            removeDecision={this.removeDecision}
            removeAllDecisions={this.removeAllDecisions}
            message={this.state.message}
            addMessage={this.addMessage}
            checkDecision={this.checkDecision}
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
