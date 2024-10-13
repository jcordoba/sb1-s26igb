import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import QuarterlyReport from './pages/QuarterlyReport';
import MissionaryActivity from './pages/MissionaryActivity';
import SabbathSchool from './pages/SabbathSchool';
import MemberManagement from './pages/MemberManagement';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/quarterly-report" element={<QuarterlyReport />} />
            <Route path="/missionary-activity" element={<MissionaryActivity />} />
            <Route path="/sabbath-school" element={<SabbathSchool />} />
            <Route path="/member-management" element={<MemberManagement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;