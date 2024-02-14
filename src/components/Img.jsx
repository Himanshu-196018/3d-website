const Img = ({ handleClick, id }) => {
  return (
    <div
      className="w-60 h-60 bg-gray-500/30 shrink-0 flex items-center justify-center"
      onClick={() => handleClick(id)}
    >
      <p className="text-white text-xl">EMPTY</p>
    </div>
  );
};

export default Img;
