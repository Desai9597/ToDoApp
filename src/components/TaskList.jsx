import React from 'react'
import { TaskItem } from './TaskItem'
import styles from './TaskList.module.css';
export const TaskList = ({ tasks, toggleTask, deleteTask, enterEditMode }) => {
  return (
   <ul className={styles.tasks}>
        {tasks.sort((a,b) => b.id - a.id).map(task => (

                <TaskItem 
                    
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}  
                    enterEditMode={enterEditMode}                  
                />
            )
        )}
   </ul>
  );
}
