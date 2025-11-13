export default function CreateTeam() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Create Team</h2>
      <div className="bg-black/30 rounded-lg p-6 border border-white/10">
        <form className="space-y-4">
          <input
            placeholder="Team name"
            className="w-full rounded bg-white/80 text-black px-3 py-2"
          />
          <button className="px-4 py-2 rounded bg-white/20 hover:bg-white/30">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}
