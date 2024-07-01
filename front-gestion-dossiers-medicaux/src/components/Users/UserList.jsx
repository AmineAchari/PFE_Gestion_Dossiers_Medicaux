import React, { useEffect, useState } from 'react';
import userService from '../../services/userService';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getUsers().then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;