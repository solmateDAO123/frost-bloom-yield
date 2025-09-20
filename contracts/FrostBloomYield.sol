// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract FrostBloomYield is SepoliaConfig {
    using FHE for *;
    
    struct YieldPool {
        euint32 poolId;
        euint32 totalStaked;
        euint32 totalRewards;
        euint32 apy;
        euint32 stakerCount;
        bool isActive;
        bool isVerified;
        string name;
        string description;
        address creator;
        uint256 startTime;
        uint256 endTime;
        address tokenAddress;
    }
    
    struct Stake {
        euint32 stakeId;
        euint32 amount;
        euint32 rewards;
        address staker;
        uint256 timestamp;
        uint256 unlockTime;
        bool isActive;
    }
    
    struct YieldCalculation {
        euint32 calculationId;
        euint32 principal;
        euint32 rate;
        euint32 time;
        euint32 result;
        bool isVerified;
        address calculator;
        uint256 timestamp;
    }
    
    mapping(uint256 => YieldPool) public pools;
    mapping(uint256 => Stake) public stakes;
    mapping(uint256 => YieldCalculation) public calculations;
    mapping(address => euint32) public userReputation;
    mapping(address => euint32) public stakingPower;
    
    uint256 public poolCounter;
    uint256 public stakeCounter;
    uint256 public calculationCounter;
    
    address public owner;
    address public verifier;
    
    event PoolCreated(uint256 indexed poolId, address indexed creator, string name);
    event StakeCreated(uint256 indexed stakeId, uint256 indexed poolId, address indexed staker, uint32 amount);
    event YieldCalculated(uint256 indexed calculationId, address indexed calculator);
    event PoolVerified(uint256 indexed poolId, bool isVerified);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createPool(
        string memory _name,
        string memory _description,
        uint256 _duration,
        address _tokenAddress
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Pool name cannot be empty");
        require(_duration > 0, "Duration must be positive");
        require(_tokenAddress != address(0), "Invalid token address");
        
        uint256 poolId = poolCounter++;
        
        pools[poolId] = YieldPool({
            poolId: FHE.asEuint32(0), // Will be set properly later
            totalStaked: FHE.asEuint32(0),
            totalRewards: FHE.asEuint32(0),
            apy: FHE.asEuint32(0), // Will be set via FHE operations
            stakerCount: FHE.asEuint32(0),
            isActive: true,
            isVerified: false,
            name: _name,
            description: _description,
            creator: msg.sender,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration,
            tokenAddress: _tokenAddress
        });
        
        emit PoolCreated(poolId, msg.sender, _name);
        return poolId;
    }
    
    function stake(
        uint256 poolId,
        externalEuint32 amount,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(pools[poolId].creator != address(0), "Pool does not exist");
        require(pools[poolId].isActive, "Pool is not active");
        require(block.timestamp <= pools[poolId].endTime, "Pool has ended");
        
        uint256 stakeId = stakeCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalAmount = FHE.fromExternal(amount, inputProof);
        
        stakes[stakeId] = Stake({
            stakeId: FHE.asEuint32(0), // Will be set properly later
            amount: internalAmount,
            rewards: FHE.asEuint32(0),
            staker: msg.sender,
            timestamp: block.timestamp,
            unlockTime: block.timestamp + 30 days, // 30 day lock period
            isActive: true
        });
        
        // Update pool totals
        pools[poolId].totalStaked = FHE.add(pools[poolId].totalStaked, internalAmount);
        pools[poolId].stakerCount = FHE.add(pools[poolId].stakerCount, FHE.asEuint32(1));
        
        emit StakeCreated(stakeId, poolId, msg.sender, 0); // Amount will be decrypted off-chain
        return stakeId;
    }
    
    function calculateYield(
        euint32 principal,
        euint32 rate,
        euint32 time
    ) public returns (uint256) {
        require(FHE.decrypt(principal) > 0, "Principal must be positive");
        require(FHE.decrypt(rate) > 0, "Rate must be positive");
        require(FHE.decrypt(time) > 0, "Time must be positive");
        
        uint256 calculationId = calculationCounter++;
        
        // Calculate yield using FHE operations
        euint32 result = FHE.mul(FHE.mul(principal, rate), time);
        result = FHE.div(result, FHE.asEuint32(10000)); // Convert to percentage
        
        calculations[calculationId] = YieldCalculation({
            calculationId: FHE.asEuint32(0), // Will be set properly later
            principal: principal,
            rate: rate,
            time: time,
            result: result,
            isVerified: false,
            calculator: msg.sender,
            timestamp: block.timestamp
        });
        
        emit YieldCalculated(calculationId, msg.sender);
        return calculationId;
    }
    
    function verifyPool(uint256 poolId, bool isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify pools");
        require(pools[poolId].creator != address(0), "Pool does not exist");
        
        pools[poolId].isVerified = isVerified;
        emit PoolVerified(poolId, isVerified);
    }
    
    function updateReputation(address user, euint32 reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(user != address(0), "Invalid user address");
        
        userReputation[user] = reputation;
        emit ReputationUpdated(user, 0); // FHE.decrypt(reputation) - will be decrypted off-chain
    }
    
    function updateStakingPower(address user, euint32 power) public {
        require(msg.sender == verifier, "Only verifier can update staking power");
        require(user != address(0), "Invalid user address");
        
        stakingPower[user] = power;
    }
    
    function getPoolInfo(uint256 poolId) public view returns (
        string memory name,
        string memory description,
        uint8 totalStaked,
        uint8 totalRewards,
        uint8 apy,
        uint8 stakerCount,
        bool isActive,
        bool isVerified,
        address creator,
        uint256 startTime,
        uint256 endTime,
        address tokenAddress
    ) {
        YieldPool storage pool = pools[poolId];
        return (
            pool.name,
            pool.description,
            0, // FHE.decrypt(pool.totalStaked) - will be decrypted off-chain
            0, // FHE.decrypt(pool.totalRewards) - will be decrypted off-chain
            0, // FHE.decrypt(pool.apy) - will be decrypted off-chain
            0, // FHE.decrypt(pool.stakerCount) - will be decrypted off-chain
            pool.isActive,
            pool.isVerified,
            pool.creator,
            pool.startTime,
            pool.endTime,
            pool.tokenAddress
        );
    }
    
    function getStakeInfo(uint256 stakeId) public view returns (
        uint8 amount,
        uint8 rewards,
        address staker,
        uint256 timestamp,
        uint256 unlockTime,
        bool isActive
    ) {
        Stake storage stake = stakes[stakeId];
        return (
            0, // FHE.decrypt(stake.amount) - will be decrypted off-chain
            0, // FHE.decrypt(stake.rewards) - will be decrypted off-chain
            stake.staker,
            stake.timestamp,
            stake.unlockTime,
            stake.isActive
        );
    }
    
    function getCalculationInfo(uint256 calculationId) public view returns (
        uint8 principal,
        uint8 rate,
        uint8 time,
        uint8 result,
        bool isVerified,
        address calculator,
        uint256 timestamp
    ) {
        YieldCalculation storage calc = calculations[calculationId];
        return (
            0, // FHE.decrypt(calc.principal) - will be decrypted off-chain
            0, // FHE.decrypt(calc.rate) - will be decrypted off-chain
            0, // FHE.decrypt(calc.time) - will be decrypted off-chain
            0, // FHE.decrypt(calc.result) - will be decrypted off-chain
            calc.isVerified,
            calc.calculator,
            calc.timestamp
        );
    }
    
    function getUserReputation(address user) public view returns (uint8) {
        return 0; // FHE.decrypt(userReputation[user]) - will be decrypted off-chain
    }
    
    function getStakingPower(address user) public view returns (uint8) {
        return 0; // FHE.decrypt(stakingPower[user]) - will be decrypted off-chain
    }
    
    function withdrawStake(uint256 stakeId) public {
        require(stakes[stakeId].staker == msg.sender, "Only staker can withdraw");
        require(stakes[stakeId].isActive, "Stake is not active");
        require(block.timestamp >= stakes[stakeId].unlockTime, "Stake is still locked");
        
        // Mark stake as inactive
        stakes[stakeId].isActive = false;
        
        // In a real implementation, tokens would be transferred back to staker
        // For now, we'll just mark the stake as withdrawn
    }
    
    function claimRewards(uint256 stakeId) public {
        require(stakes[stakeId].staker == msg.sender, "Only staker can claim");
        require(stakes[stakeId].isActive, "Stake is not active");
        
        // In a real implementation, rewards would be calculated and transferred
        // For now, we'll just reset the rewards
        stakes[stakeId].rewards = FHE.asEuint32(0);
    }
}
