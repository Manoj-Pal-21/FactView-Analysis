branch-being-merged# Celebrity List React Application

## Overview

This React application allows users to view, search, edit, and delete a list of celebrities. Users can also view detailed information about each celebrity, including their date of birth, gender, country, and description. The application includes a confirmation dialog for deletions.

## Features

- **Search Functionality**: Users can search for celebrities by their first or last name.
- **Accordion UI**: Expand or collapse sections to view more details about each celebrity.
- **Edit and Save**: Edit details such as date of birth, gender, country, and description. Save the changes or cancel editing.
- **Delete Confirmation**: Confirm before deleting a user from the list.

## Technologies Used

- React
- React Icons
- Tailwind CSS
- Vercel (for deployment)

## Getting Started


### Installation

1. Clone the repository:

    ```bash
    git clone git@github.com:Manoj-Pal-21/FactView-Analysis.git
    cd factView
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Components

- **App**: Main component that manages state and renders `UserList` and `ConfirmationDialog`.
- **UserList**: Displays a list of `UserItem` components.
- **UserItem**: Represents a single user and handles expanding/collapsing sections, editing, and deleting.
- **UserEditForm**: Form for editing user details.
- **UserDetails**: Displays user details with options to edit or delete.
- **ConfirmationDialog**: A dialog to confirm the deletion of a user.

## Deployment

The application is deployed on Vercel. You can access the live application at the following URL:

[https://fact-view-analysis-mbez.vercel.app/](https://fact-view-analysis-mbez.vercel.app/)

