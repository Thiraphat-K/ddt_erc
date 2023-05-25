import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();
const rpcUrl = process.env.RPC_URL;
const privateKey: string = `0x${process.env.PRIVATE_KEY}`;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.18",
  },
  networks: {
    six_testnet: {
      url: rpcUrl,
      accounts: [privateKey],
    },
  },
};

export default config;
