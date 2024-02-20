import { FaPlay } from "react-icons/fa";
const ModelView = ({ handleClick }) => {
  return (
    <button
      className="w-14 h-14 ml-10 rounded-full flex items-center justify-center model-view-btn text-xl"
      onClick={handleClick}
    >
      <FaPlay />
    </button>
  );
};

export default ModelView;
