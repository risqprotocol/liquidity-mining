# Risq Protocol Liqidity Mining


This project is copied from [sashimiswap](https://github.com/SashimiProject/sashimiswap) and modified to work with
non-mintable tokens.

# Quickstart

## Installation

```
yarn install
```

## Run dApp

```
tarn start
```

# How it works

The `Farm` contract will distribute RISQ tokens to participants relative to the number of LP tokens deposited to the
contract. These tokens aren't minted. Instead, the contract needs to be funded.

## Creation

The address of RISQ token, the reward per block, and the starting block are specified in the constructor of the
`Farm` contract.

## Fund

The contract needs to be funded before the start block. 

To fund the contract, the `Farm` must be allowed to withdraw the amount of ERC20 using the `approve` method of RISQ
contract.

Call the `fund` method with the appropriate amount The end block is calculated as

    endBlock = startBlock + (funds / rewardPerBlock)

It's possible to add funds with the farm is running and increase the end block.
 
If the end block is reached, the farm is closed and it will no longer be possible to add funds.   

## Adding liquidity pairs

Tokens are distributes amount users that has deposited specific LP tokens. These LP tokens are distributed by the
Uniswap contract for providing liqidity. _Other LP tokens could be used as well._

Each LP token has a specific contract address.

Use the `add` method to add a liquidity pair for which the farm will pay out a reward.

It's possible to add liquidity pairs at a later time. The reward is shared over all pairs.

### AllocPoint

The `add` method takes an `allocPoint` parameter. When adding multiple pairs, this decides the portion of the reward
shared for that LP token.

**Example:** the farm is configured for 3 pairs with an `allocPoint` of resp 6, 12, 18. The
total alloc points is 36. 1/6th of the tokens is distributed under participants that deposited the pair with 6
alloc points: (`6 / 36 = 1/6`). 

It's possible to change the alloc points at a later time via the `update` method.

## Deposit and withdraw

To participate in farming, users must deposit LP tokens using the `deposit` method.

Before using this method, the farm must be allowed to withdraw the LP tokens. This is done via the `approve` method on
the LP token contract.

The current deposit can be check using the `deposited` method. 

Participants can withdraw their LP tokens at any time using the `withdraw` method.

## Reward

Each participant has a pending reward which is hold by the farm. The pending reward can be checked using the `pending`
method.

Any change to the deposit of the participant (with `deposit` or `withdraw`), will pay out the pending reward. It's
possible to do a zero withdraw to just receive the pending reward.

# Frontend

The `frontend` folder contains the frontend application that displays the pairs and allows users to participate.

 
