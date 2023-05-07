import { useState, useRef } from "react";
import { MdPlayCircle, MdPauseCircle } from "react-icons/md";
import video from "../assets/video.mp4";

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 pt-10 pb-10">
      <video
        ref={videoRef}
        src={video}
        // src="https://www.w3schools.com/html/mov_bbb.mp4"
        className="w-full object-cover max-w-[80rem] mx-auto border-2 border-[#363532]"
      />
      <div className="absolute inset-0 flex items-center justify-center ">
        {isPlaying ? (
          <MdPauseCircle
            className="text-yellow-500 text-8xl max-[600px]:text-5xl cursor-pointer"
            onClick={handlePlayPause}
          />
        ) : (
          <MdPlayCircle
            className="text-yellow-500 text-8xl max-[600px]:text-5xl cursor-pointer"
            onClick={handlePlayPause}
          />
        )}
      </div>
    </div>
  );
}
export default VideoPlayer;
