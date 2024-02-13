import { FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Menu = ({ handleClick }) => {
  return (
    <section className="w-full h-screen absolute top-0 left-0 right-0 overflow-y-auto z-20 bg-black/20">
      <div className="flex items-center justify-center">
        <div className="w-full h-screen bg-gray-900 px-8 md:rounded-[35px] md:m-10">
          <div className="flex justify-between mt-20">
            <h2 className="text-3xl font-bold text-white">Logo</h2>
            <button className="flex menu-hover-style" onClick={handleClick}>
              <p className="mr-4 text-sm text-white">CLOSE MENU</p>
              <div className="rounded-full -mt-2 w-8 h-8 text-base flex items-center justify-center">
                <FaXmark />
              </div>
            </button>
          </div>
          <div className="flex items-center justify-between mt-14">
            <nav className="flex flex-col font-bold text-6xl text-white">
              <NavLink
                to="/"
                className="hover:text-[#fae7a8]"
                onClick={handleClick}
              >
                <p>HOME</p>
              </NavLink>

              <NavLink
                to="/about"
                className="hover:text-[#fae7a8]"
                onClick={handleClick}
              >
                <p>ABOUT</p>
              </NavLink>

              <NavLink
                to="/ourteam"
                className="hover:text-[#fae7a8]"
                onClick={handleClick}
              >
                <p>OUR TEAM</p>
              </NavLink>

              <NavLink
                to="/press"
                className="hover:text-[#fae7a8]"
                onClick={handleClick}
              >
                <p>PRESS</p>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
