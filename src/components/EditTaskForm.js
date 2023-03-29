import React, { useState } from "react";

export const EditTaskForm = ({editTask, task}) =>{
    const [value, setValue]= useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTask(value, task.id);
        
        setValue("");

        localStorage.setItem("task",JSON.stringify(task));
    }
    return(
        <form className="task-form" onSubmit={handleSubmit}>
            <input type="text" 
            className="task-input-field" 
            value={value}
            placeholder="Update Task" 
            onChange={ (e) => setValue(e.target.value) }/>
            <button type="submit" className="task-btn">Update Task</button>
        </form>
    )
}