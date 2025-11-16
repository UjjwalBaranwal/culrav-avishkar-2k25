import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { createTeam } from "../../services/apiTeam";

export default function CreateTeam() {
  const user = useSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      size: 1,
    },
  });

  async function onSubmit(values) {
    try {
      await createTeam(values.name, values.size, user?.id);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Create Team</h2>

      <div className="bg-black/30 rounded-lg p-6 border border-white/10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              {...register("name", {
                required: "Team name is required",
                minLength: {
                  value: 2,
                  message: "Team name must be at least 2 characters",
                },
              })}
              placeholder="Team name"
              className="w-full rounded bg-white/80 text-black px-3 py-2"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="number"
              {...register("size", {
                required: "Team size is required",
                valueAsNumber: true,
                validate: (value) =>
                  value > 0 || "Team size must be at least 1",
              })}
              placeholder="Team size"
              className="w-full rounded bg-white/80 text-black px-3 py-2"
            />
            {errors.size && (
              <p className="text-red-400 text-sm mt-1">{errors.size.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 rounded bg-white/20 hover:bg-white/30"
          >
            {isSubmitting ? "Creating..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
}
