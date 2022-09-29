const ExerciseController = require('./../controllers/exercise.controller');

module.exports = (app) => {
    app.get('/api/test', ExerciseController.testApi)
    app.get('/api/exercises', ExerciseController.getAll)
    app.get('/api/exercises/:muscle_group', ExerciseController.getMuscleGroup)
    app.get('/api/exercises/:id', ExerciseController.getOne)
    app.post('/api/exercises', ExerciseController.addExercise)
    app.put('/api/exercises/:id', ExerciseController.updateExercise)
    app.delete('/api/exercises/:id', ExerciseController.delExercise)
}