import { cardsData } from "../lib/data";

const CardDetail = ({ detailId }) => {
  const data = cardsData.find((el) => el.id === detailId);

  return (
    <div className="w-64 h-[470px] bg-black/20 absolute right-40 top-28 p-8 rounded-2xl hidden flex-col items-center text-white md:flex">
      <div className="w-40 h-40 rounded-full overflow-hidden">
        <img src={data.src} alt={data.alt} />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{data.name}</h3>
      <p className="mt-4 text-lg text-center">{data.des}</p>
    </div>
  );
};

export default CardDetail;
