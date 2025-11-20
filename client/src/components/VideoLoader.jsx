import React, { useEffect, useRef } from "react";

const VideoLoader = ({ onVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
      video.onended = onVideoEnd;
    }
  }, [onVideoEnd]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      <video
        ref={videoRef}
        src="/loader.mp4"
        muted
        playsInline
        className="min-w-full min-h-full object-cover"
      />
    </div>
  );
};

export default VideoLoader;
