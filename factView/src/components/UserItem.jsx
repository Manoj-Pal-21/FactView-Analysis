import React from 'react';
import { FaAngleUp, FaAngleDown  } from "react-icons/fa6";
import UserEditForm from './UserEditForm';
import UserDetails from './UserDetails';

const UserItem = ({
    user,
    index,
    expandedIndex,
    editIndex,
    editingUser,
    handleAccordionClick,
    handleEditClick,
    handleSaveClick,
    handleCancelClick,
    handleDeleteClick,
    handleFieldChange,
    isAdult
}) => {
    return (
        <div key={user.id} className="mb-2">
            <div
                className={`p-4 border rounded cursor-pointer flex items-center justify-between ${expandedIndex === index ? 'bg-gray-100' : ''}`}
                onClick={() => handleAccordionClick(index)}
            >
                <div className="flex items-center">
                    <img src={user.picture} alt={user.first} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">{user.first} {user.last}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div>
                    {expandedIndex === index ? <FaAngleUp /> : <FaAngleDown />}
                </div>
            </div>

            {expandedIndex === index && (
                <div className="p-4 border rounded mt-2">
                    {editIndex === index ? (
                        <UserEditForm
                            editingUser={editingUser}
                            handleSaveClick={handleSaveClick}
                            handleCancelClick={handleCancelClick}
                            handleFieldChange={handleFieldChange}
                        />
                    ) : (
                        <UserDetails
                            user={user}
                            isAdult={isAdult}
                            handleEditClick={() => handleEditClick(index)}
                            handleDeleteClick={() => handleDeleteClick(index)}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default UserItem;
