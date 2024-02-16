import Img from "./Img";
import { cardsData } from "../lib/data";

const Footer = ({ handleClick }) => {
  return (
    <footer className="w-full min-h-[400px] mt-10 bg-gradient px-10 pb-10">
      <h2 className="text-5xl text-white font-extrabold">
        OUR <br />
        PARTNERS
      </h2>
      <div className="flex gap-4 overflow-x-auto mt-6 hide-scroll">
        {cardsData.map((el) => (
          <Img key={el.id} id={el.id} el={el} handleClick={handleClick} />
        ))}
      </div>

      <div className="mt-20 pb-20  w-full grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4 border-b-[0.5px] border-gray-300">
        <div className="px-4 pb-6 lg:pb-0">
          <h2 className="font-extrabold text-4xl text-blue-700">
            MetaTech <br />
            Coin
          </h2>
          <p className="text-xl text-white mt-4">
            Metatech is a hoistic virtal world where impossible is nothing Get
            immersed into a world if possibilities with METATECH and interact,
            buy, sell, party in a world of freedom and tranquility.
          </p>
        </div>

        <div className="footer__nav px-4 pb-5 lg:pb-0">
          <h3 className="text-white text-2xl font-bold mb-5">Quick Links</h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>Exchange</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>Metaverse</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>NFT</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>MTC NFT Marketplace</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>Docs</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__nav px-4  pb-6 lg:pb-0">
          <h3 className="text-white text-2xl font-bold mb-5">MTC Network</h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>MTC Explorer</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>MTC Scan</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>MTC Wallet</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>MTC Bot</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__nav px-4  pb-6 lg:pb-0">
          <h3 className="text-white text-2xl font-bold mb-5">Developers</h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>Get started</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>Developer Funding</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>Documentation</span>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferre">
                <span>Tutorials</span>
              </a>
            </li>
          </ul>
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
