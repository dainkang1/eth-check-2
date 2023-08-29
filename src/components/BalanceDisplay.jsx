import React from 'react';
import '../components/BalanceDisplay.css';

function BalanceDisplay({balance}) {

  return (
    <div className="Balance-Display">
        {balance !== null ? (
        <p className="Balance-Text">Balance: {balance} ETH</p>
      ) : (
        <p className="Balance-Text-Unavailable">Balance not available</p>
      )}
    </div>
  );
}

export default BalanceDisplay;
