import React from 'react';

const ToDoList = () => {
  return (
    <div className='max-w-xl mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>To-Do List</h1>
      <div className='bg-white rounded shadow overflow-hidden'>
        <div className='border-b border-gray-200 px-6 py-4'>
          <h3 className='text-lg font-semibold mb-2'>Task 1</h3>
          <p className='text-gray-600'>Description</p>
        </div>
        {/* Add more tasks as needed */}
      </div>
    </div>
  );
};

export default ToDoList;
