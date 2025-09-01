import { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [selectedAssignature, setSelectedAssignature] = useState<{ name: string; nrc: number } | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const assignatures = [
    { id: 1, name: "Redes II", nrc: 12345, schedule: "Lunes 10:00-12:00" },
    { id: 2, name: "Desarrollo Web", nrc: 67890, schedule: "Miércoles 14:00-16:00" },
    { id: 3, name: "Base de Datos", nrc: 54321, schedule: "Viernes 08:00-10:00" },
    { id: 4, name: "Sistemas Operativos", nrc: 98765, schedule: "Martes 16:00-18:00" },
    { id: 5, name: "Inteligencia Artificial", nrc: 11223, schedule: "Jueves 12:00-14:00" },
    { id: 6, name: "Seguridad Informática", nrc: 44556, schedule: "Lunes 14:00-16:00" },
    { id: 7, name: "Programación Avanzada", nrc: 77889, schedule: "Miércoles 10:00-12:00" },
    { id: 8, name: "Arquitectura de Computadoras", nrc: 99001, schedule: "Viernes 14:00-16:00" },
    { id: 9, name: "Desarrollo de Aplicaciones Móviles", nrc: 22334, schedule: "Martes 08:00-10:00" }
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        assignatures={assignatures}
        onSelectAssignature={setSelectedAssignature}
        selectedAssignature={selectedAssignature}
      />

      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-72" : "ml-0"}`}>
        <Header
          selectedAssignature={selectedAssignature || undefined}
          onSidebarToggle={toggleSidebar}
        />

        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            {selectedAssignature ? `Materia: ${selectedAssignature.name}` : "Todas las Materias"}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {assignatures.map(assignature => (
              <Card
                key={assignature.id}
                name={assignature.name}
                nrc={assignature.nrc}
                schedule={assignature.schedule}
                onClick={() => setSelectedAssignature(
                  selectedAssignature?.nrc === assignature.nrc ?
                  null :
                  { name: assignature.name, nrc: assignature.nrc }
                )}
                isSelected={selectedAssignature?.nrc === assignature.nrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
