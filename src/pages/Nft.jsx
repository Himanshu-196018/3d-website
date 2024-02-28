import { useState } from "react";

const Nft = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(!showDetail);
  };

  return (
    <section className="w-full text-white px-10" id="nft">
      <div className="min-h-screen flex flex-col items-end justify-center md:items-start">
        <div className="w-1/4 md:w-1/2 lg:w-1/3">
          <div className={showDetail ? "h-full" : "h-[200px] overflow-hidden"}>
            <h3 className="head-text">3D NFT Characters:</h3>
            <h4 className="sub-head-text">Unleash Your Unique Avatar</h4>
            <p className="para-text">
              Welcome to a realm of boundless creativity and personalization
              with our exceptional 3D NFT Characters. Each character within the
              MTC Club metaverse is more than a mere avatar; it&apos;s a true
              masterpiece, carefully crafted to be a visual representation of
              your virtual identity.
            </p>
            <h4 className="sub-head-text">Aesthetic Brilliance:</h4>
            <p className="para-text">
              Immerse yourself in the sheer beauty of visually stunning 3D NFT
              characters. From intricate details to vibrant aesthetics, these
              avatars are not just a reflection but an extension of your
              creativity.
            </p>
            <h4 className="sub-head-text">Unparalleled Uniqueness:</h4>
            <p className="para-text">
              No two characters are alike. Each 3D NFT character is a unique
              creation, ensuring that your avatar stands out in the vast expanse
              of the metaverse. Express yourself with a character that is as
              distinctive as you are.
            </p>
            <h4 className="sub-head-text">Dynamic Abilities:</h4>
            <p className="para-text">
              Beyond appearances, our 3D NFT Characters come to life with unique
              abilities. Whether you&apos;re inclined towards entrepreneurship,
              exploration, or technological prowess, your chosen character is
              equipped with skills that align with your virtual journey.
            </p>
            <h4 className="sub-head-text">Captivating Backstories:</h4>
            <p className="para-text">
              Every character is more than meets the eye. Dive into captivating
              backstories that add depth to your virtual persona. Whether
              you&apos;re a daring explorer uncovering ancient mysteries or a
              visionary entrepreneur building a digital empire, the narrative
              elements enrich your gaming experience.
            </p>
            <h4 className="sub-head-text">Choose Your Path:</h4>
            <p className="para-text">
              Whether you see yourself as a futuristic entrepreneur shaping the
              virtual economy, an intrepid explorer charting unexplored
              territories, or a technological wizard pushing the boundaries of
              innovation, there&apos;s a 3D NFT character waiting to resonate
              with your aspirations.
            </p>
            <h4 className="sub-head-text">Your Avatar, Your Identity:</h4>
            <p className="para-text">
              In the MTC Club metaverse, your 3D NFT character isn&apos;t just a
              representation; it&apos;s your identity. Make a statement, forge
              alliances, and leave an indelible mark on the virtual landscape
              with an avatar that is uniquely, undeniably you.
            </p>
            <h4 className="sub-head-text">Unveil Your Avatar Now!</h4>
            <p className="para-text">
              Dive into a world where creativity knows no bounds. Choose your 3D
              NFT character today and embark on a virtual journey that reflects
              your individuality
            </p>
          </div>
          <button
            className="more-btn h-12 w-36 rounded-lg mt-6"
            onClick={handleClick}
          >
            {showDetail ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nft;
