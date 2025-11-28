import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { login, signUp, forgotPass } from "../auth/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import apiClient from "../../utils/apiClient.js";
import { toast } from "sonner";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

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

const Login = () => {
  const [view, setView] = useState("login");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, isAuthenticated, errorCode } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  //Hook Form
  const {
    register: registerRegister,
    reset: resetRegisterForm,
    handleSubmit: handleSubmitRegister,
    formState: { errors: registerErrors },
    getValues: getRegisterValues,
  } = useForm();

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
    getValues: getLoginValues,
  } = useForm();

  const {
    register: registerReset,
    handleSubmit: handleSubmitReset,
    formState: { errors: resetErrors },
  } = useForm();

  // ================= SUBMITS =================
  const onRegisterSubmit = async (data) => {
    try {
      await dispatch(signUp(data)).unwrap();
      resetRegisterForm();
      setView("login");
    } catch (e) {
      console.error(e);
    }
  };

  const onLoginSubmit = (data) => dispatch(login(data));

  const onResetSubmit = (data) => dispatch(forgotPass(data.email));

  const branches = ["CSE", "ECE", "CHE", "CE", "PIE", "EE", "BT", "ME", "MC"];

  // ================= GSAP NEON PULSE =================
  useEffect(() => {
    gsap.to(".login-card", {
      boxShadow: "0 0 55px rgba(34,211,238,0.45)",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  // ===== ANIMATION VARIANTS =====
  const panelVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#020617] font-[Jost] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#22d3ee22,_transparent_70%),_radial-gradient(circle_at_bottom,_#a855f722,_transparent_70%)] opacity-70" />
      <div
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage:
            "linear-gradient(#22d3ee11 1px, transparent 1px), linear-gradient(90deg, #22d3ee11 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* CARD */}
      <motion.div
      className="login-card relative w-[380px] max-w-[92vw] rounded-[2rem] border border-cyan-400/40 bg-slate-950/60 px-5 py-6 backdrop-blur-xl"

        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {/* Neon Corners - Fixed INSIDE Card */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
          <div className="absolute top-[1px] left-[12px] h-2 w-20 bg-cyan-400 rounded-tl-full " />
          <div className="absolute top-[1.5px] right-[4px] h-2 w-20 bg-fuchsia-500 rounded-tr-full" />
          <div className="absolute bottom-[1.5px] right-[4px] h-2 w-20 bg-cyan-400 rounded-br-full" />
          <div className="absolute bottom-[1.5px] left-[4px] h-2 w-20 bg-fuchsia-500 rounded-bl-full" />
        </div>
        <AnimatePresence mode="wait">
          {/* ============ REGISTER ============ */}
          {view === "register" && (
            <motion.form
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key="register"
              onSubmit={handleSubmitRegister(onRegisterSubmit)}
              className="space-y-4"
            >
              <h2 className="text-3xl font-extrabold text-cyan-300 flex gap-2">
                Register 🚀
              </h2>

              <input
                type="text"
                placeholder="Enter your name"
                {...registerRegister("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "At least 3 characters required",
                  },
                })}
                className={neonInput}
              />
              {registerErrors.name && (
                <p className="text-red-400 text-sm">
                  {registerErrors.name.message}
                </p>
              )}

              <input
                type="email"
                placeholder="College mail id"
                {...registerRegister("email", {
                  required: "Email is required",
                })}
                className={neonInput}
              />
              {registerErrors.email && (
                <p className="text-red-400 text-sm">
                  {registerErrors.email.message}
                </p>
              )}

              <input
                type="text"
                placeholder="College Name"
                {...registerRegister("college", {
                  required: "College is required",
                })}
                className={neonInput}
              />
              {registerErrors.college && (
                <p className="text-red-400 text-sm">
                  {registerErrors.college.message}
                </p>
              )}

              <select
                {...registerRegister("branch", {
                  required: "Branch is required",
                })}
                className={neonInput}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Branch
                </option>
                {branches.map((b) => (
                  <option
                    key={b}
                    value={b}
                    className="bg-[#020617] text-cyan-100"
                  >
                    {b}
                  </option>
                ))}
              </select>

              <input
                type="password"
                placeholder="Create a password"
                {...registerRegister("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
                className={neonInput}
              />
              {registerErrors.password && (
                <p className="text-red-400 text-sm">
                  {registerErrors.password.message}
                </p>
              )}

              {errorCode == "AUTH_EMAIL_TAKEN" && (
                <p className="text-cyan-100 text-sm">
                  Email already taken.{" "}
                  <button
                    type="button"
                    className={smallLinkClass}
                    onClick={async () => {
                      try {
                        await apiClient.post(
                          "/auth/request-confirmation-mail",
                          {
                            email: getRegisterValues("email"),
                          },
                        );
                        toast.success("Confirmation mail sent!");
                      } catch {
                        toast.error("Error requesting confirmation mail");
                      }
                    }}
                  >
                    Request new confirmation link?
                  </button>
                </p>
              )}

              <button type="submit" className={buttonClass}>
                {loading ? "Signing up…" : "Register"}
              </button>

              <p className="text-cyan-100 text-lg text-center">
                Already registered?{" "}
                <span
                  className={smallLinkClass}
                  onClick={() => setView("login")}
                >
                  Log in
                </span>
              </p>
            </motion.form>
          )}

          {/* ============ LOGIN ============ */}
          {view === "login" && (
            <motion.form
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key="login"
              onSubmit={handleSubmitLogin(onLoginSubmit)}
              className="space-y-6"
            >
              <h2 className="text-4xl font-extrabold text-cyan-300">
                Welcome Back!!
              </h2>

              <input
                type="email"
                placeholder="Enter your college mail id"
                {...registerLogin("email", {
                  required: "Email is required",
                })}
                className={neonInput}
              />
              {loginErrors.email && (
                <p className="text-red-400 text-sm">
                  {loginErrors.email.message}
                </p>
              )}

              <input
                type="password"
                placeholder="Enter your password"
                {...registerLogin("password", {
                  required: "Password is required",
                })}
                className={neonInput}
              />
              {loginErrors.password && (
                <p className="text-red-400 text-sm">
                  {loginErrors.password.message}
                </p>
              )}

              {errorCode == "AUTH_EMAIL_NOT_VERIFIED" && (
                <p className="text-cyan-100 text-sm">
                  You need to verify your email.{" "}
                  <button
                    type="button"
                    className={smallLinkClass}
                    onClick={async () => {
                      try {
                        await apiClient.post(
                          "/auth/request-confirmation-mail",
                          {
                            email: getLoginValues("email"),
                          },
                        );
                        toast.success("Confirmation mail sent!");
                      } catch {
                        toast.error("Error requesting confirmation mail");
                      }
                    }}
                  >
                    Request new confirmation link?
                  </button>
                </p>
              )}

              <button type="submit" className={buttonClass}>
                {loading ? "Logging in…" : "Login"}
              </button>

              <div className="flex justify-between text-lg text-cyan-100">
                <span
                  className={smallLinkClass}
                  onClick={() => setView("register")}
                >
                  Register
                </span>
                <span
                  className={smallLinkClass}
                  onClick={() => setView("reset")}
                >
                  Forgot Password?
                </span>
              </div>
            </motion.form>
          )}

          {/* ============ RESET ============ */}
          {view === "reset" && (
            <motion.form
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key="reset"
              onSubmit={handleSubmitReset(onResetSubmit)}
              className="space-y-6"
            >
              <h2 className="text-4xl font-extrabold text-cyan-300">
                Reset Password
              </h2>

              <input
                type="email"
                placeholder="Enter your email address"
                {...registerReset("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className={neonInput}
              />
              {resetErrors.email && (
                <p className="text-red-400 text-sm">
                  {resetErrors.email.message}
                </p>
              )}

              <button type="submit" className={buttonClass}>
                {loading ? "Request pending…" : "Reset Password"}
              </button>

              <p className="text-center text-lg text-cyan-100">
                <span
                  className={smallLinkClass}
                  onClick={() => setView("login")}
                >
                  Back to Login
                </span>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Login;
