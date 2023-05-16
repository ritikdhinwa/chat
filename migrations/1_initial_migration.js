
  const Migrations = artifacts.require("Migrations");
  const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  //mint 1000 tokens for the deployer 
  await tokenMock.mint(
    '0x2eF3edD40911156Ca982F40B871b1c86E38a212a',
    '1000000000000000000000'
  )
};
