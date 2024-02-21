import { FaXmark } from "react-icons/fa6";
import { roadmapData } from "../lib/data";

const Roadmap = ({ handleClick }) => {
  return (
    <section className="w-full h-screen absolute top-0 left-0 right-0 bg-black/30 z-50 overflow-scroll">
      <div className="xl:w-1/2 lg:w-3/4 w-full min-h-screen bg-[#212121] md:pl-14 md:pt-14 pl-10 pt-10 pb-20">
        <div className="w-full flex items-center justify-between pr-6 mb-14">
          <h2 className="text-normal text-white font-bold">OUR ROADMAP</h2>
          <button className="flex menu-hover-style" onClick={handleClick}>
            <p className="mr-4 text-sm text-white font-bold">CLOSE</p>
            <div className="rounded-full -mt-2 w-8 h-8 text-base flex items-center justify-center">
              <FaXmark />
            </div>
          </button>
        </div>
        <div className="mt-10 w-full lg:px-14 md:px-20 px-10 relative">
          <div className="w-[2px] h-full bg-[#fae7a8] absolute left-6" />
          {roadmapData.map((el) => {
            return (
              <div
                key={el.id}
                className="w-full flex items-center justify-around md:gap-5 flex-col md:flex-row pl-6 mt-10"
              >
                <img
                  src={el.src}
                  alt={el.alt}
                  height={250}
                  width={250}
                  className="md:w-64 w-96"
                />
                <div className="text-white max-w-96 md:w-64">
                  <h3 className="text-xl mb-4 font-bold">{el.heading}</h3>
                  <p className="m-0 text-base">{el.text}</p>
                </div>
                <div className="absolute left-5 w-[9px] h-[9px] rounded-full border border-[#fae7a8] bg-[#212121] flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
