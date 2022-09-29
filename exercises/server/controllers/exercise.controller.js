const {Exercise} = require('./../models/exercise.model')

module.exports.testApi = (res, req) => {
    res.json({message: 'hello'})
}

// Get all
module.exports.getAll = (req, res) => {
    Exercise.find()
        .then(allExercises => res.json(allExercises))
        .catch(err => res.status(400).res.json(err))
}

// allows for searching without need to be specific
const allCases = (input) => {
    let output = ""
    let firstLetter = input.slice(0,1).toUpperCase()
    let endOfWord = input.slice(1).toLowerCase()
    output = firstLetter + endOfWord
    return output
}

// Get all by muscle group
module.exports.getMuscleGroup = (req, res) => {
    const paramsMuscle = allCases(req.params.muscle_group)
    Exercise.find({muscle_group : paramsMuscle})
        .then(exercises => res.json(exercises))
        .catch(err => {
            console.log('Muscle group not found')
            res.status(400).json(err)
        })
}

// Get one
module.exports.getOne = (req, res) => {
    const paramsId = req.params.id
    Exercise.findOne({_id : paramsId})
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json(err))
}

// create
module.exports.addExercise = (req, res) => {
    const newExercise = req.body
    Exercise.create(newExercise)
        .then(prod => res.json(prod))
        .catch(err => res.status(400).json(err))
}

// update
module.exports.updateExercise = (req, res) => {
    const paramsId = req.params.id
    const updatedExercise = req.body
    Exercise.findOneAndUpdate(
        {_id : paramsId}, //criteria
        updatedExercise, //updated info
        {new: true, runValidators: true}//options of how to show data
        //new : true --> return the updated object
        //runValidation --> to run validations
    )
        .then(updatedExercise => res.json(updatedExercise))
        .catch(err => res.json(err))
}

// delete
module.exports.delExercise = (req, res) => {
    const paramsId = req.params.id
    Exercise.findOneAndDelete({_id : paramsId})
        .then(deletedExercise => res.json(deletedExercise))
        .catch(err => res.status(400).json(err))
}