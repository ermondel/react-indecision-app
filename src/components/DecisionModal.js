import React from 'react';
import Modal from 'react-modal';

const DecisionModal = React.memo((props) => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.closeModal}
    contentLabel='Selected Decision'
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title'>Selected Decision</h3>
    <p className='modal__body'>{props.decision}</p>
    <button className='modal__close-btn' onClick={props.closeModal}>
      Ok
    </button>
  </Modal>
));

Modal.setAppElement('#app');

export default DecisionModal;
