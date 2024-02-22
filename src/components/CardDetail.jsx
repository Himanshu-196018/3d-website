import { cardsData } from "../lib/data";

const CardDetail = ({ detailId }) => {
  const data = cardsData.find((el) => el.id === detailId);

  return (
    <section className="w-full h-screen min-h-[700px] relative">
      <div className="w-full h-auto mt-10 flex items-center justify-center">
        <p className="text-gray-400 font-extrabold sm:text-6xl md:text-9xl hidden sm:block">
          MTC CLUB
        </p>
      </div>
      <div className="w-64 h-[500px] bg-black/20 absolute right-[10%] top-[15%] p-8 rounded-2xl hidden flex-col items-center text-white md:flex">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <img src={data.src} alt={data.alt} />
        </div>
        <h3 className="mt-4 text-2xl font-bold">{data.name}</h3>
        <p className="mt-4 text-base text-center">{data.des}</p>
      </div>
    </section>
  );
};

export default CardDetail;
