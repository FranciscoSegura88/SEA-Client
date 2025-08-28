function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h2 className="text-xl font-bold p-4">Sidebar</h2>
      <ul className="space-y-4 p-4">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;
