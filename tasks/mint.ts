import { task } from "hardhat/config";

task("mint", "mint one token")
  .addParam("player", "address")
  .addParam("uri", "token URI")
  .setAction(async ({ player, uri }: { [key: string]: string }, hre) => {
    const [signer] = await hre.ethers.getSigners();
    const instance = await hre.ethers.getContractAt(
      "JeembosFrenzy",
      process.env.CONTRACT_ADDRESS as string,
      signer
    );
    await instance.mintToken(player, uri);
  });
