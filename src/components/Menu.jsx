import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Menu = ({ handleClick }) => {
  return (
    <section className="w-full h-screen absolute top-0 left-0 right-0 overflow-y-auto z-20 bg-black/20">
      <div className="flex items-center justify-center">
        <div className="w-full h-screen bg-gray-900 px-8 md:rounded-[35px] md:m-10">
          <div className="flex justify-end mt-20">
            <button className="flex menu-hover-style" onClick={handleClick}>
              <p className="mr-4 text-sm text-white">CLOSE MENU</p>
              <div className="rounded-full -mt-2 w-8 h-8 text-base flex items-center justify-center">
                <FaXmark />
              </div>
            </button>
          </div>
          <div className="flex items-center justify-between mt-14">
            <nav className="flex flex-col font-bold text-6xl text-white">
              <a
                href="#"
                className="hover:text-[#fae7a8]"
                onClick={handleClick}
              >
                <p>HOME</p>
              </a>

              <a
                href="#about"
                className="hover:text-[#fae7a8]"
                onClick={handleClick}
              >
                <p>ABOUT</p>
              </a>

              <a
                href="#nft"
                className="hover:text-[#fae7a8]"
                onClick={handleClick}
              >
                <p>NFT</p>
              </a>

              <a
                href="#our-team"
                className="hover:text-[#fae7a8]"
                onClick={handleClick}
              >
                <p>OUR TEAM</p>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
