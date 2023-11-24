import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ToDoList = () => {
  const [records, setRecords] = useState ([]);
  const loadList = async () => {
    try {
      const response = await axios.get ('real link is needed');
      console.log (response.data);
      setRecords (response.data);
    } catch (error) {
      console.error ('Error fetching data:', error);
    }
  };

  useEffect (() => {
    loadList ();
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-36">
      <h1 className="text-5xl font-bold mb-4">To-Do List</h1>
      <div className="bg-white rounded shadow overflow-hidden w-1/2 flex-grow">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Tasks</h2>
          <table>
            <thead>
              {/* <tr>
                <th>USERID</th>
                <th>ID</th>
                <th>TITLE</th>
              </tr> */}
            </thead>
            <tbody>
              {records.map ((rec, i) => (
                <div className="bg-white rounded shadow overflow-hidden">
                  <div className="border-b border-gray-200 px-6 py-4">
                    <h3 className="text-lg font-semibold mb-2">{rec.title}</h3>
                    <div className="flex">
                      <p className="text-gray-600 mr-4">{rec.description}</p>
                      <p className="text-gray-600 mr-4">{rec.status}</p>
                      <p className="text-gray-600">{rec.dueDate}</p>
                    </div>
                  </div>

                </div>
              ))

              // <tr key={i}>
              //   <td>{rec.userId}</td>
              //   <td>{rec.id}</td>
              //   <td>{rec.title}</td>
              // </tr>
              }
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
