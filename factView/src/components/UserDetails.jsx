import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { calculateAge } from '../utils/dateUtils';

const UserDetails = ({ user, isAdult, handleEditClick, handleDeleteClick }) => {

    return (
        <div className="p-4">
            <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-8">
                <div className="flex flex-col">
                    <span className="text-gray-500 text-sm md:text-base">Age</span>
                    <span className="text-sm md:text-base">{user.age ? user.age : calculateAge(user.dob)} years</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500 text-sm md:text-base">Gender</span>
                    <span className="text-sm md:text-base">{user.gender}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-500 text-sm md:text-base">Country</span>
                    <span className="text-sm md:text-base">{user.country}</span>
                </div>
            </div>
            <div className="mb-4">
                <span className="text-gray-500 text-sm md:text-base">Description</span>
                <p className="text-sm md:text-base">{user.description}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-4">
                <button
                    onClick={handleDeleteClick}
                    className="text-red-500 hover:text-red-700"
                >
                    <MdDelete size={20} className="md:size-25" />
                </button>
                {isAdult(user.dob) && (
                    <button
                        onClick={handleEditClick}
                        className="text-blue-500 hover:text-blue-700"
                    >
                        <MdEdit size={20} className="md:size-25" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default UserDetails;
