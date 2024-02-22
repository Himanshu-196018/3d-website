import { useState } from "react";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-end items-center fixed top-0 bg-transparent z-30 right-0 left-0 px-6 py-8 lg:px-16">
      {isMenuOpen && (
        <Menu
          handleClick={() => {
            setIsMenuOpen(false);
          }}
        />
      )}
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
