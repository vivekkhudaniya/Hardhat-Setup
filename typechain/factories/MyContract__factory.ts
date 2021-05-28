/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MyContract } from "../MyContract";

export class MyContract__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyContract> {
    return super.deploy(overrides || {}) as Promise<MyContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MyContract {
    return super.attach(address) as MyContract;
  }
  connect(signer: Signer): MyContract__factory {
    return super.connect(signer) as MyContract__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyContract {
    return new Contract(address, _abi, signerOrProvider) as MyContract;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isInitialized",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060006100216100cb60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350600180819055506100d3565b600033905090565b6107a6806100e26000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80632e64cec114610067578063392e53cd14610085578063715018a6146100a35780638da5cb5b146100ad578063f2fde38b146100cb578063fe4b84df146100e7575b600080fd5b61006f610103565b60405161007c91906106ce565b60405180910390f35b61008d61010d565b60405161009a9190610653565b60405180910390f35b6100ab610120565b005b6100b561025a565b6040516100c29190610638565b60405180910390f35b6100e560048036038101906100e091906104d3565b610283565b005b61010160048036038101906100fc91906104fc565b61042c565b005b6000600354905090565b600260009054906101000a900460ff1681565b6101286104a1565b73ffffffffffffffffffffffffffffffffffffffff1661014661025a565b73ffffffffffffffffffffffffffffffffffffffff161461019c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101939061068e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61028b6104a1565b73ffffffffffffffffffffffffffffffffffffffff166102a961025a565b73ffffffffffffffffffffffffffffffffffffffff16146102ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f69061068e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561036f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103669061066e565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600260009054906101000a900460ff161561047c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610473906106ae565b60405180910390fd5b806003819055506001600260006101000a81548160ff02191690831515021790555050565b600033905090565b6000813590506104b881610742565b92915050565b6000813590506104cd81610759565b92915050565b6000602082840312156104e557600080fd5b60006104f3848285016104a9565b91505092915050565b60006020828403121561050e57600080fd5b600061051c848285016104be565b91505092915050565b61052e816106fa565b82525050565b61053d8161070c565b82525050565b60006105506026836106e9565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006105b66020836106e9565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b60006105f66013836106e9565b91507f416c726561647920696e697469616c697a6564000000000000000000000000006000830152602082019050919050565b61063281610738565b82525050565b600060208201905061064d6000830184610525565b92915050565b60006020820190506106686000830184610534565b92915050565b6000602082019050818103600083015261068781610543565b9050919050565b600060208201905081810360008301526106a7816105a9565b9050919050565b600060208201905081810360008301526106c7816105e9565b9050919050565b60006020820190506106e36000830184610629565b92915050565b600082825260208201905092915050565b600061070582610718565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b61074b816106fa565b811461075657600080fd5b50565b61076281610738565b811461076d57600080fd5b5056fea2646970667358221220f0ad50e818dec60e8c78738a395d033855ab8fd80b5cd7d795dc386c9434a2f264736f6c63430008000033";