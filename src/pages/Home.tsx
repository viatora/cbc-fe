import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import teaserVideo from "../assets/teaser.mp4";
import hologramImage from "../assets/hologram.png";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 min-h-full w-auto object-cover"
        src={teaserVideo}
        autoPlay
        loop
        muted={muted}
      />
      <img
        src={hologramImage}
        alt="Hologram Logo"
        className="absolute top-[calc(50vh-12rem)] left-[calc(50vw-19.2rem)] h-96 z-10 animate-spin-pulse transform-style-3d hidden md:block"
      />

      <button
        className="absolute bottom-5 right-5 z-20 text-white bg-transparent border-none cursor-pointer focus:outline-none"
        onClick={toggleMute}
      >
        {muted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>
    </div>
  );
}
