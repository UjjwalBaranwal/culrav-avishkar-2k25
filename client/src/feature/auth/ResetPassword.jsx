import { useState } from "react";
import { useSearchParams } from "react-router";
import { resetPassword } from "../../services/apiAuth";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [pwd, setPwd] = useState("");
  const [msg, setMsg] = useState("");

  async function handleClick() {
    try {
      await resetPassword(
        searchParams.get("token"),
        searchParams.get("id"),
        pwd,
      );
    } catch (e) {
      setMsg(e.response.data.message);
    }
  }
  return (
    <div>
      <input
        type="password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />
      <button onClick={handleClick}>Reset Password</button>
      <p>{msg}</p>
    </div>
  );
}
