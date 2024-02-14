import { FaXmark } from "react-icons/fa6";

const CancelBtn = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-16 right-32 flex gap-5 z-[60] hover:cursor-pointer cancel-btn"
    >
      <p className="text-white">EXIT WALK</p>
      <span className="h-7 w-7 rounded-full flex items-center justify-center text-xl">
        <FaXmark />
      </span>
    </button>
  );
};

export default CancelBtn;
