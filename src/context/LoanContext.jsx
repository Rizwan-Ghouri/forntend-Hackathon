import React, { createContext, useState, useContext } from 'react';

// Create Context
const LoanContext = createContext();

// LoanProvider component to wrap the app and provide loan data
export const LoanProvider = ({ children }) => {
  const [loanCards, setLoanCards] = useState([]);

  // Function to add a new loan request to the state
  const addLoanCard = (newLoan) => {
    setLoanCards([...loanCards, newLoan]);
  };

  return (
    <LoanContext.Provider value={{ loanCards, addLoanCard }}>
      {children}
    </LoanContext.Provider>
  );
};

// Custom hook to use loan context in components
export const useLoanContext = () => useContext(LoanContext);