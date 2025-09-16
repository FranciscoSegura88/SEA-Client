import wavelogo from '../assets/wavelogo.png';
import sidebar from '../assets/barra-lateral.png';
import profilePic from '../assets/userProfPic.png';
import { Link } from 'react-router-dom';

type HeaderProps = {
  selectedAssignature?: { name: string; nrc: number };
  onSidebarToggle?: () => void;
  showSidebarToggle?: boolean;
  showUserInfo?: boolean;
};

function Header({
  selectedAssignature,
  onSidebarToggle = () => {},
  showSidebarToggle = true,
  showUserInfo = true
}: HeaderProps) {

  const username = "Frank";
  const formattedUsername = username.charAt(0).toUpperCase() + username.slice(1);

  return (
    <header className="bg-[#053758] text-white p-4 flex items-center gap-10 h-1/7">
      {/* Botón del sidebar (solo visible en Dashboard) */}
      {showSidebarToggle && (
        <button
          type="button"
          className="inline-grid place-items-center h-12 w-12 hover:scale-110 active:scale-120 transition"
          onClick={onSidebarToggle}
        >
          <img src={sidebar} alt="Sidebar Icon" />
        </button>
      )}

      {/* Logo */}
      <Link
          to="/dashboard"
          >
        <img src={wavelogo} alt="Wave Logo" className="h-20 w-20" />
      </Link>

      {/* Título */}
      <h1 className="text-3xl font-bold">
        SEA {selectedAssignature ? `> ${selectedAssignature.name} ${selectedAssignature.nrc}` : "· Sistema de Evidencias Académicas"}
      </h1>

      {/* Información de usuario (solo visible cuando showUserInfo es true) */}
      {showUserInfo && (
        <>
          <div className="text-3xl ml-auto text-right">
            <p>Bienvenido, {formattedUsername}</p>
          </div>

          <button
            type='button'
            className='inline-grid place-items-center h-12 w-12 rounded-full hover:scale-110 active:scale-120 transition'
          >
            <img src={profilePic} alt="Foto de Perfil del Usuario" />
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
