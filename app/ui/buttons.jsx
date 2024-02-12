import { FaBars, FaXmark } from "react-icons/fa6";

export function MenuButton({ handleClick }) {
  return (
    <button
      className="w-[3.25rem] h-[3.25rem] text-xl rounded-full flex items-center justify-center menu-btn-style"
      onClick={handleClick}
    >
      <FaBars />
    </button>
  );
}

export function CloseButton({ handleClick }) {
  return (
    <button className="flex menu-hover-style" onClick={handleClick}>
      <p className="mr-4 text-sm text-white">CLOSE MENU</p>
      <div className="rounded-full -mt-2 w-8 h-8 text-base flex items-center justify-center">
        <FaXmark />
      </div>
    </button>
  );
}
