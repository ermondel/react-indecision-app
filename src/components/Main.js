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

class Main extends React.Component {
  state = {
    decisions: [],
    decision: undefined,
    modalOpen: false,
    message: '',
  };

  showRandomDecision = () => {
    this.__setState({
      decision: randomOption(this.state.decisions),
      modalOpen: true,
    });
  };

  addDecision = (decision) => {
    this.__setState({ decisions: addOption(this.state.decisions, decision) });
  };

  addMessage = (message) => {
    this.__setState({ message });
  };

  checkDecision = (decision) => {
    return this.state.decisions.indexOf(decision) >= 0;
  };

  closeModal = () => {
    this.__setState({ modalOpen: false });
  };

  removeDecision = (decision) => {
    this.__setState({ decisions: removeOption(this.state.decisions, decision) });
  };

  removeAllDecisions = () => {
    this.__setState({ decisions: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    saveOptions(this.state.decisions, prevState.decisions);
  }

  componentDidMount() {
    const decisions = readOptions();

    if (decisions && decisions.length) {
      this.__setState({ decisions });
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
              disabled={this.state.decisions.length <= 0}
              onClick={this.showRandomDecision}
            />
          </div>

          <Decisions
            decisions={this.state.decisions}
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
          decision={this.state.decision}
        />
      </React.Fragment>
    );
  }
}

export default Main;
