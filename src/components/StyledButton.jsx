// components/StyledButton.jsx
import React from 'react';

const StyledButton = ({ onClick, children, className = '' }) => {
  return (
    <button onClick={onClick} className={`styled-button ${className}`}>
      {children}
    </button>
  );
};

export default StyledButton;

// Add corresponding CSS in App.css or a dedicated CSS module
/*

*/
