import { useState } from "react";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center sm:px-16 px-8 py-4 mx-auto absolute top-0 bg-transparent z-10 right-0 left-0">
      {isMenuOpen && (
        <Menu
          handleClick={() => {
            setIsMenuOpen(false);
          }}
        />
      )}
      <h1 className="text-3xl font-bold">Logo</h1>
      <button
        className="w-[3.25rem] h-[3.25rem] text-xl rounded-full flex items-center justify-center menu-btn-style"
        onClick={() => setIsMenuOpen(true)}
      >
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
