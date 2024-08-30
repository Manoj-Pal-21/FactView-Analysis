import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md";


const UserDetails = ({ user, isAdult, handleEditClick, handleDeleteClick }) => {
    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };

    return (
        <div className="p-4">
            <div className="mb-4 grid grid-cols-3 gap-x-8">
                <div className="flex flex-col">
                    <span className="text-gray-500">Age</span>
                    <span>{calculateAge(user.dob)} years</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500">Gender</span>
                    <span>{user.gender}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500">Country</span>
                    <span>{user.country}</span>
                </div>
            </div>
            <div className="mb-4">
                <span className="text-gray-500">Description</span>
                <p>{user.description}</p>
            </div>
            <div className="flex justify-end space-x-2">

                <button
                    onClick={handleDeleteClick}
                    className="text-red-500 hover:text-red-700"
                >
                    <MdDelete size={20} />
                </button>
                {isAdult(user.dob) && (
                    <button
                        onClick={handleEditClick}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <MdEdit size={20} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserDetails;
