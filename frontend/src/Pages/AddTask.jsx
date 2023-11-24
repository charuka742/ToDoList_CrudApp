import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState({
    title: '',
    description: '',
    status: '',
    dueDate: '',
  });

  const handleInput = (e) => {
    setTasks({ ...tasks, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/v1/tasks/add', tasks);
      console.log(res.data);
      navigate('/todolist');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container mx-auto flex flex-col items-center justify-center mt-36'>
      <h1 className='text-5xl font-bold mb-4'>Add A Task</h1>

      <div className='bg-white rounded shadow overflow-hidden w-1/2 flex-grow'>
        <form className='p-4' onSubmit={(e) => handleSubmit(e)}>
          <div className='todo-input-item mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Title</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='text'
              placeholder='What is the Title Task?'
              name='title'
              value={tasks.title}
              onChange={handleInput}
            />
          </div>

          <div className='todo-input-item mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Description</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='text'
              placeholder='Description about the Task?'
              name='description'
              value={tasks.description}
              onChange={handleInput}
            />
          </div>

          <div className='flex mb-4'>
            <div className='w-1/2 pr-2'>
              <div className='todo-input-item'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Status</label>
                <select
                  className='border rounded w-full py-2 px-3'
                  name='status'
                  value={tasks.status}
                  onChange={handleInput}
                >
                  <option value='todo'>To-Do</option>
                  <option value='inProgress'>In Progress</option>
                  <option value='completed'>Completed</option>
                </select>
              </div>
            </div>

            <div className='w-1/2 pl-2'>
              <div className='todo-input-item'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Due Date</label>
                <input
                  className='border rounded w-full py-2 px-3'
                  type='date'
                  placeholder='Due-Date'
                  name='dueDate'
                  value={tasks.dueDate}
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center mx-auto'>
            <div className='w-1/2 pr-1'>
              <div className='todo-input-item'>
                <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'
                >
                  Add
                </button>
              </div>
            </div>

            <div className='w-1/2 pl-1'>
              <div className='todo-input-item'>
                <button type='reset' className='bg-red-600 text-white py-2 px-4 rounded'>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
