import React, { useState } from 'react'

export const CustomForm = ({ addTask }) => {

    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
        setTask("");
    }
    return (
        <form className="box" onSubmit={handleSubmit}>
            <div className="add-todo-wrapper">
                <label>ENTER NEW TASK</label>
                <div className="add-todo">
                    <input 
                        type="text" 
                        id="todoId" 
                        required 
                        className="todo-input"
                        value={task}
                        onInput={(e) => setTask(e.target.value)}></input>
                    <button type="submit" className="add-button">+</button>
                </div>
            </div>
        </form>
    )
}
