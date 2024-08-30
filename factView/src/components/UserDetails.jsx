import React from 'react';

const UserDetails = ({ user, isAdult, handleEditClick, handleDeleteClick }) => {
    return (
        <div>
            <p><strong>Country:</strong> {user.country}</p>
            <p><strong>Description:</strong> {user.description}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            {isAdult(user.dob) && (
                <button
                    onClick={handleEditClick}
                    className="bg-yellow-500 text-white px-4 py-2 mr-2"
                >
                    Edit
                </button>
            )}
            <button
                onClick={handleDeleteClick}
                className="bg-red-500 text-white px-4 py-2"
            >
                Delete
            </button>
        </div>
    );
};

export default UserDetails;
