function Card({ name, nrc, schedule, }: {
  name: string;
  nrc: number;
  schedule: string;

}) {
  return (
    <div
      className="group relative w-full h-full flex flex-col rounded-2xl p-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
    >

      <div className="flex items-center justify-between border-b border-gray-200 pb-3">
        <h1 className="text-lg font-bold group-hover:text-indigo-600 transition-colors">
          {name}
        </h1>
        <span className="rounded-md px-2 py-1 text-xs font-medium">
          NRC {nrc}
        </span>
      </div>

      <div className="mt-4 flex-grow flex items-end">
        <p className="flex items-center justify-center rounded-md py-2">
          📅 {schedule}
        </p>
      </div>
    </div>
  );
}

export default Card;
