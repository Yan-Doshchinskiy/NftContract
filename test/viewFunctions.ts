import { expect } from "chai";

export default (): void => {
  it(`Name equal to constructor argument`, async function (): Promise<void> {
    const name = await this.instance.name();
    expect(name).to.equal(this.tokenName);
  });
  it(`Symbol equal to constructor argument`, async function (): Promise<void> {
    const symbol = await this.instance.symbol();
    expect(symbol).to.equal(this.tokenSymbol);
  });
  it("BASE URI was changed correctly", async function (): Promise<void> {
    const baseURI = await this.instance.getBaseURI();
    expect(baseURI).to.equal("ipfs://");
  });
};
