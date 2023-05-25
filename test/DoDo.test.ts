import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { DoDoToken, DoDoToken__factory } from "../typechain-types";

describe("DoDoToken", function () {
  let dodoToken: DoDoToken;
  let dodoTokenFactory: DoDoToken__factory;

  describe("Deployment", () => {
    let deployer: Signer;
    beforeEach(async () => {
      [deployer] = await ethers.getSigners();
      dodoTokenFactory = new DoDoToken__factory(deployer);
      dodoToken = await dodoTokenFactory.deploy(999);
      await dodoToken.deployed();
    });

    it("should have the correct name", async () => {
      expect(await dodoToken.name()).to.equal("DoDoToken");
    });

    it("should have the correct symbol", async () => {
      expect(await dodoToken.symbol()).to.equal("DDT");
    });

    it("should have the correct total supply", async () => {
      expect(await dodoToken.totalSupply()).to.equal(999);
    });
  });
});
