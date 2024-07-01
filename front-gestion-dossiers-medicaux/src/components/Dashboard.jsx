import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    checkRole();
  }, []);

  const checkRole = async () => {
    const roles = ['collaborateur', 'medecin', 'chargeRH', 'managerRH'];
    for (let role of roles) {
      try {
        const response = await axios.get(`http://localhost:8080/users/${role}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setRole(role.toString());
        setMessage(response.data);
        break;
      } catch (error) {
        console.error(`Not a ${role}`, error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Message:</strong> {message}</p>
      {role === 'MANAGER_RH' && (
        <button className="btn btn-primary mb-3" onClick={() => navigate('/admin/users')}>Manage Users</button>
      )}
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;