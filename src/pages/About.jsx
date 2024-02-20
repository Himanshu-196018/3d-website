import { useState } from "react";

const About = () => {
  const [showDetail, setShowDetail] = useState(true);

  const handleClick = () => {
    setShowDetail(!showDetail);
  };

  return (
    <section
      id="about"
      className="bg-[#666666]/20 text-white pt-10 pb-20 px-6 md:px-20"
    >
      <h2 className="text-5xl font-semibold text-center mt-10">About Us</h2>
      <div className="mt-14 w-full flex flex-col items-center justify-between lg:flex-row">
        <div className="w-full flex items-center justify-center  mb-20 lg:mb-0 lg:self-start lg:w-1/2 lg:mt-10">
          <img
            src="/images/about-img.png"
            alt="About Image"
            width={400}
            height={400}
            className="animate-up-down"
          />
        </div>

        <div className="w-full pr-0 text-center lg:text-left lg:w-1/2 lg:pr-14">
          <div className={showDetail ? "h-[500px] overflow-hidden" : "h-full"}>
            <h3 className="head-text">
              Welcome to MTC Club - Where Imagination Meets Reality in the
              Metaverse!
            </h3>
            <p className="para-text">
              At MTC Club, we believe in creating more than just a game; we are
              building an immersive metaverse that transcends boundaries,
              offering a dynamic and captivating virtual world for players to
              explore, build, and thrive. Our vision is to provide an open and
              expansive environment that mirrors the complexity and beauty of
              the real world, empowering players to shape their destinies, forge
              empires, and embark on extraordinary adventures.
            </p>
            <h3 className="head-text">Our Mission</h3>
            <h4 className="sub-head-text">Innovation and Immersion:</h4>
            <p className="para-text">
              We are committed to pushing the boundaries of what&apos;s possible
              in the virtual realm. Through cutting-edge technology and
              innovative gameplay features, we aim to deliver an unparalleled
              metaverse experience that captivates the imagination of players
              worldwide.
            </p>
            <h4 className="sub-head-text">Player-Centric Approach:</h4>
            <p className="para-text">
              At the heart of MTC Club is our dedication to our players. We
              strive to create a community-driven space where every
              player&apos;s journey is unique, and every decision matters. The
              metaverse is not just a game; it&apos;s a canvas for your
              creativity, a stage for your achievements, and a world where your
              presence shapes the narrative.
            </p>
            <h4 className="sub-head-text">
              Blockchain Integration for Trust and Ownership:
            </h4>
            <p className="para-text">
              We embrace blockchain technology to provide a secure and
              transparent environment for our players. Every virtual asset, from
              NFT characters to in-game properties, is securely recorded on the
              blockchain, ensuring true ownership, scarcity, and authenticity.
            </p>
            <h3 className="head-text">What Sets Us Apart?</h3>
            <h4 className="sub-head-text">Realism Meets Fantasy:</h4>
            <p className="para-text">
              MTC Club blends the realism of a dynamic economy, diverse
              environments, and player-driven empires with the fantasy of unique
              NFT characters, engaging quests, and a world filled with
              mysteries. Our commitment to realism creates a metaverse that
              evolves with time, just like the real world.
            </p>
            <h4 className="sub-head-text">Community at its Core:</h4>
            <p className="para-text">
              We believe in the power of community. MTC Club is more than a
              game; it&apos;s a social hub where players collaborate, compete,
              and create lasting connections. Our in-game social spaces,
              collaborative workspaces, and dynamic events foster a vibrant and
              inclusive community
            </p>
            <h4 className="sub-head-text">Endless Possibilities:</h4>
            <p className="para-text">
              Your journey in MTC Club is bound only by your imagination.
              Whether you aspire to build a business empire, lead a
              technological revolution, or embark on epic quests, the metaverse
              provides endless possibilities. Every decision you make shapes the
              course of your adventure.
            </p>
            <h3 className="sub-head-text">Join Us on the Journey!</h3>
            <p className="para-text">
              Embark on an extraordinary journey in the MTC Club metaverse.
              Discover uncharted territories, build empires, engage in thrilling
              quests, and become part of a vibrant community. The future of
              gaming is here, and it&apos;s waiting for you!
            </p>
          </div>

          <button
            className="more-btn h-12 w-36 rounded-lg mt-6"
            onClick={handleClick}
          >
            {showDetail ? "Show More" : "Show Less"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
