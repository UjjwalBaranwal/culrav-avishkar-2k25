import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { resetPass } from "./authSlice";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [pwd, setPwd] = useState("");

  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.auth);

  async function handleClick() {
    dispatch(resetPass(searchParams.get("token"), searchParams.get("id"), pwd));
  }
  return (
    <div>
      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <button onClick={handleClick}>
        {loading ? "Resetting" : "Reset Password"}
      </button>
      <p>{error && "Error resetting password"}</p>
    </div>
  );
}
