import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { resetPass } from "./authSlice";


// === INPUT STYLE ===
const neonInput =
  "w-full px-4 py-3 text-lg rounded-md bg-[#050816]/80 border border-cyan-400/70 text-cyan-100 placeholder-cyan-400/40 focus:outline-none focus:border-fuchsia-400 shadow-[0_0_12px_rgba(56,189,248,0.45)]";

// === BUTTON STYLE ===
const buttonClass =
  "mt-6 w-full py-3 bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 text-black text-lg font-semibold rounded-lg hover:brightness-125 transition shadow-[0_0_20px_rgba(236,72,153,0.8)]";

// === SMALL LINK STYLE ===
const smallLinkClass =
  "text-fuchsia-400 cursor-pointer hover:underline hover:text-fuchsia-300 transition";

// === HANDLING AF INPUTS BACKGROUND ===
const css = `
input:-webkit-autofill,
input:-webkit-autofill:focus,
input:-webkit-autofill:hover,
textarea:-webkit-autofill,
select:-webkit-autofill {
  box-shadow: 0 0 0px 1000px #050816 inset !important;
  -webkit-text-fill-color: #a0faff !important;
  caret-color: #a0faff !important;
}
`;
const style = document.createElement("style");
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);



export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [pwd, setPwd] = useState("");
  const [rpwd, setRPwd] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  async function handleClick() {
    if (pwd != rpwd || pwd.length < 6) return;
    const token = searchParams.get("token");
    const id = searchParams.get("id");

    const run = async () => {
      try {
        await dispatch(resetPass({ token, id, newPassword: pwd })).unwrap();
        navigate("/login");
      } catch (e) {
        console.error(e);
      }
    };
    run();
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
        className={`${pwd == rpwd && pwd.length >= 6 ? "bg-red-600" : "bg-gray-400"} text-white py-2 rounded`}
      >
        {loading ? "Resetting..." : "Submit"}
      </button>
    </div>
  );
}
