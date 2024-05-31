import React, {useState} from 'react'
import styles from './TaskItem.module.css';
import { CheckBoxOutlineBlankRounded } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const TaskItem = ({task, toggleTask, deleteTask, enterEditMode}) => {

    const [isChecked, setIsChecked] = useState(task.checked);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        console.log("Taskid in handleChange:")
        console.log(task.id)
        toggleTask(task.id);
    }

    const formatDate = (timeStamp) => {
        const date = new Date(timeStamp);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate;
    }
  return (
    <li className={styles.task}>
        <div className={styles["task-group"]}>
            <input type="checkbox"
                checked={isChecked}
                name={task.name}
                id={task.id}
                className={styles.checkmark}
                onChange={handleCheckboxChange}
            />
              {/*/ <p className={styles.checkmark}>
                    <CheckBoxOutlineBlankRounded width={24} height={24} strokeWidth={2}/>
                </p>*/} 
            <label
                htmlFor={task.id}
                className={styles.label}>
                    {task.name} 
                    <p>Added on: {formatDate(task.id) } </p>              
            </label>
        </div>
        <div className={styles["task-group"]}>
            <button className={styles.actionBtn} onClick={() => enterEditMode(task)}>
                <EditIcon></EditIcon>
            </button>
            <button className={styles.actionBtn} onClick={() => deleteTask(task.id)}>
                <DeleteIcon></DeleteIcon>
            </button>
        </div>
    </li>
  );
}
