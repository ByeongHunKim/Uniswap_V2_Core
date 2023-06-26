import { ethers } from 'hardhat';
import { getDatetimeString } from '../utils/timeUtils';
async function main() {
    const currentTimestampInSeconds = Math.round(Date.now());
    const contractCreatedTime = getDatetimeString(currentTimestampInSeconds)
    const UniswapV2Pair = await ethers.getContractFactory("UniswapV2Pair");
    const uniswapV2Pair = await UniswapV2Pair.deploy();
    await uniswapV2Pair.deployed();

    console.log(
        `${uniswapV2Pair.address} contract is deployed at ${contractCreatedTime}`
    );
    console.log(`
 click this link if you deploy contract on Ethereum Sepolia Testnet
 https://sepolia.etherscan.io/address/${uniswapV2Pair.address} \n
 click this link if you deploy contract on Bianace Smart Chain Testnet
 https://testnet.bscscan.com/address/${uniswapV2Pair.address} \n
 click this link if you deploy contract on Polygon Mumbai Testnet
 https://mumbai.polygonscan.com/address/${uniswapV2Pair.address} \n
  `)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
