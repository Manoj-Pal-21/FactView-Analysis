import { useState, useEffect } from 'react';
import { celibrities } from '../celebrities';

const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(celibrities);
  }, []);

  return [users, setUsers];
};

export default useUsers;
