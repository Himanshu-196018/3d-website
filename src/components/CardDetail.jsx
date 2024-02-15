import { cardsData } from "../lib/data";
import { TiShoppingCart } from "react-icons/ti";

const CardDetail = ({ detailId }) => {
  const data = cardsData.find((el) => el.id === detailId);

  return (
    <div className="w-64 h-[470px] bg-black/20 absolute right-40 top-28 p-8 rounded-2xl flex flex-col items-center text-white ">
      <div className="w-40 h-40 rounded-full overflow-hidden">
        <img src={data.src} alt={data.alt} />
      </div>
      <h3 className="mt-4 text-xl font-semibold">{data.name}</h3>
      <p className="mt-4 text-lg text-center">{data.des}</p>
      <button className="mt-8 w-28 h-10 bg-white rounded-full text-black text-xl px-4 flex justify-center items-center gap-2 hover:bg-neutral-700 hover:text-white">
        <TiShoppingCart className="text-2xl" />
        <p className="font-bold">{data.price}</p>
      </button>
    </div>
  );
};

export default CardDetail;
