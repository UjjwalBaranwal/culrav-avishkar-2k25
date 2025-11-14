export default function Logout() {
  // hook into your auth store here
  const handleLogout = () => {
    // e.g., clear tokens, redux state, then redirect
    // navigate("/");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Logout</h2>
      <button onClick={handleLogout} className="px-4 py-2 rounded bg-red-500/80 hover:bg-red-500">
        Sign out
      </button>
    </div>
  );
}
