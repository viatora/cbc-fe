import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import teaserVideo from "../assets/teaser.mp4";
import hologramNoLight from "../assets/hologram/hologram_nolight.png";
import hologramLight1 from "../assets/hologram/hologram_light1.png";
import hologramLight2 from "../assets/hologram/hologram_light2.png";
import hologramLight3 from "../assets/hologram/hologram_light3.png";

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
    <div className="relative min-h-full">
      {/* Background video container */}
      <div className="fixed inset-0 -z-10">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 min-h-full w-auto object-cover"
          src={teaserVideo}
          autoPlay
          loop
          muted={muted}
        />
      </div>

      {/* Hologram */}
      <div className="absolute top-[calc(50vh-12rem)] left-[calc(50vw-19.2rem)] -translate-x-1/2 -translate-y-1/2 h-96 w-[38.4rem] z-10 transform-style-3d hidden md:block animate-spin-pulse">
        <img
          src={hologramNoLight}
          alt="Hologram Base"
          className="absolute top-0 left-0 h-full w-auto object-contain"
          onError={(e) => console.error("Failed to load image:", e)}
        />
        <img
          src={hologramLight1}
          alt="Hologram Light 1"
          className="absolute top-0 left-0 h-full w-auto object-contain animate-flicker-1"
          onError={(e) => console.error("Failed to load image:", e)}
        />
        <img
          src={hologramLight2}
          alt="Hologram Light 2"
          className="absolute top-0 left-0 h-full w-auto object-contain animate-flicker-2"
          onError={(e) => console.error("Failed to load image:", e)}
        />
        <img
          src={hologramLight3}
          alt="Hologram Light 3"
          className="absolute top-0 left-0 h-full w-auto object-contain animate-flicker-3"
          onError={(e) => console.error("Failed to load image:", e)}
        />
      </div>

      {/* Mute button */}
      <button
        className="fixed top-5 left-5 md:top-auto md:left-auto md:bottom-5 md:right-5 z-20 text-white bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-clarks-orange focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-1 hover:text-clarks-orange"
        onClick={toggleMute}
      >
        {muted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
      </button>
    </div>
  );
}
