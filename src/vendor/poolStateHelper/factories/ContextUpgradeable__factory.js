"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextUpgradeable__factory = void 0;

var _ethers = require("ethers");

/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
const _abi = [{
  anonymous: false,
  inputs: [{
    indexed: false,
    internalType: "uint8",
    name: "version",
    type: "uint8"
  }],
  name: "Initialized",
  type: "event"
}];

class ContextUpgradeable__factory {
  static abi = _abi;

  static createInterface() {
    return new _ethers.utils.Interface(_abi);
  }

  static connect(address, signerOrProvider) {
    return new _ethers.Contract(address, _abi, signerOrProvider);
  }

}

exports.ContextUpgradeable__factory = ContextUpgradeable__factory;