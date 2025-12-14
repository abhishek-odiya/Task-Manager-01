import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { formatDate, getPriorityColor, getDuplicateCount } from '../utils/Color_filter';

const TaskCard = ({ task, allTasks, onEdit, onDelete, onDragStart, onDragEnd }) => {
    const duplicateNum = getDuplicateCount(task, allTasks);

    return (
        <div
            draggable={true}
            onDragStart={(e) => onDragStart(e, task)}
            onDragEnd={onDragEnd}
            className="bg-white p-3 rounded shadow border border-gray-300 mb-3 hover:shadow-lg cursor-move"
        >
            <h3 className="font-bold text-gray-900 mb-2">
                {task.title}
                {duplicateNum > 0 && (
                    <span className="ml-2 text-xs bg-orange-400 text-white px-2 py-1 rounded">
                        Duplicate ({duplicateNum})
                    </span>
                )}
            </h3>

            <p className="text-sm text-gray-600 mb-3">{task.description}</p>

            <div className="flex justify-between items-center mb-3">
                <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                </span>
                <div className="text-xs text-gray-600">
                    Due: {formatDate(task.dueDate)}
                </div>
            </div>

            <div className="flex gap-2">

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit(task);
                    }}
                    className="bg-green-700 text-white py-1 px-3 rounded hover:bg-green-900 text-sm"
                >
                    Edit
                </button>


                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(task.id);
                    }}
                    className="bg-red-700 text-white py-1 px-3 rounded hover:bg-red-900 text-sm flex items-center gap-1"
                >
                    <Trash2 size={14} />
                    Delete
                </button>



            </div>
        </div>
    );
};

export default TaskCard;