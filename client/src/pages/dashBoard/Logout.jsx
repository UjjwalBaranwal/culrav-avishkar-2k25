import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { logout } from "../../feature/auth/authSlice";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out");
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Logout</h2>
      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded bg-red-500/80 hover:bg-red-500"
      >
        Sign out
      </button>
    </div>
  );
}
