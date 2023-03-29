import React, {useState} from "react";
import { TaskForm } from "./TaskForm";
import {v4 as uuidv4 } from 'uuid';
import { Task } from "./Task";
import { EditTaskForm } from "./EditTaskForm";
uuidv4();

export default function TaskWrapperContainer(){
    const [tasks, setTasks]= useState([]);

    const addTask = task => {
        setTasks([...tasks,
             {id: uuidv4(), task: task, completed: false, isEditing: false}])

        
    }

    const toggleComplete = id => {
        setTasks(
            tasks.map(task => 
                task.id === id ? 
                {...task, completed: !task.completed}
                 : task ))
    }

    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id !==id))
    }

    const editTask = id => {
        setTasks(tasks.map(task => task.id === id ? {...task, isEditing:!task.isEditing} : task))
    }

    const editTaskItem = (task, id) =>{
        setTasks(tasks.map(taskItem => taskItem.id === id ? {...taskItem, task, isEditing: !taskItem.isEditing} : taskItem ))
    }

    return(
        <div className="task-wrapper-container">
            <h1>Get Things Done</h1>
           <TaskForm addTask={addTask}/>
           {tasks.map((task, index)=>(
                task.isEditing ? ( 
                    <EditTaskForm editTask={editTaskItem} task={task} />
                ) : (
                    <Task key={index} task={task}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
           
                )
           ))}
        </div>
    )
}