pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DoDoToken is ERC20 {
    constructor(uint256 totalSupply) ERC20("DoDoToken", "DDT") {
        _mint(msg.sender, totalSupply);
    }
}
