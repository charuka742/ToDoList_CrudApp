import React from 'react';

const Profile = () => {
  const totalTasks = 10; // Replace with the actual total number of tasks

  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-16">
      <div className="bg-white rounded shadow overflow-hidden w-1/2 flex-grow">
        <div className="p-8">
          <h1 className="text-5xl font-bold mb-6">My Profile</h1>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <p className="text-gray-800">YourUsername123</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <p className="text-gray-800">youremail@example.com</p>
          </div>

          {/* Add more profile information as needed */}

          <div className="mb-6">
            <p className="text-lg font-semibold">Total Tasks: {totalTasks}</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-1/2flex flex-col items-center justify-center">
              <button
                type="button"
                className="bg-blue-500  text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
