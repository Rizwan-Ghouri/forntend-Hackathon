import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { LoanProvider } from './context/LoanContext'; // Import LoanProvider
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import LoanCard from './components/LoanCard';
import LoanRequest from './pages/LoanRequest';
import LoanCalculator from './pages/calculator';

const App = () => {
  return (
    <LoanProvider>
    <Router>
      <div className='head1'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRac-iF4RKkhLFbGunDWmG36ZmiMCHrIOBoIQ&s" alt="" />
      <h1 className='h1'>Microfinance Menagement App </h1>

      </div>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loan-card" element={<LoanCard />} />
        <Route path="/loan-calcu" element={<LoanCalculator />} />
        <Route path="/loan-req" element={<LoanRequest />} />
      </Routes>
    </Router>
    </LoanProvider>
  );
};

export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { LoanProvider } from './context/LoanContext'; // Import LoanProvider
// import Dashboard from './pages/Dashboard';
// import LoanRequest from './pages/LoanRequest';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';

// function App() {
//   return (
//     <LoanProvider>
//       <Router>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/loan-request" element={<LoanRequest />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//         </Routes>
//       </Router>
//     </LoanProvider>
//   );
// }

// export default App;