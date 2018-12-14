import React from 'react';

const ToggleButton = ({
  onClick = () => {},
  textColor,
  backgroundColor,
  children
}) => (
  <button
    onClick={onClick}
    style={{
      backgroundColor: backgroundColor,
      color: textColor,
      border: 'none',
      position: 'fixed',
      left: '20px',
      top: '20px'
    }}
  >
    {children}
  </button>
);

export default ToggleButton;
