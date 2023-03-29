import React from 'react';
import {FaEdit} from 'react-icons/fa';
import {FaTrash} from 'react-icons/fa';

export const Task = ({task, toggleComplete, deleteTask, editTask}) =>{
    return(
        <div className="Task">
            <p onClick={()=> toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>
                {task.task}
            </p>
            <div>
                <FaEdit onClick={ () => editTask(task.id)}/>
                <FaTrash className='fa-trash' onClick={()=> deleteTask(task.id)}/>
            </div>
        </div>
    )
}