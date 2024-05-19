import React from 'react';

const Balance = ({ balance, showAlert }) => {
  return (
    <div className='currentBalance'>
      <h2>Current Balance: ${balance ? balance.toFixed(2) : '0.00'}</h2>
      {showAlert && (
        <div className="alert alert-danger" role="alert">
          Warning: Your balance is negative!
        </div>
      )}
    </div>
  );
};

export default Balance;
