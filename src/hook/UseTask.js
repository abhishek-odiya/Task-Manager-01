import { useState, useEffect } from 'react';
import { fixedValues } from '../utils/constants';

export const useTasks = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            } else {
                try {
                    const response = await fetch('/tasks.json');
                    const data = await response.json();
                    setTasks(data);
                    localStorage.setItem('tasks', JSON.stringify(data));
                } catch (error) {
                    setTasks(fixedValues);
                    localStorage.setItem('tasks', JSON.stringify(fixedValues));
                }
            }
        };
        loadTasks();
    }, []);

    useEffect(() => {
        if (tasks.length > 0) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const addTask = (taskData) => {
        const newTask = {
            id: Date.now(),
            ...taskData,
            dueDate: taskData.dueDate + 'T09:00:00Z',
            createdAt: new Date().toISOString()
        };
        setTasks([...tasks, newTask]);
    };

    const updateTask = (taskId, taskData) => {
        setTasks(tasks.map(task =>
            task.id === taskId
                ? { ...task, ...taskData, dueDate: taskData.dueDate + 'T09:00:00Z' }
                : task
        ));
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const updateTaskStatus = (taskId, newStatus) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, status: newStatus } : task
        ));
    };

    return {
        tasks,
        addTask,
        updateTask,
        deleteTask,
        updateTaskStatus
    };
};