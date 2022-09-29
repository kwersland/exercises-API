import React from 'react';
import ExerciseForm from '../components/exerciseForm';
import ExerciseList from '../components/exerciseList';

const Main = () => {
    return (
        <div>
            <h1>Add Exercise to API</h1>
            <ExerciseForm />
            <h1>Exercise List</h1>
            <ExerciseList />
        </div>
    )
}

export default Main;