//TODO: Mejorar las cards y el layout de la página, hacer el header más dinamico y responsivo

function Card({ name, nrc, schedule, onClick }: { name: string; nrc: number; schedule: string; onClick?: () => void }) {

  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white antialiased hover:shadow-lg transition-shadow duration-300" onClick={onClick}>

      <div className="mb-2 border rounded-lg">
        <h1 className="font-semibold text-xl text-gray-800 mx-10 ">
        {name}
        </h1>
      </div>

      <div className="mt-4">
        <p className="text-center text-gray-500 mt-2">
        NRC: {nrc} <br />
        Horario: {schedule}
        </p>
      </div>

    </div>
  );

}

export default Card;
