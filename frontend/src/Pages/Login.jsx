import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center mt-36'>
      <h1 className='text-5xl font-bold mb-4'>Login</h1>

      <div className='bg-white rounded shadow overflow-hidden w-1/2 flex-grow'>
        <div className='p-4'>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Username</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='text'
              placeholder='Enter your username'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='password'
              placeholder='Enter your password'
            />
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-1/2 pr-1'>
              <button
                type='button'
                className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full'
              >
                Login
              </button>
            </div>
            
            <div className='w-1/2 pl-1'>
              <button
                type='button'
                className='bg-gray-300 text-gray-800 py-2 px-4 rounded w-full'
              >
                Cancel
              </button>
            </div>
          </div>

          <div className='mt-4 text-center'>
            <p className='text-gray-700'>
              Don't have an account?{' '}
              <Link to="/register" className='text-blue-500 hover:underline'>
                Create new account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
