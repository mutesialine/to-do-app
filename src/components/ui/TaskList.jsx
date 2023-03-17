import { AiFillDelete } from "react-icons/ai";
const TaskList = ({
  taskName,
  name,
  index,
  onChange,
  deleteTask,
  styles,
  checked,
}) => {
  return (
    <div className="flex justify-between items-center w-[50%] border-b-2 border-gray-300 pb-2">
      <div className="flex gap-x-5 items-center">
        <input
          type="checkbox"
          checked={checked}
          name={name}
          id={index}
          onChange={onChange}
          className="w-4 h- cursor-pointer"
        />
        <label
          className={`text-2xl text-center text-gray-700 font-semibold ${
            styles && "line-through"
          }`}
          htmlFor="isTaskDone"
        >
          {taskName}
        </label>
      </div>
      <div className="p-2 bg-gray-200 rounded-full cursor-pointer" onClick={deleteTask}>
        <AiFillDelete size={24} className="text-red-500" />
      </div>
    </div>
  );
};

export default TaskList;
