export default function UploadResume() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upload Resume</h2>
      <div className="bg-black/30 rounded-lg p-6 border border-white/10">
        <input type="file" className="block" />
        <p className="mt-3 text-sm text-white/70">Supported: PDF, DOCX (max 5MB)</p>
      </div>
    </div>
  );
}
