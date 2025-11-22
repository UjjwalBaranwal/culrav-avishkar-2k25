import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMe } from "../../services/apiUser";
import { loadUser } from "../../feature/auth/authSlice";
import { toast } from "sonner";

export default function UploadResume() {
  const dispatch = useDispatch();
  const [resumeLink, setResumeLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async () => {
    const trimmed = resumeLink.trim();

    if (!trimmed) {
      toast.error("Please enter a resume drive link");
      return;
    }

    // Basic Google Drive link validation
    const isDriveLink =
      trimmed.includes("drive.google.com") ||
      trimmed.includes("docs.google.com");

    if (!isDriveLink) {
      toast.error("Please enter a valid Google Drive link");
      return;
    }

    try {
      setIsLoading(true);
      await updateMe({ resumeLink: trimmed });
      toast.success("Resume link uploaded successfully");
      // Refresh user data in Redux so Profile shows updated resume link immediately
      dispatch(loadUser());
    } catch (error) {
      toast.error(error.message || "Failed to upload resume link");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 p-8 rounded-lg shadow-lg max-w-md mx-auto">
      
      <h2 className="text-3xl font-bold text-center text-white mb-8 font-anton">
        Upload Resume
      </h2>

      <div className="space-y-4">
        
        <label htmlFor="resumeLink" className="block text-sm font-medium text-green-200">
          Resume Drive Link 
        </label>
        
        <input 
          type="text" 
          id="resumeLink"
          value={resumeLink}
          onChange={(e) => setResumeLink(e.target.value)}
          className="block w-full bg-gray-300 border border-gray-400 rounded-lg p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400" 
          placeholder="Enter link" 
        />
        
        <p className="text-sm text-center text-sky-200">
          Only Google Drive and Google Docs links are supported. Make sure the link is public.
        </p>
        
        <button
          type="button"
          onClick={handleUpload}
          disabled={isLoading}
          className="w-full bg-cyan-400 hover:bg-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
        >
          {isLoading ? "UPLOADING..." : "UPLOAD"}
        </button>
      </div>
    </div>
  );
}