import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 w-full max-w-xs justify-center">
        <a
          href="https://memecoin.luvnft.com/token/0x807b24aEbB46cb98A337C23f9b26e28bC7458c27"
          target="_blank"
          className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
          rel="noreferrer"
        >
          <Image src="/icons/rocket.svg" width={12} height={12} alt="Zap" />
          <span>Buy $TUT Coins</span>
        </a>
        <a
          href="https://t.me/tutcoin"
          target="_blank"
          className="p-3 text-xs font-semibold border border-white/20 rounded flex items-center justify-center space-x-1 hover:bg-white/10 transition"
          rel="noreferrer"
        >
          <Image src="/icons/github.svg" width={12} height={12} alt="Zap" />
          <span>Join $TUT Telegram</span>
        </a>
      </div>
      <h4 className="font-semibold mt-12 mb-6">
        Made With 😻{" "}
        <a
          href="https://luvnft.com"
          target="_blank"
          className="text-blue-500 hover:no-underline"
          rel="noreferrer"
        >
          LUV NFT
        </a>
      </h4>
      <p className="font-semibold">No animals were hurt building this game.</p>
    </>
  );
};

export default Footer;
