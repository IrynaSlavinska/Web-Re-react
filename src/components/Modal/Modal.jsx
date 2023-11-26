import { Component } from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    // console.log('backdrop click');
    // console.log('target: ', e.target);
    // console.log('currentTarget: ', e.currentTarget);

    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="ModalBackdrop" onClick={this.handleBackdropClick}>
        <div className="ModalContent">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
