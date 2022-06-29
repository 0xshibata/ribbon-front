/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface STETHDepositHelperInterface extends utils.Interface {
  contractName: "STETHDepositHelper";
  functions: {
    "curveETHSTETHPool()": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "stETH()": FunctionFragment;
    "stETHVault()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "curveETHSTETHPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stETHVault",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "curveETHSTETHPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stETHVault", data: BytesLike): Result;

  events: {};
}

export interface STETHDepositHelper extends BaseContract {
  contractName: "STETHDepositHelper";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: STETHDepositHelperInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    curveETHSTETHPool(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      minSTETHAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stETH(overrides?: CallOverrides): Promise<[string]>;

    stETHVault(overrides?: CallOverrides): Promise<[string]>;
  };

  curveETHSTETHPool(overrides?: CallOverrides): Promise<string>;

  deposit(
    minSTETHAmount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stETH(overrides?: CallOverrides): Promise<string>;

  stETHVault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    curveETHSTETHPool(overrides?: CallOverrides): Promise<string>;

    deposit(
      minSTETHAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stETH(overrides?: CallOverrides): Promise<string>;

    stETHVault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    curveETHSTETHPool(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      minSTETHAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stETH(overrides?: CallOverrides): Promise<BigNumber>;

    stETHVault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    curveETHSTETHPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      minSTETHAmount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stETHVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}