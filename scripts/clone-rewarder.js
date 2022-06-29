// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const mcv2 = "0xcFc104b5f987De31f6C21856aFEbb03EfE3BB752";
const reward_per_seconds = "10000000000000000"; // 0.01
const reward_token = "0xDc9b08850CBBAb62aA13274af3F42737900342e3";  // KDX
const lpToken = "0xfCA1d4E0b28c654eFc0313CE3558DFFCd1050154"

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const CloneRewarder = await hre.ethers.getContractFactory("CloneRewarder");
  const cloneRewarder = await CloneRewarder.deploy(mcv2);

  await cloneRewarder.deployed();

  console.log("cloneRewarder Token deployed to:", cloneRewarder.address);
  const mint = await cloneRewarder.init(reward_token, reward_per_seconds, lpToken)
  console.log("Mint cloneRewarder token send to owner: ", mint.hash)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });