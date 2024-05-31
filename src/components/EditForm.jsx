import { useState, useEffect } from 'react';

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {

    useEffect(() => {
        const closeEditModeIfEscaped = (e) => {
            e.key === "Escape" && closeEditMode();
        }
        window.addEventListener("keydown",closeEditModeIfEscaped);

        return () => window.removeEventListener("keydown", closeEditModeIfEscaped)

    },[closeEditMode])

    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask,name: updatedTaskName});
    }
    return(
        <div role="dialog"  onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}>
            <form className="box" onSubmit={handleSubmit}>
                <div className="wrapper">
                    <label>Update Task</label>
                    <div className="add-todo">
                    <input
                        type="text"
                        id="editTask"
                        required
                        autoFocus
                        className="todo-input"
                        value={updatedTaskName}
                        onInput={(e) => setUpdatedTaskName(e.target.value)}
                    />
                    <button className="add-button" type="submit">Update</button>
                    </div>
                </div>
            </form>
        </div>
    )

}
export default EditForm;