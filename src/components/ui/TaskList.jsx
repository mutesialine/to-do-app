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
      <div className="flex gap-x-3 items-center">
        <input
          type="checkbox"
          checked={checked}
          name={name}
          id={index}
          onChange={onChange}
        />
        <label
          className={`text-2xl text-gray-500 font-semibold ${styles && "line-through"}`}
          htmlFor="isTaskDone"
        >
          {taskName}
        </label>
      </div>
      <div className="p-2 bg-gray-200 rounded-full" onClick={deleteTask}>
        <AiFillDelete size={16} className="text-red-500" />
      </div>
    </div>
  );
};

export default TaskList;
