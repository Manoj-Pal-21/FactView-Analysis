import React from 'react';
import { MdOutlineCancel, MdCheckCircleOutline } from "react-icons/md";

const UserEditForm = ({
    editingUser,
    handleSaveClick,
    handleCancelClick,
    handleFieldChange
}) => {
    const genderOptions = ['Male', 'Female', 'Other'];

    return (
        <form className="p-4">
            <div className="mb-4 grid grid-cols-3 gap-x-8">
                <div className="flex flex-col">
                    <label className="text-gray-500">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={editingUser.age || ''}
                        onChange={handleFieldChange}
                        className="border rounded-md p-2"
                        readOnly
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-500">Gender</label>
                    <select
                        name="gender"
                        value={editingUser.gender || ''}
                        onChange={handleFieldChange}
                        className="border rounded-md p-2"
                    >
                        <option value="">Select Gender</option>
                        {genderOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label className="text-gray-500">Country</label>
                    <input
                        type="text"
                        name="country"
                        value={editingUser.country || ''}
                        onChange={handleFieldChange}
                        className="border rounded-md p-2"
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="text-gray-500">Description</label>
                <textarea
                    name="description"
                    value={editingUser.description || ''}
                    onChange={handleFieldChange}
                    className="border rounded-md p-2 w-full"
                    rows="4"
                />
            </div>
            <div className="flex justify-end space-x-2">
                <button
                    onClick={handleCancelClick}
                    className="text-red-500 hover:text-red-700"
                >
                    <MdOutlineCancel size={20} />
                </button>
                <button
                    onClick={handleSaveClick}
                    className="text-green-500 hover:text-yellow-700"
                >
                    <MdCheckCircleOutline size={20} />
                </button>
            </div>
        </form>
    );
};

export default UserEditForm;
