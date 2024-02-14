const Img = ({ handleClick, id, el }) => {
  return (
    <div
      className="w-60 h-60 bg-gray-500/30 shrink-0 flex items-center justify-center hover:cursor-pointer"
      onClick={() => handleClick(id)}
    >
      {el.src ? (
        <img className="w-full h-full" src={el.src} alt={el.alt} />
      ) : (
        <p className="text-white text-xl">EMPTY</p>
      )}
    </div>
  );
};

export default Img;
