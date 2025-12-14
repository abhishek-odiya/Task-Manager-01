import React from 'react';
import TaskCard from './TaskCard';

const Column = ({
    title,
    status,
    tasks,
    allTasks,
    onEdit,
    onDelete,
    onDragOver,
    onDrop,
    onDragStart,
    onDragEnd

}) => {
    return (
        <div
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, status)}
            className="bg-gray-400 p-3 rounded min-h-[100px] flex-1 min-w-[300px]"
        >
            <h2 className="font-bold text-xl text-gray-200 mb-3">{title}</h2>
            <div>
                {tasks.length === 0 ? (
                    <div className="text-gray-100 text-center py-6  ">
                        <p>Nothing is Here</p>
                    </div>
                ) : (
                    tasks.map(task => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            allTasks={allTasks}
                            onEdit={onEdit}
                            onDelete={onDelete}
                            onDragStart={onDragStart}
                            onDragEnd={onDragEnd}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Column;