import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Outlet, useParams } from 'react-router-dom';

type LayoutProps = {
  assignatures: Array<{ id: number; name: string; nrc: number; schedule: string }>;
};

function Layout({ assignatures }: LayoutProps) {
  const { assignatureId } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const currentAssignature = assignatures.find(
    (a) => a.id.toString() === assignatureId
  );

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
        <Sidebar
        isOpen={isSidebarOpen}
        assignatures={assignatures}
        selectedAssignature={currentAssignature}
        />
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-72" : "ml-0"}`}>
          <Header
            selectedAssignature={currentAssignature}
            onSidebarToggle={toggleSidebar}
          />

          {/*TODO: AQUI SE VAN A CARGAR LOS COMPONENTES DE CADA PAGINA*/}
          <main className="flex-grow p-4 flex">
            <Outlet /> {/* Renderiza el componente de la ruta hija */}
          </main>

        </div>
    </>
  )
}

export default Layout;
