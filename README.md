# Gafar's Photo Gallery

This is a simple web application that allows users to log in and view a photo gallery. Users can log in using their email and password, and once authenticated, they can browse and interact with a gallery of images.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure Node.js is installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   PS: Using git bash:
   git clone https://github.com/Layconnn/hng-org.git

2. Change to the projects directory:

    cd "hngx-task-three"

3. Install dependencies:

    npm install

4. Start the development server:

    npm run dev

## Usage
- Login: Users can log in using a predefined email and password combination.
    which include: 
    - ## Email: user@example.com
    - ## Password: 1Password
- Gallery: After logging in, users can view a gallery of images.
- Search: Users can search for images by tags.
- Drag and Drop: Users can rearrange the order of images in the gallery by dragging and dropping them.

## Features
- Authentication: Firebase Authentication is used for user login.
- Responsive Design: The application is responsive and adapts to different screen sizes.
- Image Gallery: Displays images with tags and allows users to rearrange them.
- Search: Users can search for images by tags.
- Error Handling: Provides informative error messages for login form validation.
- Loading Indicator: A loading spinner is displayed while the content is loading.
- Toast Notifications: Toast notifications are used to provide feedback to the user.

## Folder Structure
The project structure is organized as follows:

photo-gallery-app/
│
├── src/
│   ├── components/          # React components
│   ├── styles/              # SCSS styles
│   ├── pages/               # Application pages
│   ├── fireConfig.js        # Firebase configuration
│   └── main.js               # Application entry point
│
├── public/                  # Static assets
│
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation

## Technologies Used
- React: JavaScript library for building user interfaces.
- Vite: Build tool and development server.
- Firebase: Authentication and hosting.
- SCSS: CSS preprocessor for styling.