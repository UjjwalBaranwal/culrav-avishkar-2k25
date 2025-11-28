import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router";
import { resetPass } from "./authSlice";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { Toaster, toast } from "sonner";

// === INPUT STYLE ===
const neonInput =
  "w-full px-4 py-3 text-lg rounded-md bg-[#050816]/80 border border-cyan-400/70 text-cyan-100 placeholder-cyan-400/40 focus:outline-none focus:border-fuchsia-400 shadow-[0_0_12px_rgba(56,189,248,0.45)]";

// === BUTTON STYLE ===
const buttonClass =
  "mt-6 w-full py-3 bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 text-black text-lg font-semibold rounded-lg hover:brightness-125 transition shadow-[0_0_20px_rgba(236,72,153,0.8)]";

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const [pwd, setPwd] = useState("");
  const [rpwd, setRPwd] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  
  // GSAP animation
  useEffect(() => {
    gsap.to(".login-card", {
      boxShadow: "0 0 55px rgba(34,211,238,0.45)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (pwd.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    if (pwd !== rpwd) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await dispatch(
        resetPass({
          token: searchParams.get("token"),
          id: searchParams.get("id"),
          newPassword: pwd,
        })
      ).unwrap();

      toast.success("Password reset successfully");
      setTimeout(() => navigate("/login"), 1000);
    } catch (err) {
      toast.error("Failed to reset password. Try again.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#020617] font-[Jost] relative">
      <Toaster position="top-center" richColors />

      <motion.div
        className="login-card relative w-[380px] max-w-[92vw] rounded-4xl border border-cyan-400/40 bg-slate-950/60 px-5 py-6 backdrop-blur-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <AnimatePresence mode="wait">
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-extrabold text-cyan-300">
              Reset Your Password
            </h1>

            <input
              type="password"
              placeholder="Enter new password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className={neonInput}
            />
            {pwd.length > 0 && pwd.length < 6 && (
              <p className="text-cyan-300 text-sm">Minimum 6 characters required.</p>
            )}

            <input
              type="password"
              placeholder="Confirm password"
              value={rpwd}
              onChange={(e) => setRPwd(e.target.value)}
              className={neonInput}
            />
            {rpwd.length > 0 && pwd !== rpwd && (
              <p className="text-cyan-300 text-sm">Passwords do not match.</p>
            )}

            <button type="submit" className={buttonClass}>
              {loading ? "Resetting..." : "Submit"}
            </button>
          </motion.form>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
