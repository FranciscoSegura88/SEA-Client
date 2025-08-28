function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Iniciar Sesión
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Usuario</label>
            <input
              type="text"
              placeholder="Tu usuario"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Contraseña</label>
            <input
              type="password"
              placeholder="unapassword"
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="button"
            className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
