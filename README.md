<p align="center">
    <h1 align="center">
        Uniswap V2
    </h1>
    <p align="center">Core Contracts</p>
</p>


---
# Deployed contracts
|          | Mumbai                                                                                             |
|----------|----------------------------------------------------------------------------------------------------|
| Factory  | [0x226C...4915](https://mumbai.polygonscan.com/address/0x226C272649300b5225ebE86C3198c70449f64915) |
| Pair     | [0xC2Ef...03ac](https://mumbai.polygonscan.com/address/0xC2EfFFdF95F955D25B28eF276080e06e23f003ac) |
| UniToken | [0x86d3...E563](https://mumbai.polygonscan.com/address/0x86d383FB269eB31b82da97b02e15bc549356E563) |
---

## 1. installation
- node v16.17.1
- npm 8.15.0
```shell
npm install
```

## 2. environment variables
- `$ touch .env`
- or rename `.env.example` to `.env`
```bash
ALCHEMY_MUMBAI_API_KEY=
ALCHEMY_SEPOLIA_API_KEY=
PRIVATE_KEY=
```

## 3. deploying contract
```shell
# deploy Factory contract 
npx hardhat run scripts/deploy.ts --network mumbai

# deploy Pair contract
npx hardhat run scripts/deployPair.ts --network mumbai
```

## 3.1 deploying contract in local node
```shell
npx hardhat node
npx hardhat run scripts/deploy.ts
```