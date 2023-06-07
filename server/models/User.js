const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: {
        type: String
    },
    name: {
        type: String
    },
    
})