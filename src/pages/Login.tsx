import { useEffect, useState } from "react";
import logo from '../assets/logo.png';
import Header from "../components/Header";

function Login({ onLogin }: { onLogin: () => void }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).replace(/^\w/, c => c.toUpperCase());

  const formattedTime = currentTime.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginData.username || !loginData.password) {
      setError("Por favor, completa todos los campos");
      return;
    }

    setIsLoading(true);

    // Simular autenticación
    setTimeout(() => {
      setIsLoading(false);

      // Credenciales de prueba
      if ((loginData.username === "admin" && loginData.password === "admin123") ||
          (loginData.username === "frank" && loginData.password === "frank123")) {
        onLogin();
      } else {
        setError("Usuario: admin, Contraseña: admin123");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header en Login (sin botón de sidebar ni info de usuario) */}
      <Header
        showSidebarToggle={false}
        showUserInfo={false}
        onSidebarToggle={() => {}}
      />

      <div className="flex flex-col justify-center items-center flex-grow pt-4">
        {/* Fecha y hora */}
        <div className="text-center">
          <p className="text-xl text-[#005573] font-bold">
            Bienvenido
          </p>
          <p className="text-lg text-[#005573]">
            {formattedDate} · {formattedTime}
          </p>
        </div>

        {/* Logo */}
        <div className="">
          <img src={logo} alt="Logo CUT" className="w-100" />
        </div>

        {/* Formulario de login */}
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ingresa tu usuario"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ingresa tu contraseña"
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm bg-red-50 p-2 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#005573] text-white py-3 rounded-lg font-semibold hover:bg-[#00425a] transition-colors disabled:opacity-50"
            >
              {isLoading ? "Iniciando sesión..." : "Ingresar al Sistema"}
            </button>
          </form>
        </div>

        <p className="mt-8 text-gray-600 text-sm">
          Sistema de Evidencias Académicas · Universidad de Guadalajara
        </p>
      </div>
    </div>
  );
}

export default Login;
