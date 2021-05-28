// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MyContract2  is Ownable ,ReentrancyGuard{
    bool internal isInitialized;
    uint256 private value;
    uint256 public age;
 
  
 
    // Stores a new value in the contract.Dont change the initializer again,because its true in the logic contract storage.
    function initialize(uint256 newValue) public {
        value = newValue;
      
    }

    function initializeV1(uint256 _age)public{
        age = _age;
    }
    
    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }
    
    // Increments the stored value by 1
    function increment() public {
        value = value + 1;
       
    }
   // Decrement the stored age by 1
    function returnDecreasedAge() public {
        age = age - 1;
       
    }

    // Decrement the stored age by 1
    function getIncreaedAge() public {
        age = age + 1;
       
    }
} 






