import React from 'react';

const Transaction = ({ onDeposit, onWithdraw, onInterest, onFees, amount, setAmount }) => {
  return (
    <div className='transaction'>
      <div className='input mb-3'>
        <input 
          type='number' 
          className='form-control'
          placeholder='Enter Amount' 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </div>
      <div className='buttons d-flex flex-wrap justify-content-between'>
        <button onClick={onDeposit} className='btn btn-success mb-2' style={{ flex: '0 48%' }}>
          Deposit Amount
        </button>
        <button onClick={onWithdraw} className='btn btn-danger mb-2' style={{ flex: '0 48%' }}>
          Withdraw Amount
        </button>
        <button onClick={onInterest} className='btn btn-warning mb-2' style={{ flex: '0 48%' }}>
          Add Interest (6.7%)
        </button>
        <button onClick={onFees} className='btn btn-secondary mb-2' style={{ flex: '0 48%' }}>
          Charge Bank Fees (6%)
        </button>
      </div>
    </div>
  );
};

export default Transaction;
