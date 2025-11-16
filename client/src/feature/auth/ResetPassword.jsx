import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { resetPass } from "./authSlice";
import { toast } from "sonner";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [pwd, setPwd] = useState("");

  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  async function handleClick() {
    const token = searchParams.get("token");
    const id = searchParams.get("id");

    const result = dispatch(resetPass({ token, id, newPassword: pwd }));
    // unwrapResult is not required; Redux Toolkit thunks allow access to payload like below:
    if (result.payload?.success) {
      toast.success(result.payload.message || "Password reset successful!");
    } else {
      toast.error(result.payload?.message || "Failed to reset password.");
    }
  }

  return (
    <div className="flex flex-col gap-3 p-5 max-w-sm mx-auto mt-20">
      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        placeholder="Enter new password"
        className="p-2 border rounded"
      />

      <button
        onClick={handleClick}
        className="bg-red-600 text-white py-2 rounded"
      >
        {loading ? "Resetting..." : "Reset Password"}
      </button>

      {error && (
        <p className="text-red-500 text-sm">Error resetting password</p>
      )}
    </div>
  );
}
