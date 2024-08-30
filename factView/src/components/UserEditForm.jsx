import React from 'react';

const UserEditForm = ({ editingUser, handleSaveClick, handleCancelClick, handleFieldChange }) => {
    return (
        <div>
            <label>
                Country:
                <input
                    type="text"
                    name="country"
                    value={editingUser.country}
                    onChange={handleFieldChange}
                    className="border p-2 w-full"
                />
            </label>
            <label>
                Description:
                <textarea
                    name="description"
                    value={editingUser.description}
                    onChange={handleFieldChange}
                    className="border p-2 w-full"
                />
            </label>
            <label>
                Gender:
                <select
                    name="gender"
                    value={editingUser.gender}
                    onChange={handleFieldChange}
                    className="border p-2 w-full"
                >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">Transgender</option>
                    <option value="rather not say">Rather not say</option>
                    <option value="other">Other</option>
                </select>
            </label>
            <button
                onClick={handleSaveClick}
                disabled={!editingUser}
                className="bg-blue-500 text-white px-4 py-2 mt-2"
            >
                Save
            </button>
            <button
                onClick={handleCancelClick}
                className="bg-gray-500 text-white px-4 py-2 mt-2 ml-2"
            >
                Cancel
            </button>
        </div>
    );
};

export default UserEditForm;
