import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ExerciseForm = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [muscle_group, setMuscleGroup] = useState("")
    const [description, setDescription] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/exercises`, {name, muscle_group, description})
            .then(response => {
                console.log(response)
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Exercise Form</h1>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div>
                <label>Muscle Group:</label>
                <input type="text" name="muscle_group" value={muscle_group} onChange={(e)=>{setMuscleGroup(e.target.value)}}/>
            </div>
            <div>
                <label>Description:</label>
                <textarea  type="text" cols="30" rows="5" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
            <button type='submit'>Create</button>
        </form>
    )
}

export default ExerciseForm;