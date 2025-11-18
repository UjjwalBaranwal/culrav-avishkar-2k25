export default function Profile() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Profile</h2>
        <p className="text-white/70 text-sm">You can see your personal information here</p>
      </div>
      
      {/* Profile Form - Centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl">
          <div className="space-y-6">
            <Field label="Name" value="James Thoms" />
            <Field label="Branch" value="CA-34324" />
            <Field label="Email" value="james@company.com" />
            <Field label="Phone" value="xxxxxxxxxx" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }) {
  return (
    <div className="grid grid-cols-12 items-center gap-3">
      <div className="col-span-4 text-sm text-white/70">{label}</div>
      <input
        readOnly
        value={value}
        className="col-span-8 rounded-md bg-white/80 text-black px-3 py-2 outline-none"
      />
    </div>
  );
}
