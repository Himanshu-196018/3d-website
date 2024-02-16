const About = () => {
  return (
    <section
      id="about"
      className="bg-[#666666]/20 text-white pt-10 pb-20 px-20"
    >
      <h2 className="text-5xl font-semibold text-center mt-10">About Us</h2>
      <div className="mt-14 w-full flex flex-col items-center justify-between lg:flex-row">
        <div className="h-auto w-1/2 flex items-center justify-center  mb-20 lg:mb-0">
          <img
            src="/images/about-img.png"
            alt="About Image"
            width={400}
            height={400}
            className="animate-up-down"
          />
        </div>

        <div className="w-full pr-0 text-center lg:text-left lg:w-1/2 lg:pr-14">
          <h3 className="text-xl mb-2">Who We Are</h3>
          <h3 className="text-5xl mb-10">Explore the space & ready to play.</h3>
          <p className="mb-4 text-xl">
            Meta Tech is a Financial Universe aims to support the Global
            Community and boost the well being of its’ each member. Meta Tech
            Ecosystems is fuel by its public blockchain.
            <br />
            <br />
            It is a highly performant open-source blockchain platform, built to
            support and operate safe, compliant, and predictable digital
            infrastructures.
            <br />
            <br />
            It is the most flexible and scalable blockchain platform in the
            world. It makes blockchain development simple and seamless.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
