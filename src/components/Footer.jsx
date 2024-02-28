const Footer = ({ handleClick }) => {
  return (
    <footer className="w-full min-h-[400px] mt-10 bg-gradient px-10 pb-6">
      <h2 className="text-5xl text-white font-extrabold">
        OUR <br />
        PARTNERS
      </h2>
      <div className="border-b border-white pb-14" />

      <div className="mt-12 pb-16  w-full flex items-center justify-center border-b border-gray-300 lg:flex-row flex-col">
        <div className="px-4 pb-6 lg:pb-0 text-center lg:text-left lg:w-1/2">
          <figure className="w-32 h-20 bg-white rounded-xl flex items-center justify-center">
            <img src="/images/logo.png" alt="MTC club Logo" width={100} />
          </figure>
          <p className="text-xl text-white mt-4">
            MTC club is a hoistic virtal world where impossible is nothing Get
            immersed into a world if possibilities with MTC CLUB and interact,
            buy, sell, party in a world of freedom and tranquility.
          </p>
        </div>

        <div className="w-full flex items-center justify-center lg:justify-end md:flex-row flex-col md:text-left text-center">
          <div className="footer__nav md:px-4 md:pb-5 lg:pb-0">
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

          <div className="footer__nav md:px-4 md:pb-6 lg:pb-0">
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

          <div className="footer__nav md:px-4  md:pb-6 lg:pb-0">
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
      </div>

      <div className="mt-10 flex flex-col md:flex-row font-semibold items-center justify-center">
        <p className="text-sm text-gray-400 md:mr-40 ">2024 | MTC CLUB</p>
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
