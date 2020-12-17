const mongoose = require('mongoose');

const Task = mongoose.model( 'Task', {
    name: {
        type: 'string',
    },
    description: {
        type: 'string',
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        required: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});
module.exports = Task;
