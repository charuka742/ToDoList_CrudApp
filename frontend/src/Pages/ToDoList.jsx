// ToDoList.js
import React from 'react';

const ToDoList = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center mt-36'>
      <h1 className='text-5xl font-bold mb-4'>To-Do List</h1>
      <div className='bg-white rounded shadow overflow-hidden w-1/2 flex-grow'>
        <div className='p-4'>
          <h2 className='text-2xl font-bold mb-4'>Tasks</h2>

          <div className='bg-white rounded shadow overflow-hidden'>
            <div className='border-b border-gray-200 px-6 py-4'>
              <h3 className='text-lg font-semibold mb-2'>Task 1</h3>
              <p className='text-gray-600'>Description</p>
            </div>
            {/* Add more tasks as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
