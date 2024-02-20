import { GiHorizonRoad } from "react-icons/gi";

const RoadmapBtn = ({ handleClick }) => {
  return (
    <button
      className="w-14 h-14 rounded-full flex items-center justify-center roadmap-btn bg-black lg:py-3 lg:px-5 lg:bg-black/20 lg:w-auto"
      onClick={handleClick}
    >
      <p className="text-md font-extrabold text-center hidden lg:block">
        OUR ROADMAP
      </p>
      <span className="lg:w-8 lg:h-8 text-[#fae7a8] bg-black text-2xl rounded-full flex items-center justify-center lg:ml-5">
        <GiHorizonRoad />
      </span>
    </button>
  );
};

export default RoadmapBtn;
