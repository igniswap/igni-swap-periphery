var Router = artifacts.require("IgniRouter.sol");

module.exports = function(deployer) {
  // Testnet
  const factoryAddressTEST = '0xf67C1492fD15ccba695cA98aEF666caf3d6bC8FC'
  const WBNBAddressTEST = '0xae13d989dac2f0debff460ac112a837c89baa7cd'
  deployer.deploy(Router, factoryAddressTEST, WBNBAddressTEST);

  // BSC
  /*const factoryAddressTEST = '0xf67C1492fD15ccba695cA98aEF666caf3d6bC8FC'
  const WBNBAddressTEST = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
  deployer.deploy(Router, factoryAddress, WBNBAddress);*/
};
