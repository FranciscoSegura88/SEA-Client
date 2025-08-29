import wavelogo from '../assets/wavelogo.png';
import sidebar from '../assets/barra-lateral.png';

type HeaderProps = {
  selectedAssignature?: { name: string; nrc: number };
  onSidebarToggle: () => void;
};

function Header({ selectedAssignature, onSidebarToggle }: HeaderProps) {
  const isLoggedIn = false;
  const username = "Frank";

  // Elementos comunes
  const logoElement = (
    <img src={wavelogo} alt="Wave Logo" className="h-20 w-20" />
  );

  const titleElement = isLoggedIn ? (
    <h1 className="text-4xl font-bold">
      SEA {selectedAssignature ? `> ${selectedAssignature.name} ${selectedAssignature.nrc}` : ""}
    </h1>
  ) : (
    <h1 className="text-4xl font-bold">
      SEA · Sistema de Evidencias Académicas
    </h1>
  );

  // Elementos específicos para usuario logueado
  const sidebarButton = isLoggedIn && (
    <button
      type="button"
      className="inline-grid place-items-center h-12 w-12 hover:scale-110 active:scale-120 transition"
      onClick={onSidebarToggle}
    >
      <img src={sidebar} alt="Sidebar Icon" className="" />
    </button>
  );

  const welcomeMessage = isLoggedIn && (
    <div className="text-4xl ml-auto text-right">
      <p>BIENVENIDO, {username.toUpperCase()}</p>
    </div>
  );

  return (
    <header className="bg-[#053758] text-white p-4 flex items-center gap-4 h-1/7">
      {sidebarButton}
      {logoElement}
      {titleElement}
      {welcomeMessage}
    </header>
  );
}

export default Header;
