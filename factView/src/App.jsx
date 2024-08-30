import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import UserList from './components/UserList';
import ConfirmationDialog from './components/ConfirmationDialog';
import { isAdult, calculateAge } from './utils/dateUtils';
import useUsers from './hooks/useUsers';

const App = () => {
  const [users, setUsers] = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAccordionClick = (index) => {
    if (editIndex === null) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };

  const handleEditClick = (index) => {
    if (!isAdult(users[index]?.dob)) return;
    const userToEdit = users[index];
    setEditingUser({ ...userToEdit });
    setEditIndex(index);
  };

  const handleSaveClick = () => {
    if (!editingUser) return;
    const updatedUsers = [...users];
    const age = calculateAge(editingUser.dob);
    updatedUsers[editIndex] = { ...editingUser, age };
    setUsers(updatedUsers);
    setEditIndex(null);
    setEditingUser(null);
  };

  const handleCancelClick = () => {
    setEditIndex(null);
    setEditingUser(null);
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setDialogOpen(true);
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      const updatedUsers = users.filter((_, i) => i !== deleteIndex);
      setUsers(updatedUsers);
      setDeleteIndex(null);
      setDialogOpen(false);
    }
  };

  const cancelDelete = () => {
    setDeleteIndex(null);
    setDialogOpen(false);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setEditingUser(prev => {
      const updatedUser = { ...prev, [name]: value };
      if (name === 'dob') {
        updatedUser.age = calculateAge(value);
      }
      return updatedUser;
    });
  };

  const filteredUsers = users.filter(user =>
    `${user.first} ${user.last}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Celebrity List</h1>

      <div className="relative w-full">
        <CiSearch
          className="absolute top-1/3 left-3 transform -translate-y-1/3 h-5 w-5 text-gray-500"
        />
        <input
          type="text"
          placeholder="Search User"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border border-gray-300 p-2 pl-10 mb-4 w-full rounded-md"
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

      <ConfirmationDialog
        isOpen={dialogOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
};

export default App;
