import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Balance from './Balance';
import Transaction from './Transaction';

function BankApp() {
  // State variables
  const [balance, setBalance] = useState(0); // Balance amount
  const [showAlert, setShowAlert] = useState(false); // Alert state
  const [amount, setAmount] = useState(''); // Input amount for deposit/withdrawal

  // Function to handle deposit
  const handleDeposit = () => {
    if (!isNaN(amount) && amount !== '') { // Check if amount is valid
      const newBalance = balance + parseFloat(amount); // Calculate new balance
      setBalance(newBalance); // Update balance
      setAmount(''); // Clear input
      if (newBalance >= 0) setShowAlert(false); // Hide alert if balance is non-negative
    }
  };

  // Function to handle withdrawal
  const handleWithdraw = () => {
    if (!isNaN(amount) && amount !== '') { // Check if amount is valid
      const newBalance = balance - parseFloat(amount); // Calculate new balance
      setBalance(newBalance); // Update balance
      setAmount(''); // Clear input
      if (newBalance < 0) setShowAlert(true); // Show alert if balance is negative
    }
  };

  // Function to handle adding interest
  const handleInterest = () => {
    if (balance > 0) { // Check if balance is positive
      const newBalance = balance * 1.067; // Apply 6.7% interest
      setBalance(newBalance); // Update balance
      setAmount(''); // Clear input
      if (newBalance >= 0) setShowAlert(false); // Hide alert if balance is non-negative
    }
  };

  // Function to handle charging bank fees
  const handleFees = () => {
    if (balance > 0) { // Check if balance is positive
      const newBalance = balance * 0.94; // Apply 6% bank fees
      setBalance(newBalance); // Update balance
      setAmount(''); // Clear input
      if (newBalance < 0) setShowAlert(true); // Show alert if balance is negative
    }
  };

  return (
    <div className='container mt-5'>
      <div className='calculator p-4 bg-light rounded shadow'>
        <div className='welcome'>
          <h1>Welcome to Online Banking System</h1>
        </div>
        <Balance balance={balance} showAlert={showAlert} />
        <Transaction
          onDeposit={handleDeposit}
          onWithdraw={handleWithdraw}
          onInterest={handleInterest}
          onFees={handleFees}
          amount={amount}
          setAmount={setAmount}
        />
      </div>
    </div>
  );
}

export default BankApp;
