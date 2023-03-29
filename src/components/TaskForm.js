import React, { useState } from "react";

export const TaskForm = ({addTask}) =>{
    const [value, setValue]= useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTask(value);
        
        setValue("");
    }
    return(
        <form className="task-form" onSubmit={handleSubmit}>
            <input className="task-input-field" 
            type="text" 
            value={value}
            placeholder="What is the task for today?" 
            onChange={ (e) => setValue(e.target.value) }/>
            <button type="submit" className="task-btn">Add Task</button>
        </form>
    )
}