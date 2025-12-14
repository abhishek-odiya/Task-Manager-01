import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FilterBar from './components/Filter';
import Column from './components/Column';
import TaskModal from './components/InputBox';
import DeleteConfirmModal from './components/ToDelete';
import { useTasks } from './hook/UseTask';
import { filterTasks, sortTasks } from './utils/Color_filter';
import { COLUMNS } from './utils/constants';

const App = () => {
  const { tasks, addTask, updateTask, deleteTask, updateTaskStatus } = useTasks();

  const [showModal, setShowModal] = useState(false);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [filterPriority, setFilterPriority] = useState('All');

  const [editingTask, setEditingTask] = useState(null);
  const [sortBy, setSortBy] = useState('newest');

  const [taskToDelete, setTaskToDelete] = useState(null);
  const [draggedTask, setDraggedTask] = useState(null);


  const [filterStatus, setFilterStatus] = useState('All');


  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  const handleOpenModal = (task = null) => {
    setEditingTask(task);
    setShowModal(true);
  };



  const handleSubmitTask = (formData) => {
    if (editingTask) {
      updateTask(editingTask.id, formData);
    } else {
      addTask(formData);
    }
    handleCloseModal();
  };

  const handleDeleteClick = (taskId) => {
    handleCloseModal();

    setTimeout(() => {
      setTaskToDelete(taskId);
      setShowDeleteConfirm(true);
    }, 100);

  };

  const handleCancelDelete = () => {
    setShowDeleteConfirm(false);
    setTaskToDelete(null);
  };


  const handleConfirmDelete = () => {
    if (taskToDelete) {
      deleteTask(taskToDelete);
      setShowDeleteConfirm(false);
      setTaskToDelete(null);
    }
  };

  const handleDragEnd = () => {
    setDraggedTask(null);
  };



  const handleDragStart = (e, task) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
    setDraggedTask(task);
  };


  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (draggedTask && draggedTask.status !== newStatus) {
      updateTaskStatus(draggedTask.id, newStatus);
    }
    setDraggedTask(null);
  };




  const getProcessedTasks = () => {
    let processed = filterTasks(tasks, filterPriority, filterStatus);
    processed = sortTasks(processed, sortBy);
    return processed;
  };

  const getTasksByStatus = (status) => {
    return getProcessedTasks().filter(task => task.status === status);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <Navbar onAddTask={() => handleOpenModal()} />

      <div className="max-w-7xl mx-auto p-4">
        <FilterBar
          filterPriority={filterPriority}
          setFilterPriority={setFilterPriority}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className="flex gap-4 overflow-x-auto pb-4">
          {COLUMNS.map(column => (
            <Column
              key={column}
              title={column}
              status={column}
              tasks={getTasksByStatus(column)}
              allTasks={tasks}
              onEdit={handleOpenModal}
              onDelete={handleDeleteClick}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
        </div>
      </div>

      <TaskModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onSubmit={handleSubmitTask}
        editingTask={editingTask}
      />

      <DeleteConfirmModal
        isOpen={showDeleteConfirm}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default App;