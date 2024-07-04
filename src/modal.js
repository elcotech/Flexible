import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Redirecting to payment system</h2>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Modal;
