/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
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

export interface SAVAXDepositHelperInterface extends utils.Interface {
  contractName: "SAVAXDepositHelper";
  functions: {
    "deposit()": FunctionFragment;
    "sAVAX()": FunctionFragment;
    "sAVAXVault()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(functionFragment: "sAVAX", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sAVAXVault",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sAVAX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sAVAXVault", data: BytesLike): Result;

  events: {};
}

export interface SAVAXDepositHelper extends BaseContract {
  contractName: "SAVAXDepositHelper";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SAVAXDepositHelperInterface;

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
    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sAVAX(overrides?: CallOverrides): Promise<[string]>;

    sAVAXVault(overrides?: CallOverrides): Promise<[string]>;
  };

  deposit(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sAVAX(overrides?: CallOverrides): Promise<string>;

  sAVAXVault(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    deposit(overrides?: CallOverrides): Promise<void>;

    sAVAX(overrides?: CallOverrides): Promise<string>;

    sAVAXVault(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sAVAX(overrides?: CallOverrides): Promise<BigNumber>;

    sAVAXVault(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sAVAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sAVAXVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
