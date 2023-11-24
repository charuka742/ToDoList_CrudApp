// Register.js
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center mt-36'>
      <h1 className='text-5xl font-bold mb-4'>Register</h1>

      <div className='bg-white rounded shadow overflow-hidden w-1/2 flex-grow'>
        <div className='p-4'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='text'
              placeholder='Enter your name'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Username</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='text'
              placeholder='Choose a username'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='email'
              placeholder='Enter your email'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='password'
              placeholder='Choose a password'
            />
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-1/2'>
              <button
                type='button'
                className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full'
              >
                Register
              </button>
            </div>
          </div>

          <div className='mt-4 text-center'>
            <p className='text-gray-700'>
              If already registered?{' '}
              <Link to="/login" className='text-blue-500 hover:underline'>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
