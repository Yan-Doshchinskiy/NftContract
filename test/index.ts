// eslint-disable-next-line node/no-missing-import
import hre, { ethers, artifacts, waffle } from "hardhat";
import { Artifact } from "hardhat/types";

describe("Token contract testing", async function () {
  before(async function () {
    this.hre = hre;
    this.zeroAddress = "0x0000000000000000000000000000000000000000";
    [this.owner, this.alice, this.bob, this.sharedWallet] =
      await ethers.getSigners();
  });
  beforeEach(async function () {
    const artifact: Artifact = await artifacts.readArtifact("TokenNFT");
    type StakingPayload = [];
    const deployPayload: StakingPayload = [];
    this.instance = await waffle.deployContract(
      this.owner,
      artifact,
      deployPayload
    );
  });
});
