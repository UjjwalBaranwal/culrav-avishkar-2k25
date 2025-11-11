import React, { useState } from "react";

const Login = () => {
  const [flip, setFlip] = useState(false);
  const [view, setView] = useState("register"); // "register" | "login" | "reset"

  const handleFlip = (targetView) => {
    if (targetView !== view) {
      setFlip(true);
      setTimeout(() => {
        setView(targetView);
        setFlip(false);
      }, 400);
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 font-[Jost]">
      <div className=" w-[380px] [perspective:1500px] relative"> 
        <div
          className={`relative w-full h-full rounded-xl shadow-lg transition-transform duration-700 [transform-style:preserve-3d] ${
            flip ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* ===================== REGISTER PAGE ===================== */}
          {view === "register" && (
            <div className="absolute inset-0 bg-white rounded-xl backface-hidden flex flex-col items-center justify-start px-6 py-6 h-[525px]  ">
              <h2 className="text-2xl font-bold text-black mt-2 self-start">
                Register For CULRUV-AVISHKAR
              </h2>
              <div className="flex flex-col w-full mt-3 space-y-3">
                <input
                  type="text"
                  placeholder="User name"
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
                <input
                  type="email"
                  placeholder="Gsuit id"
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
                <input
                  type="text"
                  placeholder="College"
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
                <input
                  type="text"
                  placeholder="Branch"
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
              </div>

              <button className="mt-6 w-full py-2 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 transition">
                Register
              </button>

              <div className="mt-4 flex flex-col items-center">
                <p className="text-sm text-gray-700">Already registered?</p>
                <button
                  onClick={() => handleFlip("login")}
                  className="text-red-500 text-sm hover:underline"
                >
                  Log in
                </button>
              </div>
            </div>
          )}

          {/* ===================== LOGIN PAGE ===================== */}
          {view === "login" && (
            <div className="absolute inset-0 bg-white rounded-xl backface-hidden flex flex-col items-center justify-start px-6 py-6 h-[300px] ">
              <h2 className="text-2xl font-bold text-black mt-2 self-start">
                Welcome Back!!
              </h2>

              <div className="flex flex-col w-full mt-4 space-y-3">
                <input
                  type="email"
                  placeholder="Enter your Gsuit id"
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
                />
              </div>

              <div className="flex justify-between w-full mt-3 text-sm">
                <button
                  onClick={() => handleFlip("register")}
                  className="text-red-500 hover:underline"
                >
                  Back to Register
                </button>
                <button
                  onClick={() => handleFlip("reset")}
                  className="text-red-500 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button className="mt-6 w-full py-2 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 transition">
                Login
              </button>
            </div>
          )}

          {/* ===================== RESET PASSWORD PAGE ===================== */}
          {view === "reset" && (
            <div className="absolute inset-0 bg-white rounded-xl backface-hidden flex flex-col items-center justify-start px-6 py-6 h-[250px] ">
              <h2 className="text-2xl font-bold text-black mt-2 self-start">
                Reset Password
              </h2>

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full mt-4 p-2.5 rounded-md bg-gray-100 text-black outline-none"
              />

              <button className="mt-6 w-full py-2 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 transition">
                Reset Password
              </button>

              <button
                onClick={() => handleFlip("login")}
                className="mt-4 text-red-500 text-sm hover:underline"
              >
                Back to Login Page
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
