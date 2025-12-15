# Task Manager App

A responsive Task Management Web Application. Users can add tasks, categorize them into different boards (To-Do, In-Progress, Completed), drag and drop tasks across boards, and manage them efficiently.

## Features

- ✅ **Task Management**: Create, edit, and delete tasks
- 🎯 **3-Column Board Layout**: To-Do, In-Progress, Completed
- 🖱️ **Drag & Drop**: Move tasks between columns seamlessly
- 🔍 **Filtering**: Filter by Priority (Low/Medium/High) and Status
- 📊 **Sorting**: Sort by Newest, Oldest, or Closest Due Date
- 💾 **Persistent Storage**: All tasks saved in localStorage
- 📱 **Responsive Design**: Works on mobile, tablet, and desktop
- 🚨 **Duplicate Detection**: Shows badge for tasks with same title in same column
- ⚠️ **Delete Confirmation**: Confirm before deleting tasks

## Technologies Used

- **React** (v18+)
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **localStorage** - Data persistence

## Project Setup

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/abhishek-odiya/Task-Manager-01.git
cd task-manager
```

2. **Install dependencies**
```bash
npm install
```

3. **Install required packages**
```bash
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Running the Application

**Development Mode:**
```bash
npm run dev
```
The app will open at `http://localhost:5173`


## Folder Structure
```
task-manager/
├── .git/
├── node_modules/
├── public/
│   └── tasks.json              
├── src/
│   ├── components/
│   │   ├── Column.jsx          
│   │   ├── FilterBar.jsx       
│   │   ├── InputBox.jsx        
│   │   ├── Navbar.jsx          
│   │   ├── TaskCard.jsx        
│   │   └── ToDelete.jsx        
│   ├── hooks/
│   │   └── UseTasks.js         
│   ├── utils/
│   │   ├── Color_filter.js     
│   │   └── constants.js        
│   ├── App.css                 
│   ├── App.jsx                 
│   ├── index.css               
│   └── main.jsx                
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```


## Author

Abhishek Odiya
abhishekodiya123@gmail.com

---
