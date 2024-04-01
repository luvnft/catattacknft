import { createThirdwebClient, getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { embeddedWallet } from "thirdweb/wallets";

export const appMetadata = {
  name: "TUT",
  url: "https://tut.luvnft.com",
};

export const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "";
export const CHAIN = baseSepolia;
export const CONTRACT_ADDR = "0x5cA3b8E5B82D826aF6E8e9BA9E4E8f95cbC177F4";
export const FACTORY_ADDR = "0x7b5ba9D46b53aae55e2c2E9b38d9AfF9a0b158F8";

export const client = createThirdwebClient({ clientId: CLIENT_ID });
export const contract = getContract({
  client,
  address: CONTRACT_ADDR,
  chain: CHAIN,
});

export const accountAbstraction = {
  chain: CHAIN,
  factoryAddress: FACTORY_ADDR,
  gasless: true,
};

export const wallets = [embeddedWallet()];
