import React from 'react';

const FilterBar = ({
    filterPriority,
    setFilterPriority,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy
}) => {

    const handlePriorityChange = (e) => {
        setFilterPriority(e.target.value);
    };

    const handleStatusChange = (e) => {
        setFilterStatus(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    return (
        <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="font-bold text-gray-800 mb-3">Filters And Sorting</h3>

            <div className="flex gap-3 flex-wrap">
                <div className="flex-1 min-w-[180px]">
                    <label className="text-sm font-medium text-gray-800 mb-1 block">
                        Priority
                    </label>
                    <select
                        value={filterPriority}
                        onChange={handlePriorityChange}
                        className="w-full border border-gray-400 rounded px-3 py-2"
                    >
                        <option value="All">All Priorities</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>

                    </select>
                </div>



                <div className="flex-1 min-w-[180px]">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Status
                    </label>

                    <select
                        value={filterStatus}
                        onChange={handleStatusChange}
                        className="w-full border border-gray-400 rounded px-3 py-2"
                    >
                        <option value="All">All Status</option>
                        <option value="To-Do">To-Do</option>
                        <option value="In-Progress">In-Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>


                <div className="flex-1 min-w-[180px]">
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Sort By
                    </label>
                    <select
                        value={sortBy}
                        onChange={handleSortChange}
                        className="w-full border border-gray-400 rounded px-3 py-2"
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                        <option value="duedate">Closest Due Date</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;