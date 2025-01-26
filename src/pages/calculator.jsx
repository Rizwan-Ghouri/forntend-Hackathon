import React, { useState } from 'react';

const LoanCalculator = () => {
  const [amount, setAmount] = useState('');
  const [period, setPeriod] = useState('');
  const [installment, setInstallment] = useState(null);

  const calculateInstallment = () => {
    if (amount && period) {
      const principal = parseFloat(amount);
      const rate = 0.1 / 12; // Default interest rate of 10% annually
      const months = parseInt(period);

      const emi = principal * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
      setInstallment(emi.toFixed(2));
    } else {
      setInstallment('Please enter valid values for all fields.');
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Loan Calculator</h1>
      <div className="calculator-field">
        <label className="calculator-label">Loan Amount (PKR):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="calculator-input"
          placeholder="Enter loan amount"
        />
      </div>
      <div className="calculator-field">
        <label className="calculator-label">Loan Period (Months):</label>
        <input
          type="number"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="calculator-input"
          placeholder="Enter loan period"
        />
      </div>
      <button
        onClick={calculateInstallment}
        className="calculator-button"
      >
        Calculate Installment
      </button>
      {installment !== null && (
        <div className="calculator-result">
          {isNaN(installment) ? (
            <p className="error-text">{installment}</p>
          ) : (
            <p className="result-text">Monthly Installment: PKR {installment}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;