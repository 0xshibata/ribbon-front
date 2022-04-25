/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface FeeDistributorInterface extends ethers.utils.Interface {
  functions: {
    "checkpoint_token()": FunctionFragment;
    "ve_for_at(address,uint256)": FunctionFragment;
    "checkpoint_total_supply()": FunctionFragment;
    "claim()": FunctionFragment;
    "claim_many(address[20])": FunctionFragment;
    "burn(address,uint256)": FunctionFragment;
    "commit_admin(address)": FunctionFragment;
    "apply_admin()": FunctionFragment;
    "toggle_allow_checkpoint_token()": FunctionFragment;
    "kill_me()": FunctionFragment;
    "recover_balance(address)": FunctionFragment;
    "start_time()": FunctionFragment;
    "time_cursor()": FunctionFragment;
    "time_cursor_of(address)": FunctionFragment;
    "user_epoch_of(address)": FunctionFragment;
    "last_token_time()": FunctionFragment;
    "tokens_per_week(uint256)": FunctionFragment;
    "voting_escrow()": FunctionFragment;
    "verbn_penalty_rewards()": FunctionFragment;
    "token()": FunctionFragment;
    "total_received()": FunctionFragment;
    "token_last_balance()": FunctionFragment;
    "ve_supply(uint256)": FunctionFragment;
    "admin()": FunctionFragment;
    "future_admin()": FunctionFragment;
    "can_checkpoint_token()": FunctionFragment;
    "emergency_return()": FunctionFragment;
    "is_killed()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "checkpoint_token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ve_for_at",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkpoint_total_supply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claim_many",
    values: [
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "commit_admin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "apply_admin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "toggle_allow_checkpoint_token",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kill_me", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recover_balance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "start_time",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "time_cursor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "time_cursor_of",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "user_epoch_of",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "last_token_time",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokens_per_week",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "voting_escrow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verbn_penalty_rewards",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "total_received",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "token_last_balance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ve_supply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "future_admin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "can_checkpoint_token",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergency_return",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "is_killed", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "checkpoint_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ve_for_at", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkpoint_total_supply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim_many", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "commit_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "apply_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggle_allow_checkpoint_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kill_me", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recover_balance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "start_time", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "time_cursor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "time_cursor_of",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "user_epoch_of",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "last_token_time",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokens_per_week",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "voting_escrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verbn_penalty_rewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "total_received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "token_last_balance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ve_supply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "future_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "can_checkpoint_token",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergency_return",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "is_killed", data: BytesLike): Result;

  events: {
    "CommitAdmin(address)": EventFragment;
    "ApplyAdmin(address)": EventFragment;
    "ToggleAllowCheckpointToken(bool)": EventFragment;
    "CheckpointToken(uint256,uint256)": EventFragment;
    "Claimed(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CommitAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ApplyAdmin"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ToggleAllowCheckpointToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CheckpointToken"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
}

export class FeeDistributor extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FeeDistributorInterface;

  functions: {
    checkpoint_token(overrides?: Overrides): Promise<ContractTransaction>;

    "checkpoint_token()"(overrides?: Overrides): Promise<ContractTransaction>;

    ve_for_at(
      _user: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "ve_for_at(address,uint256)"(
      _user: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    checkpoint_total_supply(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "checkpoint_total_supply()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

    "claim(address)"(
      _addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim(address,bool)"(
      _addr: string,
      _claimPRewards: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim(address,bool,bool)"(
      _addr: string,
      _claimPRewards: boolean,
      _lock: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claim_many(
      _receivers: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim_many(address[20])"(
      _receivers: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    burn(
      _coin: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(address,uint256)"(
      _coin: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    commit_admin(
      _addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "commit_admin(address)"(
      _addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    apply_admin(overrides?: Overrides): Promise<ContractTransaction>;

    "apply_admin()"(overrides?: Overrides): Promise<ContractTransaction>;

    toggle_allow_checkpoint_token(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "toggle_allow_checkpoint_token()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    kill_me(overrides?: Overrides): Promise<ContractTransaction>;

    "kill_me()"(overrides?: Overrides): Promise<ContractTransaction>;

    recover_balance(
      _coin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "recover_balance(address)"(
      _coin: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    start_time(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "start_time()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    time_cursor(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "time_cursor()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    time_cursor_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "time_cursor_of(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    user_epoch_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "user_epoch_of(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    last_token_time(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "last_token_time()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    tokens_per_week(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "tokens_per_week(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    voting_escrow(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "voting_escrow()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    verbn_penalty_rewards(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "verbn_penalty_rewards()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    token(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "token()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    total_received(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "total_received()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    token_last_balance(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "token_last_balance()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    ve_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "ve_supply(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    admin(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "admin()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    future_admin(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "future_admin()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    can_checkpoint_token(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "can_checkpoint_token()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    emergency_return(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "emergency_return()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    is_killed(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;

    "is_killed()"(overrides?: CallOverrides): Promise<{
      0: boolean;
    }>;
  };

  checkpoint_token(overrides?: Overrides): Promise<ContractTransaction>;

  "checkpoint_token()"(overrides?: Overrides): Promise<ContractTransaction>;

  ve_for_at(
    _user: string,
    _timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "ve_for_at(address,uint256)"(
    _user: string,
    _timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  checkpoint_total_supply(overrides?: Overrides): Promise<ContractTransaction>;

  "checkpoint_total_supply()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim()"(overrides?: Overrides): Promise<ContractTransaction>;

  "claim(address)"(
    _addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim(address,bool)"(
    _addr: string,
    _claimPRewards: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim(address,bool,bool)"(
    _addr: string,
    _claimPRewards: boolean,
    _lock: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claim_many(
    _receivers: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim_many(address[20])"(
    _receivers: [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  burn(
    _coin: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(address,uint256)"(
    _coin: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  commit_admin(
    _addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "commit_admin(address)"(
    _addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  apply_admin(overrides?: Overrides): Promise<ContractTransaction>;

  "apply_admin()"(overrides?: Overrides): Promise<ContractTransaction>;

  toggle_allow_checkpoint_token(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "toggle_allow_checkpoint_token()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  kill_me(overrides?: Overrides): Promise<ContractTransaction>;

  "kill_me()"(overrides?: Overrides): Promise<ContractTransaction>;

  recover_balance(
    _coin: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "recover_balance(address)"(
    _coin: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  start_time(overrides?: CallOverrides): Promise<BigNumber>;

  "start_time()"(overrides?: CallOverrides): Promise<BigNumber>;

  time_cursor(overrides?: CallOverrides): Promise<BigNumber>;

  "time_cursor()"(overrides?: CallOverrides): Promise<BigNumber>;

  time_cursor_of(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "time_cursor_of(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  user_epoch_of(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "user_epoch_of(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  last_token_time(overrides?: CallOverrides): Promise<BigNumber>;

  "last_token_time()"(overrides?: CallOverrides): Promise<BigNumber>;

  tokens_per_week(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tokens_per_week(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  voting_escrow(overrides?: CallOverrides): Promise<string>;

  "voting_escrow()"(overrides?: CallOverrides): Promise<string>;

  verbn_penalty_rewards(overrides?: CallOverrides): Promise<string>;

  "verbn_penalty_rewards()"(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  total_received(overrides?: CallOverrides): Promise<BigNumber>;

  "total_received()"(overrides?: CallOverrides): Promise<BigNumber>;

  token_last_balance(overrides?: CallOverrides): Promise<BigNumber>;

  "token_last_balance()"(overrides?: CallOverrides): Promise<BigNumber>;

  ve_supply(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "ve_supply(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  admin(overrides?: CallOverrides): Promise<string>;

  "admin()"(overrides?: CallOverrides): Promise<string>;

  future_admin(overrides?: CallOverrides): Promise<string>;

  "future_admin()"(overrides?: CallOverrides): Promise<string>;

  can_checkpoint_token(overrides?: CallOverrides): Promise<boolean>;

  "can_checkpoint_token()"(overrides?: CallOverrides): Promise<boolean>;

  emergency_return(overrides?: CallOverrides): Promise<string>;

  "emergency_return()"(overrides?: CallOverrides): Promise<string>;

  is_killed(overrides?: CallOverrides): Promise<boolean>;

  "is_killed()"(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    checkpoint_token(overrides?: CallOverrides): Promise<void>;

    "checkpoint_token()"(overrides?: CallOverrides): Promise<void>;

    ve_for_at(
      _user: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ve_for_at(address,uint256)"(
      _user: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkpoint_total_supply(overrides?: CallOverrides): Promise<void>;

    "checkpoint_total_supply()"(overrides?: CallOverrides): Promise<void>;

    "claim()"(overrides?: CallOverrides): Promise<BigNumber>;

    "claim(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claim(address,bool)"(
      _addr: string,
      _claimPRewards: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claim(address,bool,bool)"(
      _addr: string,
      _claimPRewards: boolean,
      _lock: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim_many(
      _receivers: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "claim_many(address[20])"(
      _receivers: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: CallOverrides
    ): Promise<boolean>;

    burn(
      _coin: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "burn(address,uint256)"(
      _coin: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    commit_admin(_addr: string, overrides?: CallOverrides): Promise<void>;

    "commit_admin(address)"(
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    apply_admin(overrides?: CallOverrides): Promise<void>;

    "apply_admin()"(overrides?: CallOverrides): Promise<void>;

    toggle_allow_checkpoint_token(overrides?: CallOverrides): Promise<void>;

    "toggle_allow_checkpoint_token()"(overrides?: CallOverrides): Promise<void>;

    kill_me(overrides?: CallOverrides): Promise<void>;

    "kill_me()"(overrides?: CallOverrides): Promise<void>;

    recover_balance(_coin: string, overrides?: CallOverrides): Promise<boolean>;

    "recover_balance(address)"(
      _coin: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    start_time(overrides?: CallOverrides): Promise<BigNumber>;

    "start_time()"(overrides?: CallOverrides): Promise<BigNumber>;

    time_cursor(overrides?: CallOverrides): Promise<BigNumber>;

    "time_cursor()"(overrides?: CallOverrides): Promise<BigNumber>;

    time_cursor_of(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "time_cursor_of(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    user_epoch_of(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "user_epoch_of(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    last_token_time(overrides?: CallOverrides): Promise<BigNumber>;

    "last_token_time()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokens_per_week(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokens_per_week(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voting_escrow(overrides?: CallOverrides): Promise<string>;

    "voting_escrow()"(overrides?: CallOverrides): Promise<string>;

    verbn_penalty_rewards(overrides?: CallOverrides): Promise<string>;

    "verbn_penalty_rewards()"(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    total_received(overrides?: CallOverrides): Promise<BigNumber>;

    "total_received()"(overrides?: CallOverrides): Promise<BigNumber>;

    token_last_balance(overrides?: CallOverrides): Promise<BigNumber>;

    "token_last_balance()"(overrides?: CallOverrides): Promise<BigNumber>;

    ve_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ve_supply(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<string>;

    "admin()"(overrides?: CallOverrides): Promise<string>;

    future_admin(overrides?: CallOverrides): Promise<string>;

    "future_admin()"(overrides?: CallOverrides): Promise<string>;

    can_checkpoint_token(overrides?: CallOverrides): Promise<boolean>;

    "can_checkpoint_token()"(overrides?: CallOverrides): Promise<boolean>;

    emergency_return(overrides?: CallOverrides): Promise<string>;

    "emergency_return()"(overrides?: CallOverrides): Promise<string>;

    is_killed(overrides?: CallOverrides): Promise<boolean>;

    "is_killed()"(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    CommitAdmin(admin: null): EventFilter;

    ApplyAdmin(admin: null): EventFilter;

    ToggleAllowCheckpointToken(toggle_flag: null): EventFilter;

    CheckpointToken(time: null, tokens: null): EventFilter;

    Claimed(
      recipient: string | null,
      amount: null,
      claim_epoch: null,
      max_epoch: null
    ): EventFilter;
  };

  estimateGas: {
    checkpoint_token(overrides?: Overrides): Promise<BigNumber>;

    "checkpoint_token()"(overrides?: Overrides): Promise<BigNumber>;

    ve_for_at(
      _user: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ve_for_at(address,uint256)"(
      _user: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkpoint_total_supply(overrides?: Overrides): Promise<BigNumber>;

    "checkpoint_total_supply()"(overrides?: Overrides): Promise<BigNumber>;

    "claim()"(overrides?: Overrides): Promise<BigNumber>;

    "claim(address)"(_addr: string, overrides?: Overrides): Promise<BigNumber>;

    "claim(address,bool)"(
      _addr: string,
      _claimPRewards: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claim(address,bool,bool)"(
      _addr: string,
      _claimPRewards: boolean,
      _lock: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    claim_many(
      _receivers: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claim_many(address[20])"(
      _receivers: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<BigNumber>;

    burn(
      _coin: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burn(address,uint256)"(
      _coin: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    commit_admin(_addr: string, overrides?: Overrides): Promise<BigNumber>;

    "commit_admin(address)"(
      _addr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    apply_admin(overrides?: Overrides): Promise<BigNumber>;

    "apply_admin()"(overrides?: Overrides): Promise<BigNumber>;

    toggle_allow_checkpoint_token(overrides?: Overrides): Promise<BigNumber>;

    "toggle_allow_checkpoint_token()"(
      overrides?: Overrides
    ): Promise<BigNumber>;

    kill_me(overrides?: Overrides): Promise<BigNumber>;

    "kill_me()"(overrides?: Overrides): Promise<BigNumber>;

    recover_balance(_coin: string, overrides?: Overrides): Promise<BigNumber>;

    "recover_balance(address)"(
      _coin: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    start_time(overrides?: CallOverrides): Promise<BigNumber>;

    "start_time()"(overrides?: CallOverrides): Promise<BigNumber>;

    time_cursor(overrides?: CallOverrides): Promise<BigNumber>;

    "time_cursor()"(overrides?: CallOverrides): Promise<BigNumber>;

    time_cursor_of(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "time_cursor_of(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    user_epoch_of(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "user_epoch_of(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    last_token_time(overrides?: CallOverrides): Promise<BigNumber>;

    "last_token_time()"(overrides?: CallOverrides): Promise<BigNumber>;

    tokens_per_week(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokens_per_week(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    voting_escrow(overrides?: CallOverrides): Promise<BigNumber>;

    "voting_escrow()"(overrides?: CallOverrides): Promise<BigNumber>;

    verbn_penalty_rewards(overrides?: CallOverrides): Promise<BigNumber>;

    "verbn_penalty_rewards()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    total_received(overrides?: CallOverrides): Promise<BigNumber>;

    "total_received()"(overrides?: CallOverrides): Promise<BigNumber>;

    token_last_balance(overrides?: CallOverrides): Promise<BigNumber>;

    "token_last_balance()"(overrides?: CallOverrides): Promise<BigNumber>;

    ve_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ve_supply(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    "admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    future_admin(overrides?: CallOverrides): Promise<BigNumber>;

    "future_admin()"(overrides?: CallOverrides): Promise<BigNumber>;

    can_checkpoint_token(overrides?: CallOverrides): Promise<BigNumber>;

    "can_checkpoint_token()"(overrides?: CallOverrides): Promise<BigNumber>;

    emergency_return(overrides?: CallOverrides): Promise<BigNumber>;

    "emergency_return()"(overrides?: CallOverrides): Promise<BigNumber>;

    is_killed(overrides?: CallOverrides): Promise<BigNumber>;

    "is_killed()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    checkpoint_token(overrides?: Overrides): Promise<PopulatedTransaction>;

    "checkpoint_token()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    ve_for_at(
      _user: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ve_for_at(address,uint256)"(
      _user: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkpoint_total_supply(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "checkpoint_total_supply()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claim(address)"(
      _addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim(address,bool)"(
      _addr: string,
      _claimPRewards: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim(address,bool,bool)"(
      _addr: string,
      _claimPRewards: boolean,
      _lock: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claim_many(
      _receivers: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim_many(address[20])"(
      _receivers: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    burn(
      _coin: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(address,uint256)"(
      _coin: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    commit_admin(
      _addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "commit_admin(address)"(
      _addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    apply_admin(overrides?: Overrides): Promise<PopulatedTransaction>;

    "apply_admin()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    toggle_allow_checkpoint_token(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "toggle_allow_checkpoint_token()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    kill_me(overrides?: Overrides): Promise<PopulatedTransaction>;

    "kill_me()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    recover_balance(
      _coin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "recover_balance(address)"(
      _coin: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    start_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "start_time()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    time_cursor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "time_cursor()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    time_cursor_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "time_cursor_of(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    user_epoch_of(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "user_epoch_of(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    last_token_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "last_token_time()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokens_per_week(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokens_per_week(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    voting_escrow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "voting_escrow()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verbn_penalty_rewards(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "verbn_penalty_rewards()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    total_received(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "total_received()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token_last_balance(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "token_last_balance()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ve_supply(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ve_supply(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "admin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    future_admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "future_admin()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    can_checkpoint_token(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "can_checkpoint_token()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    emergency_return(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "emergency_return()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    is_killed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "is_killed()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
