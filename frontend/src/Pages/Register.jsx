import React,{useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import axios  from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleInput = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('post method for tasks', users);
      console.log(res.data);
      if (res.status === 200) {
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container mx-auto flex flex-col items-center justify-center mt-36'>
      <h1 className='text-5xl font-bold mb-4'>Register</h1>

      <div className='bg-white rounded shadow overflow-hidden w-1/2 flex-grow'>
        <form className='p-4' onSubmit={(e) => handleSubmit(e)}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Name</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='text'
              placeholder='Enter your name'
              name='name'
              value={users.name}
              onChange={handleInput}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Username</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='text'
              placeholder='Choose a username'
              name='username'
              value={users.username}
              onChange={handleInput}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='text'
              placeholder='Enter your email'
              name='email'
              value={users.email}
              onChange={handleInput}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
            <input
              className='border rounded w-full py-2 px-3'
              type='password'
              placeholder='Choose a password'
              name='password'
              value={users.password}
              onChange={handleInput}
            />
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-1/2'>
              <button
                type='submit'
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
        </form>
      </div>
    </div>
  );
};

export default Register;
