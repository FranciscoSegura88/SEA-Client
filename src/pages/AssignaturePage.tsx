import { useParams } from "react-router-dom";
import { useState } from "react";

const evidencesTemplate = [
  { id: "actividades", name: "Actividades", total: 2 },
  { id: "examenes", name: "Examenes", total: 2 },
  { id: "proyectos", name: "Proyectos", total: 2 },
  { id: "asistencia", name: "Asistencia", total: 1 },
];


type EvidenceFile = { name: string; url: string };

function AssignaturePage() {
  const { assignatureId } = useParams();
  const [evidences, setEvidences] = useState(
    evidencesTemplate.map((category) => ({
      ...category,
      uploaded: 0,
      files: [] as EvidenceFile[],
    }))
  );

  const handleUpload = (id: string, file: File) => {
    const fileUrl = URL.createObjectURL(file);
    setEvidences((prev) =>
      prev.map((category) =>
        category.id === id
          ? {
              ...category,
              uploaded: category.uploaded + 1,
              files: [...category.files, { name: file.name, url: fileUrl }],
            }
          : category
      )
    );
  };

  const handleDelete = (categoryId: string, fileIdx: number) => {
    setEvidences((prev) =>
      prev.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              uploaded: category.uploaded - 1,
              files: category.files.filter((_, idx) => idx !== fileIdx),
            }
          : category
      )
    );
  };

  const handleOpenFile = (file: EvidenceFile) => {
    if (file.name.endsWith(".pdf")) {
      window.open(file.url, "_blank");
    } else {
      const link = document.createElement("a");
      link.href = file.url;
      link.download = file.name;
      link.click();
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Detalles de la Materia</h1>
        <p className="text-gray-600 mt-2">
          Mostrando información para la materia con ID: <strong>{assignatureId}</strong>
        </p>
      </div>

      <div className="space-y-4">
        {evidences.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#053758]">{cat.name}</h2>
              <span className="text-sm text-gray-500">
                {cat.uploaded}/{category.total} evidencias subidas
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-gray-700">
              {category.files.length > 0 ? (
                category.files.map((file, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  >
                    <span
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                      onClick={() => handleOpenFile(file)}
                    >
                      📄 {file.name}
                    </span>

                    <button
                      onClick={() => handleDelete(category.id, idx)}
                      className="text-red-500 hover:text-red-700 text-sm font-semibold"
                    >
                      Eliminar
                    </button>
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-400 italic">
                  Aun no hay archivos subidos
                </li>
              )}
            </ul>

            <div className="mt-4">
              <label className="inline-block cursor-pointer bg-[#005573] text-white px-4 py-2 rounded-lg hover:bg-[#00425a] transition">
                Subir archivo
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) =>
                    e.target.files?.[0] && handleUpload(category.id, e.target.files[0])
                  }
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignaturePage;
