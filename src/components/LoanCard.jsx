import React from 'react';

const LoanCard = ({ card }) => {
  return (
    <div className="card">
      <h3>Loan Amount: ${card.amount}</h3>
      <p>Period: {card.period}</p>
      <p>Category: {card.category}</p>
      <p>Status: {card.status}</p>
    </div>
  );
};

export default LoanCard;