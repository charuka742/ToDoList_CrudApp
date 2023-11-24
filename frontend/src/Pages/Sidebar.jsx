import React from 'react';
import { FaTasks, FaSearch, FaCalendarAlt, FaFilter, FaSignOutAlt } from 'react-icons/fa';
import Profile from './Profile';

const Sidebar = () => {
  

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/8 bg-gray-800 text-white p-6 min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Task Management</h2>

        {/* Task List */}
        <div className="mb-4">
          <FaTasks className="inline-block mr-2" />
          <span>Task List</span>
        </div>

        {/* Search Task */}
        <div className="mb-4">
          <FaSearch className="inline-block mr-2" />
          <span>Search Task</span>
        </div>

        {/* Filter by Due Date */}
        <div className="mb-4">
          <FaCalendarAlt className="inline-block mr-2" />
          <span>Filter by Due Date</span>
        </div>

        {/* Filter by Status */}
        <div className="mb-4">
          <FaFilter className="inline-block mr-2" />
          <span>Filter by Status</span>
          <ul className="ml-4">
            <li>ToDo</li>
            <li>In Progress</li>
            <li>Completed</li>
          </ul>
        </div>

        {/* Logout Button */}
        <div className="mt-auto">
          <FaSignOutAlt className="inline-block mr-2" />
          <button
            type="button"
            className="text-white hover:underline"
            onClick={() => {
              // Handle logout logic
              console.log('Logout clicked');
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-8">
        {/* Main Content Goes Here */}
        <Profile/>
        {/*  need to change with onclick for todolist, */}

        {/* ... Rest of the Sidebar Content ... */}
      </div>
    </div>
  );
};

export default Sidebar;
