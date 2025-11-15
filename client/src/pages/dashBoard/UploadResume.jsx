import React from 'react';

export default function UploadResume() {
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
          className="block w-full bg-gray-300 border border-gray-400 rounded-lg p-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400" 
          placeholder="Enter link" 
        />
        
        <p className="text-sm text-center text-pink-300">
          Make sure it is public
        </p>
        
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md">
          UPLOAD
        </button>
      </div>
    </div>
  );
}