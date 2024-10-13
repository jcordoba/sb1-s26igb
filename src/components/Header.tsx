import React from 'react';
import { Link } from 'react-router-dom';
import { Church } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Church size={24} />
          <span className="text-xl font-bold">Adventist Church Stats</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Dashboard</Link></li>
            <li><Link to="/quarterly-report" className="hover:text-blue-200">Quarterly Report</Link></li>
            <li><Link to="/missionary-activity" className="hover:text-blue-200">Missionary Activity</Link></li>
            <li><Link to="/sabbath-school" className="hover:text-blue-200">Sabbath School</Link></li>
            <li><Link to="/member-management" className="hover:text-blue-200">Members</Link></li>
            <li><Link to="/login" className="hover:text-blue-200">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;