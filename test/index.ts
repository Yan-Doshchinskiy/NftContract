// eslint-disable-next-line node/no-missing-import
import hre, { ethers, artifacts, waffle } from "hardhat";
import { Artifact } from "hardhat/types";
import mintFunctions from "./mintFunctions";
import viewFunctions from "./viewFunctions";

describe("Token contract testing", async function () {
  before(async function () {
    this.hre = hre;
    this.tokenName = "Dummy Cat";
    this.tokenSymbol = "DMMC";
    this.zeroAddress = "0x0000000000000000000000000000000000000000";
    this.testMetaData =
      "bafkreidrksef6qd2b7dvwdqryhopkqc5wldops7q3kurqkbonjhgjmtc6i";
    [this.owner, this.alice, this.bob, this.sharedWallet] =
      await ethers.getSigners();
  });
  beforeEach(async function () {
    const artifact: Artifact = await artifacts.readArtifact("TokenNFT721");
    type ContractPayload = [string, string];
    const deployPayload: ContractPayload = [this.tokenName, this.tokenSymbol];
    this.instance = await waffle.deployContract(
      this.owner,
      artifact,
      deployPayload
    );
  });
  mintFunctions();
  viewFunctions();
});
