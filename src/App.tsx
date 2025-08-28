import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // react router dom para las rutas

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// componente es el login con layout (sidebar header y  login)
// Lo hago así para que el login también tenga su header y sidebar
function LoginWithLayout() {
  // estado para saber si el sidebar está abierto o cerrado
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // funcion que abre y cierra el sidebar
  const toggleSidebar = () => setIsSidebarOpen((v) => !v);

  return (
    <div className="flex">
      {/* Sidebar que depende del estado */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Contenedor principal de la página */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Header con botón para abrir/cerrar el sidebar */}
        <Header onSidebarToggle={toggleSidebar} />

        {/* Aquí se muestra la página de login */}
        <Login />
      </div>
    </div>
  );
}

function App() {
  return (
    // pa las rutas
    <BrowserRouter>
      {/* Routes contiene todas mis rutas */}
      <Routes>
        {/* Ruta "/"  manda al login con header y sidebar */}
        <Route path="/" element={<LoginWithLayout />} />

        {/* Ruta dashboard*/}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
