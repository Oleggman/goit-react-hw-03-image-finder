import React from 'react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none'
  },
  overlay: {
    background:' rgba(0, 0, 0, 0.5)'
  }
};

Modal.setAppElement('#root');

export const ModalImage = ({ src, tags, modalIsOpen, closeModal }) => {
  return (
    <Modal
        isOpen={modalIsOpen}
      style={customStyles}
      onRequestClose={closeModal}
      >
      <img src={src} alt={tags} width="700"/>
    </Modal>
  )
}
