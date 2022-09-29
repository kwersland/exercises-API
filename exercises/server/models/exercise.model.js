const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, '{PATH} is required']
    },
    muscle_group : {
        type : String,
        required : [true, '{PATH} is required']
    },
    description : {
        type : String,
        required : [true, '{PATH} is required']
    }
});

module.exports.Exercise = mongoose.model('Exercise', ExerciseSchema);