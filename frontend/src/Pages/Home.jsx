import React from 'react';
import { Link } from 'react-router-dom';
import image from '../Assets/image01.jpg';

const Home = () => {
  return (
    <div className="relative h-screen">
      <img
        src={image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm"
      />

      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="container mx-auto flex flex-col items-center justify-center relative z-10 text-white ">
        <div className=" mx-auto mt-20 font-serif italic p-4 text-center text-5xl tracking-widest">
          <p className="mb-4">
            "Your to-do list represents your priorities."
          </p>
          <p className="mb-4">
            "This is your life. Do what matters."
          </p>
          <p className="mb-8 mt-8 text-lg">
            "Plan your work and work your plan."
          </p>
        </div>

        <div className="mt-48 flex flex-col items-center justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-2xl">
            <Link to="/register">Get Started</Link>
          </button>
          <p className="mt-4 text-xl">
            Already have an account?
            <a href="/login" className="text-blue-500 hover:underline">
              {' '}Login
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
