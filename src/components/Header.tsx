import wavelogo from '../assets/wavelogo.png'

function Header() {
  return (
    <header className="bg-blue-950 text-white p-4 flex items-center gap-4">
      <img src={wavelogo} alt="Wave Logo" className="h-16 w-16" />
      <h1 className="text-2xl font-bold">SEA · Sistema de Evidencias Académicas</h1>
    </header>
  )
}

export default Header
