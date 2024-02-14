import Img from "./Img";
// import ProgressBar from "./ProgressBar";

const Footer = ({ handleClick }) => {
  const img = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <footer className="w-full min-h-[400px] absolute bottom-0 right-0 left-0 bg-gradient px-10 pb-10">
      <h2 className="text-5xl text-white font-extrabold">
        OUR <br />
        PARTNERS
      </h2>
      <div className="flex gap-4 overflow-x-auto mt-6 hide-scroll">
        {img.map((el) => (
          <Img key={el} id={el} handleClick={handleClick} />
        ))}
      </div>

      {/* <ProgressBar value={40} /> */}
      <div className="mt-20  flex justify-center md:justify-between border-b-[0.5px] border-gray-300">
        <div className="hidden md:block">
          <p className="text-white text-2xl font-extrabold">
            Lorem ipsum dolor <br /> consectetur adipisicing
          </p>
          <span className="text-md text-gray-400 font-semibold mt-4">
            Sir Abcde Fghij
          </span>
        </div>

        <div className="flex pb-10 flex-col md:flex-row">
          <p className="text-white text-2xl font-extrabold mr-20">
            Connect
            <br />
            with
            <br />
            us
          </p>

          <nav className="footer__nav flex flex-col text-md font-semibold md:flex-row">
            <ul className="md:mr-20">
              <li>
                <a href="#" target="_blank" rel="noopener noreferre">
                  <span>Lorem Ipsum</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferre">
                  <span>Lorem Ipsum</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferre">
                  <span>Lorem Ipsum</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferre">
                  <span>Lorem Ipsum</span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" target="_blank" rel="noopener noreferre">
                  <span>Lorem Ipsum</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span>Lorem Ipsum</span>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span>Lorem Ipsum</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row font-semibold items-center justify-center">
        <p className="text-sm text-gray-400 md:mr-40 ">2024 | Lorem</p>
        <p className="text-sm text-gray-400">
          STYLED BY{" "}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fae7a8]"
          >
            @ORIGINAL
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
