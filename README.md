# React User Card Manager

A simple yet elegant user management application built with React, demonstrating two-way data binding, state management, and data persistence.

## 📋 Description

This mini project showcases fundamental React concepts including controlled components, state management with hooks, dynamic rendering, and localStorage integration. Users can add team members or contacts with their details, display them as interactive cards, and manage them with persistent storage—data survives page refreshes!

## ✨ Features

- **Add Users**: Input name, role, email, and profile image URL
- **Dynamic Cards**: Automatically renders user cards as they're added
- **Remove Functionality**: Delete individual user cards with confirmation dialog
- **LocalStorage Persistence**: Your data persists even after closing the browser
- **Delete Confirmation**: Prevents accidental deletions with a confirmation prompt
- **Form Validation**: Required fields ensure complete user data
- **Two-Way Binding**: Demonstrates controlled components in React

## 🛠️ Technologies Used

- React 18
- JavaScript (ES6+)
- Tailwind CSS
- Vite
- LocalStorage API

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/sohamghadai42/React-mini-project.git
```

2. Navigate to the project directory:
```bash
cd React-mini-project
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 💡 Key Concepts Demonstrated

- **useState Hook**: Managing form inputs and user list
- **Controlled Components**: Two-way data binding for form inputs
- **Event Handling**: Form submission and user removal
- **Array Manipulation**: Adding and removing items from state
- **Component Composition**: Separate Card component for modularity
- **Props Passing**: Sending data and functions to child components
- **LocalStorage Integration**: Persisting data across sessions
- **JSON Methods**: Using `JSON.stringify()` and `JSON.parse()`
- **User Confirmation**: Implementing confirm dialogs for critical actions
- **Error Handling**: Fallback values to prevent crashes

## 📝 Usage

1. Fill in all four fields: Name, Role, Email, and Image URL
2. Click "Submit" to add the user card
3. Your data is automatically saved to localStorage
4. Click a card to delete it (confirmation required)
5. Refresh the page—your data persists!

## 🎯 Learning Outcomes

This project is perfect for understanding:
- How controlled components work in React
- Managing multiple state variables
- Handling form submissions
- Working with arrays in React state
- Parent-child component communication
- Implementing data persistence with localStorage
- Creating better UX with confirmation dialogs
- Iterating and improving existing projects

## 📁 File Structure
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

## 🔄 Recent Updates

### New Enhancements
- ✅ Added localStorage integration for data persistence
- ✅ Implemented delete confirmation dialog
- ✅ Added user feedback on cancellation
- ✅ Improved error handling with fallback values


## 👨‍💻 Author

**Soham Ghadai**
- GitHub: [@sohamghadai42](https://github.com/sohamghadai42)

## 🙏 Acknowledgments

Built as part of #100DaysOfCode challenge
- Day 9: Initial project creation
- Day 10: Added persistence and UX improvements

---

⭐ If you found this project helpful, please give it a star!
