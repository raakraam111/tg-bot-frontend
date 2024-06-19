import React from 'react';
import PropTypes from 'prop-types';
import { FaInfoCircle, FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';
import '../css/Toast.css';

export default function Toast({ type, message, onClose }) {
  const getIcon = () => {
    switch (type) {
      case 'info':
        return <FaInfoCircle />;
      case 'success':
        return <FaCheckCircle />;
      case 'error':
        return <FaTimesCircle />;
      case 'warning':
        return <FaExclamationCircle />;
      default:
        return <FaInfoCircle />;
    }
  };

  return (
    <div className={`toast ${type}`}>
      <div className="toast-icon">{getIcon()}</div>
      <div className="toast-message">{message}</div>
      <div className="toast-close" onClick={onClose}>X</div>
    </div>
  );
}

Toast.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
