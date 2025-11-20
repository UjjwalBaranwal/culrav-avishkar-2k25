import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: "user@example.com", // default email for now
    },
  });

  const onSubmit = (data) => {
    console.log("Password Reset Data:", data);
  };

  const newPassword = watch("newPassword");

  return (
    <div className="flex items-start justify-center min-h-screen bg-gray-100 font-[Jost]">
      <div className="w-[380px] relative">
        <div className="relative w-full h-full rounded-xl shadow-lg transition-transform duration-700]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="absolute inset-0 bg-white rounded-xl backface-hidden flex flex-col items-center justify-start px-6 py-6 h-[350px]"
          >
            <h2 className="text-2xl font-bold text-black mt-2 self-start">
              Reset Your Password
            </h2>

            {/* Current Email */}
            <div className="flex flex-col w-full mt-4">
              <label className="text-sm text-gray-700 mb-1">
                Your email address is:-{" "}
              </label>
              <input
                type="email"
                {...register("email")}
                disabled
                className="p-2.5 rounded-md bg-gray-200 text-black outline-none cursor-not-allowed"
              />
            </div>

            {/* New Password */}
            <div className="flex flex-col w-full mt-3">
              <input
                type="password"
                placeholder="Enter new password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
                className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col w-full mt-3">
              <input
                type="password"
                placeholder="Re-enter new password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
                className="p-2.5 rounded-md bg-gray-100 text-black outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full py-2 bg-red-500 text-white text-lg rounded-md hover:bg-red-600 transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
