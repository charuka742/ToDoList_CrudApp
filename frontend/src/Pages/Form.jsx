import React from 'react';

const Form = () => {
  
  return (
    <div className='container mx-auto flex flex-col items-center justify-center mt-36'>
      <h1 className='text-5xl font-bold mb-4'>Add A Task</h1>
      
      <div className='bg-white rounded shadow overflow-hidden w-1/2 flex-grow'>
        <div className='p-4'>
          <div className='todo-input-item mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Title</label>
            <input className='border rounded w-full py-2 px-3' type='text' placeholder='What is the Title Task?'/>
          </div>
          
          <div className='todo-input-item mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Description</label>
            <input className='border rounded w-full py-2 px-3' type='text' placeholder='Description about the Task?'/>
          </div>
          
          <div className='flex mb-4'>
            <div className='w-1/2 pr-2'>
              <div className='todo-input-item'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Status</label>
                <select className='border rounded w-full py-2 px-3'>
                  <option value='todo'>To-Do</option>
                  <option value='inProgress'>In Progress</option>
                  <option value='completed'>Completed</option>
                </select>
              </div>
            </div>
            
            <div className='w-1/2 pl-2'>
              <div className='todo-input-item'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Due Date</label>
                <input className='border rounded w-full py-2 px-3' type='date' placeholder='Due-Date'/>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center mx-auto'>
            <div className='w-1/2 pr-1'>
              <div className='todo-input-item'>
                <button type='button' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'>Add</button>
              </div>
            </div>
            
            <div className='w-1/2 pl-1'>
              <div className='todo-input-item'>
                <button type='button' className='bg-red-600 text-white py-2 px-4 rounded'>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
