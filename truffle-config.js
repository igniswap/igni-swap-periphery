var HDWalletProvider = require("@truffle/hdwallet-provider"); 
//const fs = require('fs');
//const mnemonic = fs.readFileSync(".secret").toString().trim();


 
var privateKey = "";
    
module.exports = {

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: '',
    bscscan: ''
  },

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    rinkeby: {
      provider: () => new HDWalletProvider(privateKey, "https://rinkeby.infura.io/v3/855dfbc784b3416d86f54e6e45605edb"),
      network_id: 4
    },
    testnet: {
      provider: () => new HDWalletProvider(privateKey, `https://data-seed-prebsc-1-s3.binance.org:8545/`),
      network_id: 97,
      confirmations: 1,
      timeoutBlocks: 1000,
      gas: 29000000,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(privateKey, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 1,
      timeoutBlocks: 200,
      gas: 29000000,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
     timeout: 1000000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 999999
       },
       evmVersion: "istanbul", 
       outputSelection: {
        "*": {
          "": [
            "ast"
          ],
          "*": [
            "evm.bytecode.object",
            "evm.deployedBytecode.object",
            "abi",
            "evm.bytecode.sourceMap",
            "evm.deployedBytecode.sourceMap",
            "metadata"
          ]
        },
      }
      }
    },
  },
  
}
