import { ChevronRightIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-amber-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-4 mb-4 items-center">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className="bg-orange-600  p-4 text-left w-full text-white p-2 rounded-md"
          >
            {task.title}
          </button>
          <button className="bg-amber-800 p-4 rounded-md text-white text-3xl">
            {" "}
            <ChevronRightIcon></ChevronRightIcon>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
