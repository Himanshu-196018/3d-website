import { FaXmark } from "react-icons/fa6";

const Roadmap = ({ handleClick }) => {
  return (
    <section className="w-full h-screen absolute top-0 left-0 right-0 bg-black/30 z-50">
      <div className="lg:w-1/2 md:w-2/3 w-full h-screen bg-gray-800 md:pl-16 md:pt-16 pl-10 pt-10">
        <div className="w-full flex items-center justify-between pr-6 mb-14">
          <h2 className="text-normal text-white font-bold">OUR ROADMAP</h2>
          <button className="flex menu-hover-style" onClick={handleClick}>
            <p className="mr-4 text-sm text-white font-bold">CLOSE</p>
            <div className="rounded-full -mt-2 w-8 h-8 text-base flex items-center justify-center">
              <FaXmark />
            </div>
          </button>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Roadmap;
