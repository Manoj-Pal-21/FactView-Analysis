import React, { useState, useEffect } from 'react';
import { celibrities } from './celebrities';
import UserList from './components/UserList';
import { CiSearch } from "react-icons/ci";


const App = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    setUsers(celibrities);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAccordionClick = (index) => {
    if (editIndex === null) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  const handleEditClick = (index) => {
    if (!isAdult(users[index].dob)) return;
    setEditIndex(index);
    setEditingUser({ ...users[index] });
  };

  const handleSaveClick = () => {
    if (!editingUser) return;
    const updatedUsers = [...users];
    updatedUsers[editIndex] = { ...editingUser };
    setUsers(updatedUsers);
    setEditIndex(null);
    setEditingUser(null);
  };

  const handleCancelClick = () => {
    setEditIndex(null);
    setEditingUser(null);
  };

  const handleDeleteClick = (index) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter((_, i) => i !== index);
      setUsers(updatedUsers);
    }
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setEditingUser(prev => ({ ...prev, [name]: value }));
  };

  const isAdult = (dob) => {
    const birthDate = new Date(dob);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    return age >= 18;
  };

  const filteredUsers = users.filter(user =>
    `${user.first} ${user.last}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Celebrity List</h1>

      <div className="relative w-full">
        <CiSearch
          className="absolute top-1/3 left-3 transform -translate-y-1/3 h-5 w-5 text-gray-500"
        />
        <input
          type="text"
          placeholder="Search User"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 pl-10 mb-4 w-full rounded-md"
        />
      </div>

      <UserList
        users={filteredUsers}
        expandedIndex={expandedIndex}
        editIndex={editIndex}
        editingUser={editingUser}
        handleAccordionClick={handleAccordionClick}
        handleEditClick={handleEditClick}
        handleSaveClick={handleSaveClick}
        handleCancelClick={handleCancelClick}
        handleDeleteClick={handleDeleteClick}
        handleFieldChange={handleFieldChange}
        isAdult={isAdult}
      />
    </div>
  );
};

export default App;
