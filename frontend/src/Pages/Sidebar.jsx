import React from 'react';
import { FaTasks, FaSearch, FaCalendarAlt, FaFilter, FaSignOutAlt } from 'react-icons/fa';
import Profile from './Profile';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  

  return (
    <div className="flex h-screen">
      <div className="w-1/8 bg-gray-800 text-white p-6 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Task Management</h2>

        <div className="mb-4">
          <Link to="/todolist">
          <FaTasks className="inline-block mr-2" />
          <span>Task List</span>
          </Link>
          
        </div>

        <div className="mb-4">
          <FaSearch className="inline-block mr-2" />
          <span>Search Task</span>
        </div>

        <div className="mb-4">
          <FaCalendarAlt className="inline-block mr-2" />
          <span>Filter by Due Date</span>
        </div>

        <div className="mb-4">
          <FaFilter className="inline-block mr-2" />
          <span>Filter by Status</span>
          <ul className="ml-4">
            <li>ToDo</li>
            <li>In Progress</li>
            <li>Completed</li>
          </ul>
        </div>

        <div className="mt-auto">
          <FaSignOutAlt className="inline-block mr-2" />
          <button
            type="button"
            className="text-white hover:underline"
            onClick={() => {
              console.log('Logout clicked');
            }}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex-grow p-8">
        <Profile/>
        
      </div>
    </div>
  );
};

export default Sidebar;
