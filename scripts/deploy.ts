import { ethers } from "hardhat";


async function main() {
  const unlockTime = Date.now();
  const convertCurrentTimestamp = new Date(unlockTime).toLocaleString();


  const [owner, ...otherAccount] = await ethers.getSigners();
  if (owner)
    console.log(
      `Contract deployed by the owner: ${owner.address} at time: ${convertCurrentTimestamp}`
    );
  else {
    for (const account in otherAccount) {
      console.log(
        `Contract deployed by the owner: ${account.address} at time: ${convertCurrentTimestamp}`
      );
    }
  }

  const DoDoToken = await ethers.getContractFactory("DoDoToken");
  const dodo = await DoDoToken.deploy(ethers.utils.parseEther("0.99"));
  const totalSupply = await dodo.totalSupply();
  // const decimals = await dodo.decimals();

  await dodo.deployed();

  console.log(
    `Supply: ${ethers.utils.parseEther(`${totalSupply}`)} DDT deployed to ${
      dodo.address
    }`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
