import { ethers } from 'hardhat';
import { getDatetimeString } from '../utils/timeUtils';
async function main() {
    const currentTimestampInSeconds = Math.round(Date.now());
    const contractCreatedTime = getDatetimeString(currentTimestampInSeconds)
    const UniswapV2MintToken = await ethers.getContractFactory("ERC20");
    const uniswapV2MintToken = await UniswapV2MintToken.deploy(6000000000000000);
    await uniswapV2MintToken.deployed();

    console.log(
        `${uniswapV2MintToken.address} contract is deployed at ${contractCreatedTime}`
    );
    console.log(`
 click this link if you deploy contract on Ethereum Sepolia Testnet
 https://sepolia.etherscan.io/address/${uniswapV2MintToken.address} \n
 click this link if you deploy contract on Bianace Smart Chain Testnet
 https://testnet.bscscan.com/address/${uniswapV2MintToken.address} \n
 click this link if you deploy contract on Polygon Mumbai Testnet
 https://mumbai.polygonscan.com/address/${uniswapV2MintToken.address} \n
  `)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
