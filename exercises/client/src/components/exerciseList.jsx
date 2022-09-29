import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const ExerciseList = () => {
    const [exerciseList, setExerciseList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/exercises`)
            .then(response => {
                setExerciseList(response.data)
            })
            .catch(err => console.log(err))
    }, [exerciseList])

    return(
        <div className='container'>
            {
                exerciseList.map((eachExercise, i) => {
                    return(
                        <div className='box' key={i}>
                            <div className='top'>
                                <h4>{eachExercise.name}</h4>
                                <h5>{eachExercise.muscle_group}</h5>
                            </div>
                            <p>{eachExercise.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ExerciseList;