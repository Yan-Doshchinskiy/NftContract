import { expect } from "chai";

export default (): void => {
  it(`contractURI equal to constructor argument`, async function (): Promise<void> {
    const contractURI = await this.instance.contractURI();
    expect(contractURI).to.equal(this.baseURI + this.testContractURI);
  });
};
