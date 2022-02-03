import { ethers } from "hardhat";

// hardhat run --network kovan scripts/deploy.ts

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Token = await ethers.getContractFactory("TokenNFT721");
  const tokenName = "Dummy Cat";
  const tokenSymbol = "DMMC";
  type ContractPayload = [string, string];
  const deployPayload: ContractPayload = [tokenName, tokenSymbol];
  const Contract = await Token.deploy(...deployPayload);
  await Contract.deployed();
  console.log("ERC721 Contract deployed to:", Contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
