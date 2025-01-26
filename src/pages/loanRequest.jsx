// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoanRequest = () => {
//   const [loanAmount, setLoanAmount] = useState('');
//   const [timePeriod, setTimePeriod] = useState('');
//   const [category, setCategory] = useState('');
//   const [status, setStatus] = useState('Pending');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!loanAmount || !timePeriod || !category) {
//       alert('Please fill all the fields');
//       return;
//     }

//     // Here you would typically send the data to the server, 
//     // but for now, we'll just log it and navigate to the Dashboard
//     const loanRequest = {
//       loanAmount,
//       timePeriod,
//       category,
//       status
//     };

//     console.log('Loan Request Submitted:', loanRequest);

//     // Navigate to Dashboard after submitting
//     navigate('/dashboard');
//   };

//   return (
//     <div className="loan-request-container">
//       <h2>Loan Request</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Loan Amount</label>
//           <input
//             type="number"
//             placeholder="Enter loan amount"
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Time Period</label>
//           <input
//             type="number"
//             placeholder="Enter time period (in months)"
//             value={timePeriod}
//             onChange={(e) => setTimePeriod(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label>Category</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="">Select Category</option>
//             <option value="Personal">Personal</option>
//             <option value="Home">Home</option>
//             <option value="Education">Education</option>
//             <option value="Car">Car</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Status</label>
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//           >
//             <option value="Pending">Pending</option>
//             <option value="Approved">Approved</option>
//             <option value="Rejected">Rejected</option>
//           </select>
//         </div>

//         <button type="submit">Submit Loan Request</button>
//       </form>
//     </div>
//   );
// };

// export default LoanRequest;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoanContext } from '../context/LoanContext'; // Importing the LoanContext

const LoanRequest = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('Pending');
  const navigate = useNavigate();
  const { addLoanCard } = useLoanContext(); // Get addLoanCard function from context

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!loanAmount || !timePeriod || !category) {
      alert('Please fill all the fields');
      return;
    }

    // Create the loan request object
    const newLoan = {
      amount: loanAmount,
      period: timePeriod,
      category,
      status
    };

    // Add the new loan to the global context
    addLoanCard(newLoan);

    // Navigate to the dashboard after submission
    navigate('/dashboard');
  };

  return (
    <div className="loan-request-container">
      <h2>Loan Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Loan Amount</label>
          <input
            type="number"
            placeholder="Enter loan amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Time Period</label>
          <input
            type="number"
            placeholder="Enter time period (in months)"
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Personal">Personal</option>
            <option value="Home">Home</option>
            <option value="Education">Education</option>
            <option value="Car">Car</option>
          </select>
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <button type="submit">Submit Loan Request</button>
      </form>
    </div>
  );
};

export default LoanRequest;