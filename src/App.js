import logo from './logo.svg';
import './App.css';
import { CustomForm } from './components/CustomForm';
import { TaskList } from './components/TaskList';
import useLocalStorage from './hooks/useLocalStorage';
import { useState } from 'react';
import EditForm from './components/EditForm';

function App() {

  const [tasks, setTasks] = useLocalStorage("todo-app-tasks");
  const [prevFocusedEl, setPrevFocusedEl] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  }

  const toggleTask = (taskId) => {
    setTasks((prevState) => (
      prevState.map((task) => {
        console.log(task.id)
        return task.id === taskId ? { ...task, checked: !task.checked } : task
      })
    )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPrevFocusedEl(document.activeElement);
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(eachTask => (
      eachTask.id === task.id ? {...eachTask, name: task.name} : eachTask)
      )
    )

    closeEditMode();
  }
  const closeEditMode = () => {
    setIsEditing(false);
    prevFocusedEl.focus();
  }

  return (
    <div className="container">
      <h2>To do List</h2>
      <CustomForm addTask={addTask} />
      {
        isEditing && <EditForm 
                        editedTask={editedTask} 
                        updateTask={updateTask} 
                        closeEditMode={closeEditMode}>                          
                    </EditForm>
      }
      {tasks && (
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          enterEditMode={enterEditMode}
        />
      )
      }
    </div>
  );
}

export default App;
