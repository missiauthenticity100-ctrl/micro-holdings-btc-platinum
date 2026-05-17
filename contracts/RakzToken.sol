// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RakzToken is ERC20 {
    constructor() ERC20("Rakz Token", "RAKZ") {
        _mint(msg.sender, 21_000_000 * 10**18);
    }
}
