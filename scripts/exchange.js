// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const feeTosetter="0x0F5c21435895bB2f7044D0700281C05CbD500Dc9";
const wkai_address="0xAF984E23EAA3E7967F3C5E007fbe397D8566D23d";

async function main() {

  // Deploy Kaidex Factory
  const KaiDexFactory = await hre.ethers.getContractFactory("KaiDexFactory");
  const kaiDexFactory = await KaiDexFactory.deploy(feeTosetter);
  await kaiDexFactory.deployed();
  console.log("************ KAIDEX Factory deployed to:", kaiDexFactory.address);

  // Deploy Kaidex v3 router
  // const KaiDexRouter = await hre.ethers.getContractFactory("KaiDexRouter");
  // const kaiDexRouter = await KaiDexRouter.deploy("0x73F9bF817c535c3156F76C8A19B603262D0d2251", wkai_address);
  // await kaiDexRouter.deployed();
  // console.log("************ KAIDEX Router deployed to:", kaiDexRouter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// KAIDEX Factory deployed to: 0x2e86a834Fa0546e6Dd41Bf3666727f84A5666d01
// KAIDEX Router deployed to: 