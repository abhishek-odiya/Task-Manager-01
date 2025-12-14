import React from 'react';

const ToDelete = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50 backdrop-blur">
            <div className="bg-white rounded max-w-md w-full p-5">
                <h2 className="text-xl font-bold text-gray-900 mb-2">Confirm Delete</h2>
                <p className="text-gray-700 mb-5 text-sm">
                    Are you sure you want to delete this task?
                </p>


                <div className="flex gap-2">
                    <button
                        onClick={onConfirm}
                        className="flex-1 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
                    >
                        Delete
                    </button>



                    <button
                        onClick={onClose}
                        className="flex-1 bg-gray-300 text-gray-800 py-1 px-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>


                </div>
            </div>
        </div>
    );
};

export default ToDelete;
