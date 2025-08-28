import wavelogo from '../assets/wavelogo.png';
import sidebaricon from '../assets/sidebaricon.svg';

type HeaderProps = {
  selectedAssignature?: { name: string; nrc: number };
  onSidebarToggle: () => void; // Nueva prop para alternar el sidebar
};

function Header({ selectedAssignature, onSidebarToggle }: HeaderProps) {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <header className="bg-blue-950 text-white p-4 flex items-center gap-4">
        <button
          type="button"
          className="inline-grid place-items-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 transition"
          onClick={onSidebarToggle} // Llama a la función al hacer clic
        >
          <img src={sidebaricon} alt="Sidebar Icon" className="h-8 w-8" />
        </button>
        <img src={wavelogo} alt="Wave Logo" className="h-16 w-16" />
        <h1 className="text-2xl font-bold">
          SEA {selectedAssignature ? `> ${selectedAssignature.name} ${selectedAssignature.nrc}` : ""}
        </h1>
      </header>
    );
  } else {
    return (
      <header className="bg-blue-950 text-white p-4 flex items-center gap-4">
        <img src={wavelogo} alt="Wave Logo" className="h-16 w-16" />
        <h1 className="text-2xl font-bold">
          SEA · Sistema de Evidencias Académicas
        </h1>
      </header>
    );
  }
}

export default Header;
