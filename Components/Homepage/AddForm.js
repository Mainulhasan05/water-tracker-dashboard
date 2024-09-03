import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/axiosInstance';
const AddForm = () => {
  const { data } = useSelector((state) => state.homepage);
  const [selectedUser, setSelectedUser] = useState('');
  const [jogs, setJogs] = useState(0);
  const [date, setDate] = useState('');

  useEffect(() => {
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    setDate(today);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the form data according to waterLogSchema
    const formData = {
      user: selectedUser,
      date: new Date(date), // Convert to Date object
      numberOfJugs: jogs,
    };

    try {
      // Make a POST request to /api/waterlogs
      const response = await axiosInstance.post('/api/waterlogs', formData);
        console.log('Water log created:', response.data);
        if (response.status === 201) {
          alert('Water log created successfully');
        }
    } catch (error) {
      console.error('Error creating water log:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form className="p-4 border rounded shadow" onSubmit={handleSubmit} onKeyPress={handleKeyPress}>
      <div className="mb-3">
        <label htmlFor="userSelect" className="form-label">Select User:</label>
        <select
          id="userSelect"
          className="form-select"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Select a user</option>
          {data?.data?.users?.map((user) => (
            <option key={user.id} value={user._id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="jogsInput" className="form-label">Number of Jugs:</label>
        <input
          type="number"
          className="form-control"
          id="jogsInput"
          value={jogs}
          onChange={(e) => setJogs(parseInt(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="dateInput" className="form-label">Date:</label>
        <input
          type="date"
          className="form-control"
          id="dateInput"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default AddForm;
