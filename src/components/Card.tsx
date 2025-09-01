function Card({ name, nrc, schedule, onClick, isSelected }: {
  name: string;
  nrc: number;
  schedule: string;
  onClick?: () => void;
  isSelected?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full rounded-2xl p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 ${
        isSelected
          ? "bg-gradient-to-br from-indigo-100 to-blue-100 border-2 border-indigo-300"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <h1 className={`text-lg font-bold group-hover:text-indigo-600 transition-colors ${
          isSelected ? "text-indigo-700" : "text-gray-800"
        }`}>
          {name}
        </h1>
        <span className={`rounded-md px-2 py-1 text-xs font-medium ${
          isSelected
            ? "bg-indigo-200 text-indigo-700"
            : "bg-indigo-100 text-indigo-600"
        }`}>
          NRC {nrc}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm">
        <p className={`flex items-center justify-center rounded-md py-2 ${
          isSelected ? "bg-indigo-50 text-indigo-700" : "bg-gray-50 text-gray-700"
        }`}>
          📅 {schedule}
        </p>
      </div>

      {isSelected && (
        <div className="absolute top-2 right-2 w-3 h-3 bg-indigo-500 rounded-full"></div>
      )}
    </button>
  );
}

export default Card;
