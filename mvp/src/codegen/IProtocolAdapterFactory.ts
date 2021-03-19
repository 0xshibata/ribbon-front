/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IProtocolAdapter } from "./IProtocolAdapter";

export class IProtocolAdapterFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProtocolAdapter {
    return new Contract(address, _abi, signerOrProvider) as IProtocolAdapter;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "options",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "optionID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "exerciseProfit",
        type: "uint256",
      },
    ],
    name: "Exercised",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "protocolName",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "optionID",
        type: "uint256",
      },
    ],
    name: "Purchased",
    type: "event",
  },
  {
    inputs: [],
    name: "protocolName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "nonFungible",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "purchaseMethod",
    outputs: [
      {
        internalType: "enum ProtocolAdapterTypes.PurchaseMethod",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "strikeAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateralAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "enum ProtocolAdapterTypes.OptionType",
            name: "optionType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
        ],
        internalType: "struct ProtocolAdapterTypes.OptionTerms",
        name: "optionTerms",
        type: "tuple",
      },
    ],
    name: "optionsExist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "strikeAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateralAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "enum ProtocolAdapterTypes.OptionType",
            name: "optionType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
        ],
        internalType: "struct ProtocolAdapterTypes.OptionTerms",
        name: "optionTerms",
        type: "tuple",
      },
    ],
    name: "getOptionsAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "strikeAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateralAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "enum ProtocolAdapterTypes.OptionType",
            name: "optionType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
        ],
        internalType: "struct ProtocolAdapterTypes.OptionTerms",
        name: "optionTerms",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "purchaseAmount",
        type: "uint256",
      },
    ],
    name: "premium",
    outputs: [
      {
        internalType: "uint256",
        name: "cost",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "options",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "optionID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "exerciseProfit",
    outputs: [
      {
        internalType: "uint256",
        name: "profit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "options",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "optionID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "canExercise",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "strikeAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateralAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "enum ProtocolAdapterTypes.OptionType",
            name: "optionType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
        ],
        internalType: "struct ProtocolAdapterTypes.OptionTerms",
        name: "optionTerms",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "purchase",
    outputs: [
      {
        internalType: "uint256",
        name: "optionID",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "options",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "optionID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "exercise",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "strikeAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateralAsset",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "enum ProtocolAdapterTypes.OptionType",
            name: "optionType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
        ],
        internalType: "struct ProtocolAdapterTypes.OptionTerms",
        name: "optionTerms",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "createShort",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "closeShort",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
