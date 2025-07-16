import React, { useEffect, useState } from 'react';
import BugForm from './components/BugForm';
import axios from 'axios';

function App() {
  const [bugs, setBugs] = useState([]);

  const fetchBugs = async () => {
    const res = await axios.get('http://localhost:5000/api/bugs');
    setBugs(res.data);
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  const handleBugCreated = (newBug) => {
    setBugs(prev => [...prev, newBug]);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/bugs/${id}`);
    fetchBugs();
  };

  return (
    <div>
      <h1>🐞 Bug Tracker</h1>
      <BugForm onBugCreated={handleBugCreated} />
      <ul>
        {bugs.map(bug => (
          <li key={bug._id}>
            <strong>{bug.title}</strong> - {bug.status}
            <button onClick={() => handleDelete(bug._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
