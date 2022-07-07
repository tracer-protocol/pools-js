"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERC1967UpgradeUpgradeable__factory = void 0;

var _ethers = require("ethers");

/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
const _abi = [{
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "address",
    name: "previousAdmin",
    type: "address"
  }, {
    indexed: false,
    internalType: "address",
    name: "newAdmin",
    type: "address"
  }],
  name: "AdminChanged",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "beacon",
    type: "address"
  }],
  name: "BeaconUpgraded",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "uint8",
    name: "version",
    type: "uint8"
  }],
  name: "Initialized",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "implementation",
    type: "address"
  }],
  name: "Upgraded",
  type: "event"
}];

class ERC1967UpgradeUpgradeable__factory {
  static abi = _abi;

  static createInterface() {
    return new _ethers.utils.Interface(_abi);
  }

  static connect(address, signerOrProvider) {
    return new _ethers.Contract(address, _abi, signerOrProvider);
  }

}

exports.ERC1967UpgradeUpgradeable__factory = ERC1967UpgradeUpgradeable__factory;