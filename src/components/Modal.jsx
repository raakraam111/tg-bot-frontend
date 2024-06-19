import React from 'react';
import '../css/Modal.css';

export default function Modal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="close-button" onClick={onClose}>X</div>
        <h2>User Energy Drained</h2>
        <p>Your energy is completely drained. Please wait for it to recharge or take necessary actions.</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
