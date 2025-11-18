import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { login, signUp, forgotPass } from "../auth/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const Login = () => {
  const [flip, setFlip] = useState(false);
  const [view, setView] = useState("register");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, message, isAuthenticated } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (loading) return;

    if (message) toast.success(message);

    if (error) toast.error(error);

    if (isAuthenticated) {
      toast.success("Logged in successfully!");
    }
  }, [loading, message, error, isAuthenticated]);

  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: registerErrors },
  } = useForm();

  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
  } = useForm();

  const {
    register: registerReset,
    handleSubmit: handleSubmitReset,
    formState: { errors: resetErrors },
  } = useForm();

  const handleFlip = (targetView) => {
    if (targetView !== view) {
      setFlip(true);
      setTimeout(() => {
        setView(targetView);
        setFlip(false);
      }, 400);
    }
  };

  const onRegisterSubmit = (data) => {
    dispatch(signUp(data));
  };

  const onLoginSubmit = (data) => {
    dispatch(login(data));
  };

  const onResetSubmit = (data) => {
    dispatch(forgotPass(data.email));
  };
  const branches = ["CSE", "ECE", "CHE", "CE", "PIE", "EE", "BT", "ME", "MC"];
  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 font-[Jost]">
      <div className="w-[450px] perspective-[1500px] relative">
        <div
          className={`relative w-full h-full rounded-xl shadow-lg transition-transform duration-700 transform-3d ${
            flip ? "transform-[rotateY(180deg)]" : ""
          }`}
        >
          {/* ===================== REGISTER PAGE ===================== */}
          {view === "register" && (
            <form
              onSubmit={handleSubmitRegister(onRegisterSubmit)}
              className="absolute inset-0 bg-white rounded-xl backface-hidden flex flex-col items-center justify-start px-6 py-6 h-[525px]"
            >
              <h2 className="text-2xl font-bold text-black mt-2">
                Register For CULRAV-AVISHKAR
              </h2>

              <div className="flex flex-col w-full mt-3 space-y-3">
                <input
                  type="text"
                  placeholder="User name"
                  {...registerRegister("name", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "At least 3 characters required",
                    },
                  })}
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
                {registerErrors.username && (
                  <p className="text-red-500 text-sm">
                    {registerErrors.username.message}
                  </p>
                )}

                <input
                  type="email"
                  placeholder="College mail id"
                  {...registerRegister("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@(mnnit|iitk|iiitp)\.ac\.in$/,
                      message: "Enter a valid Gsuit email",
                    },
                  })}
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
                {registerErrors.email && (
                  <p className="text-red-500 text-sm">
                    {registerErrors.email.message}
                  </p>
                )}

                <input
                  type="text"
                  placeholder="College Name"
                  {...registerRegister("college", {
                    required: "College name is required",
                  })}
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
                {registerErrors.college && (
                  <p className="text-red-500 text-sm">
                    {registerErrors.college.message}
                  </p>
                )}

                <select
                  {...registerRegister("branch", {
                    required: "Branch is required",
                  })}
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Branch
                  </option>
                  {branches.map((b) => (
                    <option key={b} value={b}>
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
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
                {registerErrors.password && (
                  <p className="text-red-500 text-sm">
                    {registerErrors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-2 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 transition"
              >
                {loading ? "Signing up…" : "Register"}
              </button>

              <div className="mt-4 flex flex-col items-center">
                <p className="text-sm text-gray-700">Already registered?</p>
                <button
                  type="button"
                  onClick={() => handleFlip("login")}
                  className="text-red-500 text-sm hover:underline"
                >
                  Log in
                </button>
              </div>
            </form>
          )}

          {/* ===================== LOGIN PAGE ===================== */}
          {view === "login" && (
            <form
              onSubmit={handleSubmitLogin(onLoginSubmit)}
              className="absolute inset-0 bg-white rounded-xl backface-hidden flex flex-col items-center justify-start px-6 py-6 h-[300px]"
            >
              <h2 className="text-2xl font-bold text-black mt-2 self-start">
                Welcome Back!!
              </h2>

              <div className="flex flex-col w-full mt-4 space-y-3">
                <input
                  type="email"
                  placeholder="Enter your college mail id"
                  {...registerLogin("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@(mnnit|iitk|iiitp)\.ac\.in$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
                {loginErrors.email && (
                  <p className="text-red-500 text-sm">
                    {loginErrors.email.message}
                  </p>
                )}

                <input
                  type="password"
                  placeholder="Enter your password"
                  {...registerLogin("password", {
                    required: "Password is required",
                  })}
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
                {loginErrors.password && (
                  <p className="text-red-500 text-sm">
                    {loginErrors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between w-full mt-3 text-sm">
                <button
                  type="button"
                  onClick={() => handleFlip("register")}
                  className="text-red-500 hover:underline"
                >
                  Back to Register
                </button>
                <button
                  type="button"
                  onClick={() => handleFlip("reset")}
                  className="text-red-500 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-2 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 transition"
              >
                {loading ? "Logging in…" : "Login"}
              </button>
            </form>
          )}

          {/* ===================== RESET PASSWORD PAGE ===================== */}
          {view === "reset" && (
            <form
              onSubmit={handleSubmitReset(onResetSubmit)}
              className="absolute inset-0 bg-white rounded-xl backface-hidden flex flex-col items-center justify-start px-6 py-6 h-[250px]"
            >
              <h2 className="text-2xl font-bold text-black mt-2 self-start">
                Reset Password
              </h2>

              <input
                type="email"
                placeholder="Enter your email address"
                {...registerReset("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full mt-4 p-2.5 rounded-md bg-gray-100 text-black outline-none"
              />
              {resetErrors.email && (
                <p className="text-red-500 text-sm">
                  {resetErrors.email.message}
                </p>
              )}

              <button
                type="submit"
                className="mt-6 w-full py-2 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 transition"
              >
                {loading ? "Request pending…" : "Reset Password"}
              </button>

              <button
                type="button"
                onClick={() => handleFlip("login")}
                className="mt-4 text-red-500 text-sm hover:underline"
              >
                Back to Login Page
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
