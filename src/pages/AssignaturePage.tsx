import { useParams } from "react-router-dom";

function AssignaturePage() {

  const { assignatureId } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold">Detalles de la Materia</h1>
      <p className="mt-4">
        Mostrando información para la materia con ID: <strong>{assignatureId}</strong>
      </p>
      {/* Aquí iría el resto de tu contenido, como la lista de evidencias */}
    </div>
  );
}

export default AssignaturePage;
