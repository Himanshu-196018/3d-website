const ProgressBar = ({ value }) => {
  return (
    <div className="mt-4">
      <div className="w-full h-[5px] bg-slate-400 rounded-full overflow-hidden">
        <div className={`w-[${value}%] h-[5px] bg-[#fae7a8]`} />
      </div>
    </div>
  );
};

export default ProgressBar;
