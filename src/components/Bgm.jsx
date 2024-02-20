import { useRef, useState } from "react";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

const Bgm = () => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <button
      className="w-14 h-14 absolute right-6 lg:right-16 rounded-full flex items-center justify-center model-view-btn text-xl"
      onClick={handleClick}
    >
      <audio ref={audioRef} src="./MainTheme.mp3" loop autoPlay />
      {isPlaying ? <MdMusicOff /> : <MdMusicNote />}
    </button>
  );
};

export default Bgm;
