import React from 'react';
import '../components/TransactionDisplay.css';

function TransactionDisplay({ transaction }) {

  return (
    <div className="Transaction-Display">
        <div>
          <h2>Last Transaction:</h2>
          <div className="Transaction-Table">
            {Object.entries(transaction).map(([key, value]) => (
              <div key={key} className="Transaction-Row">
                <div className="Transaction-Key">{key}:</div>
                <div className="Transaction-Value">{value.toString()}</div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default TransactionDisplay;
