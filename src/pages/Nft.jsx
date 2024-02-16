const nft = () => {
  return (
    <section
      className="w-full bg-black/20 text-white pt-10 pb-20 px-20"
      id="nft"
    >
      <h2 className="text-5xl font-semibold text-center mt-10">NFT</h2>
      <div className="mt-14 w-full flex flex-col items-center justify-between lg:flex-row">
        <div className="h-auto w-full md:w-1/2 flex items-center justify-center mb-20 lg:mb-0">
          <img
            src="/images/vr-girl.png"
            alt="Nft Image"
            width={400}
            height={400}
            className="animate-up-down"
          />
        </div>
        <div className="w-full pr-0 text-center lg:text-left lg:w-1/2 lg:pr-14">
          <h3 className="text-xl mb-2">Metatech NFT</h3>
          <h3 className="text-5xl mb-10">
            Diversity, Security, and Reliability All in one place
          </h3>
          <p className="mb-4 text-xl">
            NFTs are currently taking the digital art and collectibles world by
            storm. Digital artists are seeing their lives change thanks to huge
            sales to a new crypto-audience. And celebrities are joining in as
            they spot a new opportunity to connect with fans. But digital art is
            only one way to use NFTs. Really they can be used to represent
            ownership of any unique asset, like a deed for an item in the
            digital or physical realm.
            <br />
            <br />
            If Andy Warhol had been born in the late 90s, he probably would have
            minted Campbell's Soup as an NFT. It's only a matter of time before
            Nike puts a run of Jordans on Ethereum. And one day owning your car
            might be proved with an NFT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default nft;
