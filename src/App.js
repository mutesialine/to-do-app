
import { useState } from "react";
import { AiFillDelete, AiFillPlusCircle } from "react-icons/ai";
const App = () => {
  const [task, setTask] = useState({
    taskName: "",
    isTaskDone: false
  });
  const [buttonClicked, setButtonClicked]=useState(false)
   


const handleTask = (event) =>{
  const{name ,value,type, checked} =event.target
setTask( prevTask => ({...prevTask , [name] : type==="checkbox" ? checked : value}))
}
  return (
    <div className="w-full max-w-7xl mx-auto mt-24 flex flex-col gap-y-8 justify-center items-center">
      <h1 className="text-8xl font-bold text-gray-400 opacity-20">todos</h1>
      <div className=" flex justify-between  items-center py-3 px-4 w-[50%] rounded-full  border shadow-xl ">
        <input
          type="text"
          name="taskName"
          value={task.taskName}
          onChange={handleTask}
          placeholder=" Add todo..."
          className="text-xl font-semibold w-full outline-none px-4"
        />
        <AiFillPlusCircle
          size={25}
          className="text-green-800"
          onClick={() => setButtonClicked(true)}
        />
      </div>

      <div className="flex justify-between items-center w-[50%] border-b-2 border-gray-300 pb-2">
        <div className="flex gap-x-3 items-center">
          <input type="checkbox" checked={task.isTaskDone} name="isTaskDone" id="isTaskDone" onChange={handleTask} />
          {buttonClicked &&
            <label className={`text-2xl font-semibold ${task.isTaskDone && "line-through"}`} htmlFor="isTaskDone">
              {task.taskName}
            </label>
          }
        </div>
        <div className="p-2 bg-gray-200 rounded-full">
          <AiFillDelete size={16} className="text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default App;
