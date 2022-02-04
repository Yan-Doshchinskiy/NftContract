// eslint-disable-next-line node/no-missing-import
import hre, { ethers, artifacts, waffle } from "hardhat";
import { Artifact } from "hardhat/types";
import mintFunctions from "./mintFunctions";
import viewFunctions from "./viewFunctions";
import uriFunctions from "./uriFunctions";

describe("Token contract testing", async function () {
  before(async function () {
    this.hre = hre;
    this.tokenName = "Jeembo Cat";
    this.tokenSymbol = "JFR";
    this.baseURI = "https://gateway.pinata.cloud/ipfs/";
    this.testContractURI = "QmeMAT5163i31Gv25SGRKZ4Hx8jYiUVyyKoxJ6V245PFWX";
    this.testSupplyLimit = 15;
    this.zeroAddress = "0x0000000000000000000000000000000000000000";
    this.testMetaData =
      "bafkreidrksef6qd2b7dvwdqryhopkqc5wldops7q3kurqkbonjhgjmtc6i";
    [this.owner, this.alice, this.bob, this.sharedWallet] =
      await ethers.getSigners();
  });
  beforeEach(async function () {
    const artifact: Artifact = await artifacts.readArtifact("JeembosFrenzy");
    type ContractPayload = [string, string, string, number];
    const deployPayload: ContractPayload = [
      this.tokenName,
      this.tokenSymbol,
      this.testContractURI,
      this.testSupplyLimit,
    ];
    this.instance = await waffle.deployContract(
      this.owner,
      artifact,
      deployPayload
    );
  });
  mintFunctions();
  viewFunctions();
  uriFunctions();
});
