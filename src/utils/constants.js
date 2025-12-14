export const PRIORITY_COLORS = {
    High: 'bg-red-100 text-red-600 border border-red-300',
    Medium: 'bg-yellow-100 text-yellow-600 border border-yellow-300',
    Low: 'bg-green-100 text-green-600 border border-green-300',
    default: 'bg-gray-100 text-gray-600 border border-gray-300'
};

export const COLUMNS = ['To-Do', 'In-Progress', 'Completed'];

export const fixedValues = [
    {
        id: 101,
        title: "Design Homepage UI",
        description: "Create wireframes and layout structure",
        priority: "High",
        status: "To-Do",
        dueDate: "2025-02-12T09:00:00Z",
        createdAt: "2025-01-25T14:10:00Z"
    },
    {
        id: 102,
        title: "Setup Database",
        description: "Configure MongoDB and create schemas",
        priority: "Medium",
        status: "In-Progress",
        dueDate: "2025-02-15T10:00:00Z",
        createdAt: "2025-01-26T10:30:00Z"
    },
    {
        id: 103,
        title: "Write Documentation",
        description: "Complete API documentation",
        priority: "Low",
        status: "Completed",
        dueDate: "2025-02-10T15:00:00Z",
        createdAt: "2025-01-24T09:00:00Z"
    }
];
