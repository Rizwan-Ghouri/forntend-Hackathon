// import React from 'react';
// import LoanCard from '../components/LoanCard';

// const Dashboard = () => {
//   const loanCards = [
//     { amount: 5000, period: '6 months', category: 'Personal', status: 'Approved' },
//     { amount: 20000, period: '12 months', category: 'Home', status: 'Pending' },
//     { amount: 10000, period: '9 months', category: 'Education', status: 'Approved' },
//     { amount: 15000, period: '6 months', category: 'Car', status: 'Rejected' },
//   ];

//   return (
//     <div>
//       <h2>Your Loan Dashboard</h2>
//       <div className="cards-container">
//         {loanCards.map((card, index) => (
//           <LoanCard key={index} card={card} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import LoanCard from '../components/LoanCard';
import { useLoanContext } from '../context/LoanContext'; // Importing the LoanContext

const Dashboard = () => {
  const { loanCards } = useLoanContext(); // Get loanCards from context

  return (
    <div className="dashboard-container">
      <h2>Your Loan Dashboard</h2>
      <div className="cards-container">
        {loanCards.map((card, index) => (
          <LoanCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;