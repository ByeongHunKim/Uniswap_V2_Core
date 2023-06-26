import { ethers } from 'hardhat';
import { getDatetimeString } from '../utils/timeUtils';
async function main() {
  const currentTimestampInSeconds = Math.round(Date.now());
  const contractCreatedTime = getDatetimeString(currentTimestampInSeconds)
  const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
  const uniswapV2Factory = await UniswapV2Factory.deploy('0x4d0C2bE9448Dc7528F097FC58Be37c188E91EB5C');
  await uniswapV2Factory.deployed();

  console.log(
    `${uniswapV2Factory.address} contract is deployed at ${contractCreatedTime}`
  );
  console.log(`
 click this link if you deploy contract on Ethereum Sepolia Testnet
 https://sepolia.etherscan.io/address/${uniswapV2Factory.address} \n
 click this link if you deploy contract on Bianace Smart Chain Testnet
 https://testnet.bscscan.com/address/${uniswapV2Factory.address} \n
 click this link if you deploy contract on Polygon Mumbai Testnet
 https://mumbai.polygonscan.com/address/${uniswapV2Factory.address} \n
  `)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
