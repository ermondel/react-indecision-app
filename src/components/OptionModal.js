import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={props.isOpen}
    onRequestClose={props.closeModal}
    contentLabel='Selected Option'
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title'>Selected Option</h3>
    <p className='modal__body'>{props.selectedOption}</p>
    <button className='modal__close-btn' onClick={props.closeModal}>
      Ok
    </button>
  </Modal>
);

Modal.setAppElement('#app');

export default OptionModal;
