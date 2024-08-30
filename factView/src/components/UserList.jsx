import React from 'react';
import UserItem from './UserItem';

const UserList = ({
    users,
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
        <>
            {users.map((user, index) => (
                <UserItem
                    key={user.id}
                    user={user}
                    index={index}
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
            ))}
        </>
    );
};

export default UserList;
