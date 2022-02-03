import { expect } from "chai";

export default (): void => {
  it("Initial owner balance equal to zero", async function (): Promise<void> {
    const initialBalance = await this.instance.balanceOf(this.owner.address);
    expect(initialBalance).to.equal("0");
  });
  it("Owner balance after mint equal to 1", async function (): Promise<void> {
    await this.instance.mintToken(this.owner.address, this.testMetaData);
    const balanceAfterMint = await this.instance.balanceOf(this.owner.address);
    expect(balanceAfterMint).to.equal("1");
  });
  it("TOKEN URI equal to test Meta Data", async function (): Promise<void> {
    await this.instance.mintToken(this.owner.address, this.testMetaData);
    const uri = await this.instance.tokenURI("1");
    const baseURI = await this.instance.getBaseURI();
    expect(uri).to.equal(`${baseURI}${this.testMetaData}`);
  });
};
