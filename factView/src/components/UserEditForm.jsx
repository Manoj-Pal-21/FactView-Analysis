import React, { useState } from 'react';
import { MdOutlineCancel, MdCheckCircleOutline } from "react-icons/md";

const UserEditForm = ({
  editingUser,
  handleSaveClick,
  handleCancelClick,
  handleFieldChange
}) => {
  const [isEdited, setIsEdited] = useState(false);

  const handleInputChange = (event) => {
    setIsEdited(true);
    handleFieldChange(event);
  };

  const genderOptions = ['Male', 'Female', 'Transgender', 'Rather not say', 'Other'];

  return (
    <form className="p-4">
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-8">
        <div className="flex flex-col">
          <label className="text-gray-500 text-sm md:text-base">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={editingUser.dob || ''}
            onChange={handleInputChange}
            className="border rounded-lg p-2 text-sm md:text-base"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-500 text-sm md:text-base">Gender</label>
          <select
            name="gender"
            value={editingUser.gender || ''}
            onChange={handleInputChange}
            className="border rounded-lg p-2 text-sm md:text-base"
          >
            <option value="">Select Gender</option>
            {genderOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-500 text-sm md:text-base">Country</label>
          <input
            type="text"
            name="country"
            value={editingUser.country || ''}
            onChange={handleInputChange}
            className="border rounded-lg p-2 text-sm md:text-base"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="text-gray-500 text-sm md:text-base">Description</label>
        <textarea
          name="description"
          value={editingUser.description || ''}
          onChange={handleInputChange}
          className="border rounded-lg p-2 text-sm md:text-base w-full"
          rows="4"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-4">
        <button
          onClick={handleCancelClick}
          className="text-red-500 hover:text-red-700"
        >
          <MdOutlineCancel size={20} className="md:size-25" />
        </button>
        <button
          onClick={handleSaveClick}
          className={`text-green-500 hover:text-green-700 ${!isEdited ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isEdited}
        >
          <MdCheckCircleOutline size={20} className="md:size-25" />
        </button>
      </div>
    </form>
  );
};

export default UserEditForm;
