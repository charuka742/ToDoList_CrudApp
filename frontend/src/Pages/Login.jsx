import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate(); 
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });

  const handleInput = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('fake data url', loginDetails);
      console.log(res.data);
      if (res.status===200) {
        navigate('/profile');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container mx-auto flex flex-col items-center justify-center mt-36'>
      <h1 className='text-5xl font-bold mb-4'>Login</h1>

      <div className='bg-white rounded shadow overflow-hidden w-1/2 flex-grow'>
        <form className='p-4' onSubmit={(e) => handleSubmit(e)}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Username</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='text'
              placeholder='Enter your username'
              name='username'
              value={loginDetails.username}
              onChange={handleInput}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='password'
              placeholder='Enter your password'
              name='password'
              value={loginDetails.password}
              onChange={handleInput}
            />
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-1/2 pr-1'>
              <button
                type='submit'
                className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 w-full'
              >
                Login
              </button>
            </div>

            <div className='w-1/2 pl-1'>
              <button
                type='reset'
                className='bg-gray-300 text-gray-800 py-2 px-4 rounded w-full'
              >
                Cancel
              </button>
            </div>
          </div>

          <div className='mt-4 text-center'>
            <p className='text-gray-700'>
              Don't have an account?{' '}
              <Link to='/register' className='text-blue-500 hover:underline'>
                Create new account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
