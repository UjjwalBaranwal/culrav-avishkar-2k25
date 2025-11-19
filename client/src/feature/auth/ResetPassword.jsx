import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { resetPass } from "./authSlice";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [pwd, setPwd] = useState("");
  const [rpwd, setRPwd] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  async function handleClick() {
    if (pwd != rpwd || pwd.length < 6) return;
    const token = searchParams.get("token");
    const id = searchParams.get("id");

    dispatch(resetPass({ token, id, newPassword: pwd }));
  }

  return (
    <div className="flex flex-col gap-3 p-5 max-w-sm mx-auto mt-20">
      <h1 className="text-center text-2xl">Reset Your Password</h1>
      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        placeholder="Enter new password"
        className={`p-2 border rounded ${(pwd != rpwd || pwd.length < 6) && "border-red-600"} outline-none`}
      />
      {pwd.length < 6 && (
        <p className="text-red-600">Minimum 6 characters required.</p>
      )}
      <input
        type="password"
        value={rpwd}
        onChange={(e) => setRPwd(e.target.value)}
        placeholder="Confirm your password"
        className={`p-2 border rounded ${(pwd != rpwd || pwd.length < 6) && "border-red-600"} outline-none`}
      />
      {pwd != rpwd && <p className="text-red-600">Passwords do not match.</p>}
      <button
        onClick={handleClick}
        className="bg-red-600 text-white py-2 rounded"
      >
        {loading ? "Resetting..." : "Submit"}
      </button>
    </div>
  );
}
