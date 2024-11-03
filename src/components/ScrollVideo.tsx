import { animated, useSpring } from "react-spring";
import { useState } from "react";

interface ScrollVideoProps {
  video: string;
  scrollYProgress: any; // Adjust the type as necessary
}

export default function ScrollVideo({ video, scrollYProgress }: ScrollVideoProps) {
  const [containerHeight, setContainerHeight] = useState(0);

  // Set a multiplier to control how fast the video plays relative to scrolling
  const scrollMultiplier = 1000;

  const props = useSpring({
    currentTime: scrollYProgress.to([0, 1], [0, 100]),
  });

  // Update container height based on video duration
  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoDuration = e.currentTarget.duration;
    setContainerHeight(videoDuration * scrollMultiplier);
  };

  return (
    <div style={{ height: `${containerHeight}px` }} className="-z-10">
      <animated.video
        className="fixed top-0 left-0 w-screen h-screen object-cover"
        src={video}
        muted
        loop
        autoPlay
        playsInline
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={(e) => {
          const videoElement = e.target as HTMLVideoElement;
          videoElement.currentTime = (videoElement.duration / 100) * props.currentTime.get();
        }}
      />
    </div>
  );
}
