// src/components/Alerts.js
import React from 'react';

const Alerts = ({ status }) => {
  if (status !== 'Poor') return null; // show alert only if Poor

  return (
    <div style={{
      margin: '20px',
      padding: '15px',
      border: '2px solid red',
      borderRadius: '10px',
      backgroundColor: '#ffe5e5',
      color: 'red',
      fontWeight: 'bold'
    }}>
      Alert: Air Quality is Poor! Take action immediately.
    </div>
  );
};

export default Alerts;
