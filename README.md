# React User Card Manager

A simple yet elegant user management application built with React, demonstrating two-way data binding and state management.

## 📋 Description

This mini project showcases fundamental React concepts including controlled components, state management with hooks, and dynamic rendering. Users can add team members or contacts with their details and display them as interactive cards that can be removed individually.

## ✨ Features

- **Add Users**: Input name, role, email, and profile image URL
- **Dynamic Cards**: Automatically renders user cards as they're added
- **Remove Functionality**: Delete individual user cards
- **Form Validation**: Required fields ensure complete user data
- **Two-Way Binding**: Demonstrates controlled components in React

## 🛠️ Technologies Used

- React 18
- JavaScript (ES6+)
- Tailwind CSS
- Vite (assumed build tool)

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/sohamghadai42/React-mini-project.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## 💡 Key Concepts Demonstrated

- **useState Hook**: Managing form inputs and user list
- **Controlled Components**: Two-way data binding for form inputs
- **Event Handling**: Form submission and user removal
- **Array Manipulation**: Adding and removing items from state
- **Component Composition**: Separate Card component for modularity
- **Props Passing**: Sending data and functions to child components

## 📝 Usage

1. Fill in all four fields: Name, Role, Email, and Image URL
2. Click "Submit" to add the user card
3. Click the card to remove it from the list

##  Learning Outcomes

This project is perfect for understanding:
- How controlled components work in React
- Managing multiple state variables
- Handling form submissions
- Working with arrays in React state
- Parent-child component communication

## File Structure
```
└── 📁 contact_card
    ├── 📁 src
    │   ├── 📁 components
    │   │   └── 📄 Card.jsx
    │   ├── 🎨 App.css
    │   ├── 📄 App.jsx
    │   ├── 🎨 index.css
    │   └── 📄 main.jsx
    ├── ⚙️ .gitignore
    ├── 📝 README.md
    ├── 📄 eslint.config.js
    ├── 🌐 index.html
    ├── ⚙️ package-lock.json
    ├── ⚙️ package.json
    └── 📄 vite.config.js
```
