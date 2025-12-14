import React from 'react';
import { Plus } from 'lucide-react';

const Navbar = ({ onAddTask }) => {
    return (
        <nav className="bg-white shadow p-4 sticky top-0 z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
                <button
                    onClick={onAddTask}
                    className="bg-gray-700 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-800"
                >
                    <Plus size={20} />
                    Add Task
                </button>
            </div>
        </nav>
    )
};
export default Navbar;