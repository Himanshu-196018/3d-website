import { FaXmark } from "react-icons/fa6";
import { roadmapData } from "../lib/data";

const Roadmap = ({ handleClick }) => {
  return (
    <section className="w-full h-screen absolute top-0 left-0 right-0 bg-black/30 z-50 overflow-y-auto">
      <div className="xl:w-3/5 lg:w-3/4 w-full min-h-screen bg-[#212121] md:pl-14 md:pt-14 pl-10 pt-10 pb-20">
        <div className="w-full flex items-center justify-between pr-6 mb-14">
          <h2 className="text-normal text-white font-bold">OUR ROADMAP</h2>
          <button className="flex menu-hover-style" onClick={handleClick}>
            <p className="mr-4 text-sm text-white font-bold">CLOSE</p>
            <div className="rounded-full -mt-2 w-8 h-8 text-base flex items-center justify-center">
              <FaXmark />
            </div>
          </button>
        </div>
        <div className="mt-10 w-full lg:px-14 md:px-20 px-10 relative pt-2">
          <div className="w-4 h-4 bg-[#212121] border-2 border-[#fae7a8] absolute left-[18px] rounded-full" />
          <div className="w-[2px] h-full bg-[#fae7a8] absolute left-6 top-6" />
          {roadmapData.map((ele) => {
            return (
              <div
                key={ele.id}
                className="w-full flex justify-center flex-col mt-10 sm:pl-20 pl-6 pr-2 "
              >
                <h3 className="text-white text-3xl font-extrabold">
                  {ele.title}
                </h3>
                {ele.data.map((el) => {
                  return (
                    <div
                      key={el.id}
                      className="w-full flex items-center justify-around md:gap-5 flex-col md:flex-row my-6"
                    >
                      <img
                        src={el.src}
                        alt={el.alt}
                        height={250}
                        width={250}
                        className="md:w-64 w-96 max-h-64 rounded-xl"
                      />
                      <div className="text-white max-w-96 md:w-64 xl:w-80">
                        <h3 className="text-xl mb-4 font-bold mt-4 md:mt-0">
                          {el.heading}
                        </h3>
                        <p className="text-base">{el.text}</p>
                      </div>
                      <div className="absolute left-[21px] w-2 h-2 rounded-full border border-[#fae7a8] bg-[#212121] flex items-center justify-center">
                        <div className="w-[3px] h-[3px] bg-white rounded-full" />
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
