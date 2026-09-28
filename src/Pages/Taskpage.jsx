import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Taskpage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="min-h-screen w-screen bg-slate-100 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        {/* Cabeçalho */}
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-md bg-orange-800 text-white hover:bg-orange-700 transition"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-orange-800 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>

        {/* Card com os detalhes */}
        <div className="bg-amber-100 p-6 rounded-md shadow space-y-4">
          <div>
            <span className="text-xs uppercase tracking-wide text-orange-800/70 font-semibold">
              Título
            </span>
            <h2 className="text-xl text-orange-800 font-bold break-words">
              {title}
            </h2>
          </div>

          <hr className="border-orange-800/20" />

          <div>
            <span className="text-xs uppercase tracking-wide text-orange-800/70 font-semibold">
              Descrição
            </span>
            <p className="text-orange-900 break-words">
              {description || "Sem descrição."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Taskpage;
