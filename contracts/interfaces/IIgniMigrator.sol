pragma solidity >=0.5.0;

interface IIgniMigrator {
    function migrate(address token, uint amountTokenMin, uint amountBNBMin, address to, uint deadline) external;
}
