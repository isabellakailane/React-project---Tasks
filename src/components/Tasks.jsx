import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();

    query.set("title", task.title);
    query.set("description", task.description);

    navigate("/tasks?" + query.toString());
  }

  return (
    <ul className="space-y-4 p-6 bg-amber-100 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-4 mb-4 items-center">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-orange-900 text-left w-full text-white p-4 rounded-md ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>

          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-orange-900 p-4 rounded-md text-white text-3xl"
          >
            <ChevronRightIcon />
          </button>

          <button
            onClick={() => props.onDeleteTaskClick(task.id)}
            className="bg-orange-900 p-4 rounded-md text-white text-3xl"
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
