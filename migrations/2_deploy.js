var Router = artifacts.require("IgniRouter.sol");

module.exports = function(deployer) {
  // Testnet
  
  const factoryAddressTEST = '0x5f76c63aAcA37ABDBcbFF0Ce67A1b8560ACDcbE7'
  const WBNBAddressTES = '0xae13d989dac2f0debff460ac112a837c89baa7cd'
  deployer.deploy(Router, factoryAddressTEST, WBNBAddressTES);
  
/*
  // BSC
  const factoryAddress = '0x5f76c63aAcA37ABDBcbFF0Ce67A1b8560ACDcbE7'
  const WBNBAddress = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  deployer.deploy(Router, factoryAddress, WBNBAddress);*/
};


