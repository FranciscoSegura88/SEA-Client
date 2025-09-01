function Sidebar({
  isOpen,
  assignatures,
  onSelectAssignature,
  selectedAssignature
}: {
  isOpen: boolean;
  assignatures: Array<{ id: number; name: string; nrc: number; schedule: string }>;
  onSelectAssignature: (assignature: { name: string; nrc: number } | null) => void;
  selectedAssignature: { name: string; nrc: number } | null;
}) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-[#0a4a6e] to-[#053758] text-white shadow-2xl transform transition-all duration-300 ease-in-out z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Encabezado con logo y nombre */}
      <div className="p-6 border-b border-white/10">
        <h2 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-white">
          SEA
        </h2>
        <p className="text-xs text-center text-gray-300 mt-1">Sistema de Evidencias Académicas</p>
      </div>

      {/* Lista de todas las materias */}
      <div className="p-4 overflow-y-auto h-[calc(100%-180px)]">
        <p className="text-xs uppercase text-gray-400 tracking-wider mb-3 px-3">Todas las Materias</p>

        <div className="space-y-2">
          {assignatures.map(assignature => (
            <button
              key={assignature.id}
              onClick={() => onSelectAssignature({ name: assignature.name, nrc: assignature.nrc })}
              className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 flex items-center gap-3 group ${
                selectedAssignature?.nrc === assignature.nrc
                  ? "bg-white/20 text-cyan-300"
                  : "hover:bg-white/10 hover:text-cyan-300"
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${
                selectedAssignature?.nrc === assignature.nrc
                  ? "bg-cyan-400"
                  : "bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
              }`}></div>
              <div className="flex-1">
                <span className="block font-medium">{assignature.name}</span>
                <span className="text-xs text-gray-300 block mt-1">NRC: {assignature.nrc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer del sidebar */}
      <div className="absolute bottom-0 w-full p-4 border-t border-white/10">
        <button
          onClick={() => onSelectAssignature(null)}
          className="w-full py-2 px-4 text-sm bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200"
        >
          Ver todas las materias
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
