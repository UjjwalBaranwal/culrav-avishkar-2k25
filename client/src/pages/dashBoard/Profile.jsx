export default function Profile() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Profile</h2>
        <p className="text-white/70 text-sm">Manage your personal information</p>
      </div>
      
      {/* Profile Form - Centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-white/20 shadow-xl">
          <div className="space-y-6">
            <Field label="Name" value="James Thoms" />
            <Field label="UserId" value="CA-34324" />
            <Field label="Email" value="james@company.com" />
            <Field label="Phone" value="xxxxxxxxxx" />
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
              Edit Profile
            </button>
            <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 border border-white/20">
              Change Password
            </button>
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
