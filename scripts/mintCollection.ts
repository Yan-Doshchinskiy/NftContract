import { ethers } from "hardhat";
import ArrayOfUri from "../tokensURI/ArrayOfUri";

// hardhat run --network rinkeby scripts/deploy.ts
// hardhat verify --network rinkeby 0x70D3B2DaF5e75aA8e51c6ad282427E1CB115FE6A  "Dummy Cat" "DMMC" "QmeMAT5163i31Gv25SGRKZ4Hx8jYiUVyyKoxJ6V245PFWX"

async function main(): Promise<void> {
  const [signer] = await ethers.getSigners();
  const instance = await ethers.getContractAt(
    "JeembosFrenzy",
    process.env.CONTRACT_ADDRESS as string,
    signer
  );
  const mintAddress = process.env.MINT_ADDRESS as string;
  for (const item of ArrayOfUri) {
    await instance.mintToken(mintAddress, item);
  }
  console.log("Collection minted");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
