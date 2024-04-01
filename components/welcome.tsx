import { ConnectButton } from "thirdweb/react";
import Image from "next/image";
import {
  CHAIN,
  accountAbstraction,
  appMetadata,
  client,
  wallets,
} from "../utils/constants";

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full space-y-12">
      <h1 className="font-bold sm:text-6xl text-4xl leading-none text-center tracking-tight">
        Adopt A&nbsp;
        <span
          className="!bg-clip-text text-transparent"
          style={{
            background:
              "linear-gradient(73.59deg, #C339AC 42.64%, #CD4CB5 54%, #E173C7 77.46%)",
          }}
        >
          TUT
        </span>
      </h1>
      <div className="mx-auto">
        <Image
          src="/cat-attack.png"
          width={400}
          height={320}
          alt="Cat Attack"
        />
      </div>
      <div className="max-w-xs">
        <ConnectButton
          client={client}
          appMetadata={appMetadata}
          wallets={wallets}
          accountAbstraction={accountAbstraction}
          chain={CHAIN}
          connectModal={{
            size: "compact",
          }}
          connectButton={{
            label: "Start Playing",
          }}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="font-semibold">Share the game</p>
        <div className="flex gap-2 mt-3">
          <a className="border border-[#9D2889] rounded-xl leading-none h-12 w-12 flex items-center justify-center cursor-pointer">
            <Image
              src="/socials/twitter.svg"
              width={24}
              height={24}
              alt="Twitter"
            />
          </a>
          <a className="border border-[#9D2889] rounded-xl leading-none h-12 w-12 flex items-center justify-center cursor-pointer">
            <Image
              src="/socials/facebook.svg"
              width={24}
              height={24}
              alt="Facebook"
            />
          </a>
          <a className="border border-[#9D2889] rounded-xl leading-none h-12 w-12 flex items-center justify-center cursor-pointer">
            <Image
              src="/socials/instagram.svg"
              width={24}
              height={24}
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
