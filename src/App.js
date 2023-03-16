import { nanoid } from "nanoid";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import TaskList from "./components/ui/TaskList";
const App = () => {
  const [task, setTask] = useState("");
  const [toDo, setAllToDo] = useState([]);

  const handleOnChange = (event) => {
    setTask(event.target.value);
  };
  const handleTasksubmit = (event) => {
    if (task !== "") {
      const newTask = { id: nanoid(), taskName: task, isTaskDone: false };
      event.preventDefault();

      setAllToDo((prevToDoList) => [...prevToDoList, newTask]);
      setTask("");
    }
  };

  const handleTaskDone = (id) => {
    console.log(id);
    setAllToDo((prevToDoList) =>
      prevToDoList.map((task) =>
        task.id === id ? { ...task, isTaskDone: !task.isTaskDone } : task
      )
    );
  };

  const handleTaskDelete = (id) => {
    setAllToDo((prevToDoList) => prevToDoList.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-24 flex flex-col gap-y-8 justify-center items-center">
      <h1 className="text-8xl font-bold text-gray-400 opacity-20">todos</h1>

      <div className=" flex justify-between  items-center py-3 px-4 w-[50%] rounded-full border shadow-xl">
        <input
          type="text"
          name="taskName"
          value={task}
          onChange={handleOnChange}
          placeholder=" Add todo..."
          className="text-xl font-semibold w-full outline-none px-4"
        />
        <AiFillPlusCircle
          size={25}
          className="text-green-800"
          onClick={handleTasksubmit}
        />
      </div>
      {toDo.length > 0 ? (
        toDo.map((oneTask) => (
          <TaskList
            key={oneTask.id}
            taskName={oneTask.taskName}
            checked={task.isTaskDone}
            onChange={() => handleTaskDone(oneTask.id)}
            deleteTask={() => handleTaskDelete(oneTask.id)}
            styles={oneTask.isTaskDone}
            index="isTaskDone"
            name="isTaskDone"
          />
        ))
      ) : (
        <h2 className="text-4xl font-bold  text-gray-400 pt-12">noToDO</h2>
      )}
    </div>
  );
};

export default App;
