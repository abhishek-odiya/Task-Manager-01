export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
};

export const getPriorityColor = (priority) => {
    const colors = {
        High: 'bg-red-200 text-red-600 border border-red-400',
        Medium: 'bg-orange-200 text-orange-600 border border-orange-300',
        Low: 'bg-green-300 text-green-600 border border-green-300'
    };
    return colors[priority] || 'bg-gray-100 text-gray-600 border border-gray-300';
};



export const getDuplicateCount = (task, allTasks) => {
    const sameTitleTasks = allTasks.filter(
        t => t.title === task.title && t.status === task.status
    );
    if (sameTitleTasks.length > 1) {
        return sameTitleTasks.findIndex(t => t.id === task.id) + 1;
    }
    return 0;
};

export const filterTasks = (tasks, filterPriority, filterStatus) => {
    let filtered = [...tasks];

    if (filterPriority !== 'All') {
        filtered = filtered.filter(task => task.priority === filterPriority);
    }

    if (filterStatus !== 'All') {
        filtered = filtered.filter(task => task.status === filterStatus);
    }

    return filtered;
};

export const sortTasks = (tasks, sortBy) => {
    const sorted = [...tasks];

    sorted.sort((a, b) => {
        if (sortBy === 'newest') {
            return new Date(b.createdAt) - new Date(a.createdAt);
        } else if (sortBy === 'oldest') {
            return new Date(a.createdAt) - new Date(b.createdAt);
        } else if (sortBy === 'duedate') {
            return new Date(a.dueDate) - new Date(b.dueDate);
        }
        return 0;
    });

    return sorted;
};