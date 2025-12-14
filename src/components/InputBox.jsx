import React, { useState, useEffect } from 'react';
import { X, Trash2 } from 'lucide-react';

const InputBox = ({ isOpen, onClose, onSubmit, editingTask, onDelete }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        priority: 'Medium',
        status: 'To-Do',
        dueDate: ''
    });

    useEffect(() => {
        if (editingTask) {
            setFormData({
                title: editingTask.title,
                description: editingTask.description,
                priority: editingTask.priority,
                status: editingTask.status,
                dueDate: editingTask.dueDate.split('T')[0]
            });

        } else {
            setFormData({
                title: '',
                description: '',
                priority: 'Medium',
                status: 'To-Do',
                dueDate: ''
            });

        }

    }, [editingTask, isOpen]);



    const handleSubmit = () => {
        if (!formData.title || !formData.description || !formData.dueDate) {
            alert('Please fill all fields');
            return;
        }
        onSubmit(formData);
    };



    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50 backdrop-blur">
            <div className="bg-white rounded max-w-md w-full p-5 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">
                        {editingTask ? 'Edit Task' : 'Add New Task'}
                    </h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                <div>
                    <div className="mb-3">
                        <label className="block text-sm font-bold text-gray-900 mb-1">Title</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-sm font-bold text-gray-900 mb-1">Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm"
                            rows="3"
                        />
                    </div>



                    <div className="mb-3">
                        <label className="block text-sm font-bold text-gray-900 mb-1">Priority</label>
                        <select
                            value={formData.priority}
                            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                            className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm"
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>


                    <div className="mb-3">
                        <label className="block text-sm font-bold text-gray-900 mb-1">Status</label>
                        <select
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm"
                        >
                            <option value="To-Do">To-Do</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm font-bold text-gray-900 mb-1">Due date</label>
                        <input
                            type="date"
                            value={formData.dueDate}
                            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                            className="w-full border-2 border-gray-300 rounded px-3 py-2 text-sm"
                        />
                    </div>


                    <div className="flex gap-2">
                        <button
                            onClick={handleSubmit}
                            className="flex-1 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800  text-sm"
                        >
                            {editingTask ? 'Update Task' : 'Create Task'}
                        </button>

                        <button
                            onClick={onClose}
                            className="flex-1 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 text-sm"
                        >
                            Cancel
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputBox;