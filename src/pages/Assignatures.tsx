import { Link } from "react-router-dom";
import Card from "../components/Card";

function Assignatures({assignatures} : {assignatures: { id: number; name: string; nrc: number; schedule: string }[]}) {

  return (
    <div className="w-full h-full">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Selecciona una asignatura
      </h1>

      <div className="flex justify-center flex-wrap gap-6">

        {assignatures.map(assignature => (
          <div key={assignature.id} className="w-80">
            <Link
              to={`/assignature/${assignature.id}`}
              className="h-full block"
            >
              <Card
                name={assignature.name}
                nrc={assignature.nrc}
                schedule={assignature.schedule}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignatures;
