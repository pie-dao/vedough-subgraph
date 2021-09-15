// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class BoostedToMax extends ethereum.Event {
  get params(): BoostedToMax__Params {
    return new BoostedToMax__Params(this);
  }
}

export class BoostedToMax__Params {
  _event: BoostedToMax;

  constructor(event: BoostedToMax) {
    this._event = event;
  }

  get oldLockId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newLockId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class Deposited extends ethereum.Event {
  get params(): Deposited__Params {
    return new Deposited__Params(this);
  }
}

export class Deposited__Params {
  _event: Deposited;

  constructor(event: Deposited) {
    this._event = event;
  }

  get lockId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get lockDuration(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class Ejected extends ethereum.Event {
  get params(): Ejected__Params {
    return new Ejected__Params(this);
  }
}

export class Ejected__Params {
  _event: Ejected;

  constructor(event: Ejected) {
    this._event = event;
  }

  get lockId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class MinLockAmountChanged extends ethereum.Event {
  get params(): MinLockAmountChanged__Params {
    return new MinLockAmountChanged__Params(this);
  }
}

export class MinLockAmountChanged__Params {
  _event: MinLockAmountChanged;

  constructor(event: MinLockAmountChanged) {
    this._event = event;
  }

  get newLockAmount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class WhitelistedChanged extends ethereum.Event {
  get params(): WhitelistedChanged__Params {
    return new WhitelistedChanged__Params(this);
  }
}

export class WhitelistedChanged__Params {
  _event: WhitelistedChanged;

  constructor(event: WhitelistedChanged) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get whitelisted(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class Withdrawn extends ethereum.Event {
  get params(): Withdrawn__Params {
    return new Withdrawn__Params(this);
  }
}

export class Withdrawn__Params {
  _event: Withdrawn;

  constructor(event: Withdrawn) {
    this._event = event;
  }

  get lockId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SharesTimeLock__getStakingDataResultDataStruct extends ethereum.Tuple {
  get totalStaked(): BigInt {
    return this[0].toBigInt();
  }

  get veTokenTotalSupply(): BigInt {
    return this[1].toBigInt();
  }

  get accountVeTokenBalance(): BigInt {
    return this[2].toBigInt();
  }

  get accountWithdrawableRewards(): BigInt {
    return this[3].toBigInt();
  }

  get accountWithdrawnRewards(): BigInt {
    return this[4].toBigInt();
  }

  get accountDepositTokenBalance(): BigInt {
    return this[5].toBigInt();
  }

  get accountDepositTokenAllowance(): BigInt {
    return this[6].toBigInt();
  }

  get accountLocks(): Array<
    SharesTimeLock__getStakingDataResultDataAccountLocksStruct
  > {
    return this[7].toTupleArray<
      SharesTimeLock__getStakingDataResultDataAccountLocksStruct
    >();
  }
}

export class SharesTimeLock__getStakingDataResultDataAccountLocksStruct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get lockedAt(): BigInt {
    return this[1].toBigInt();
  }

  get lockDuration(): BigInt {
    return this[2].toBigInt();
  }
}

export class SharesTimeLock__locksOfResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: BigInt, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class SharesTimeLock extends ethereum.SmartContract {
  static bind(address: Address): SharesTimeLock {
    return new SharesTimeLock("SharesTimeLock", address);
  }

  canEject(account: Address, lockId: BigInt): boolean {
    let result = super.call("canEject", "canEject(address,uint256):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromUnsignedBigInt(lockId)
    ]);

    return result[0].toBoolean();
  }

  try_canEject(account: Address, lockId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("canEject", "canEject(address,uint256):(bool)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromUnsignedBigInt(lockId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  depositToken(): Address {
    let result = super.call("depositToken", "depositToken():(address)", []);

    return result[0].toAddress();
  }

  try_depositToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("depositToken", "depositToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getLocksOfLength(account: Address): BigInt {
    let result = super.call(
      "getLocksOfLength",
      "getLocksOfLength(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toBigInt();
  }

  try_getLocksOfLength(account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getLocksOfLength",
      "getLocksOfLength(address):(uint256)",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRewardsMultiplier(duration: BigInt): BigInt {
    let result = super.call(
      "getRewardsMultiplier",
      "getRewardsMultiplier(uint32):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(duration)]
    );

    return result[0].toBigInt();
  }

  try_getRewardsMultiplier(duration: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRewardsMultiplier",
      "getRewardsMultiplier(uint32):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(duration)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getStakingData(
    account: Address
  ): SharesTimeLock__getStakingDataResultDataStruct {
    let result = super.call(
      "getStakingData",
      "getStakingData(address):((uint256,uint256,uint256,uint256,uint256,uint256,uint256,(uint256,uint32,uint32)[]))",
      [ethereum.Value.fromAddress(account)]
    );

    return result[0].toTuple() as SharesTimeLock__getStakingDataResultDataStruct;
  }

  try_getStakingData(
    account: Address
  ): ethereum.CallResult<SharesTimeLock__getStakingDataResultDataStruct> {
    let result = super.tryCall(
      "getStakingData",
      "getStakingData(address):((uint256,uint256,uint256,uint256,uint256,uint256,uint256,(uint256,uint32,uint32)[]))",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTuple() as SharesTimeLock__getStakingDataResultDataStruct
    );
  }

  locksOf(param0: Address, param1: BigInt): SharesTimeLock__locksOfResult {
    let result = super.call(
      "locksOf",
      "locksOf(address,uint256):(uint256,uint32,uint32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new SharesTimeLock__locksOfResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_locksOf(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<SharesTimeLock__locksOfResult> {
    let result = super.tryCall(
      "locksOf",
      "locksOf(address,uint256):(uint256,uint32,uint32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SharesTimeLock__locksOfResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  maxLockDuration(): BigInt {
    let result = super.call(
      "maxLockDuration",
      "maxLockDuration():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_maxLockDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxLockDuration",
      "maxLockDuration():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxRatioArray(param0: BigInt): BigInt {
    let result = super.call(
      "maxRatioArray",
      "maxRatioArray(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_maxRatioArray(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "maxRatioArray",
      "maxRatioArray(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minLockAmount(): BigInt {
    let result = super.call("minLockAmount", "minLockAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_minLockAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minLockAmount",
      "minLockAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  minLockDuration(): BigInt {
    let result = super.call(
      "minLockDuration",
      "minLockDuration():(uint32)",
      []
    );

    return result[0].toBigInt();
  }

  try_minLockDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minLockDuration",
      "minLockDuration():(uint32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  rewardsToken(): Address {
    let result = super.call("rewardsToken", "rewardsToken():(address)", []);

    return result[0].toAddress();
  }

  try_rewardsToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("rewardsToken", "rewardsToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  secPerMonth(): BigInt {
    let result = super.call("secPerMonth", "secPerMonth():(uint256)", []);

    return result[0].toBigInt();
  }

  try_secPerMonth(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("secPerMonth", "secPerMonth():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  whitelisted(param0: Address): boolean {
    let result = super.call("whitelisted", "whitelisted(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_whitelisted(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("whitelisted", "whitelisted(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class BoostToMaxCall extends ethereum.Call {
  get inputs(): BoostToMaxCall__Inputs {
    return new BoostToMaxCall__Inputs(this);
  }

  get outputs(): BoostToMaxCall__Outputs {
    return new BoostToMaxCall__Outputs(this);
  }
}

export class BoostToMaxCall__Inputs {
  _call: BoostToMaxCall;

  constructor(call: BoostToMaxCall) {
    this._call = call;
  }

  get lockId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BoostToMaxCall__Outputs {
  _call: BoostToMaxCall;

  constructor(call: BoostToMaxCall) {
    this._call = call;
  }
}

export class DepositByMonthsCall extends ethereum.Call {
  get inputs(): DepositByMonthsCall__Inputs {
    return new DepositByMonthsCall__Inputs(this);
  }

  get outputs(): DepositByMonthsCall__Outputs {
    return new DepositByMonthsCall__Outputs(this);
  }
}

export class DepositByMonthsCall__Inputs {
  _call: DepositByMonthsCall;

  constructor(call: DepositByMonthsCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get months(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get receiver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class DepositByMonthsCall__Outputs {
  _call: DepositByMonthsCall;

  constructor(call: DepositByMonthsCall) {
    this._call = call;
  }
}

export class EjectCall extends ethereum.Call {
  get inputs(): EjectCall__Inputs {
    return new EjectCall__Inputs(this);
  }

  get outputs(): EjectCall__Outputs {
    return new EjectCall__Outputs(this);
  }
}

export class EjectCall__Inputs {
  _call: EjectCall;

  constructor(call: EjectCall) {
    this._call = call;
  }

  get lockAccounts(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get lockIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }
}

export class EjectCall__Outputs {
  _call: EjectCall;

  constructor(call: EjectCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get depositToken_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get rewardsToken_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get minLockDuration_(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get maxLockDuration_(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get minLockAmount_(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetMinLockAmountCall extends ethereum.Call {
  get inputs(): SetMinLockAmountCall__Inputs {
    return new SetMinLockAmountCall__Inputs(this);
  }

  get outputs(): SetMinLockAmountCall__Outputs {
    return new SetMinLockAmountCall__Outputs(this);
  }
}

export class SetMinLockAmountCall__Inputs {
  _call: SetMinLockAmountCall;

  constructor(call: SetMinLockAmountCall) {
    this._call = call;
  }

  get minLockAmount_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetMinLockAmountCall__Outputs {
  _call: SetMinLockAmountCall;

  constructor(call: SetMinLockAmountCall) {
    this._call = call;
  }
}

export class SetSecondsPerMonthCall extends ethereum.Call {
  get inputs(): SetSecondsPerMonthCall__Inputs {
    return new SetSecondsPerMonthCall__Inputs(this);
  }

  get outputs(): SetSecondsPerMonthCall__Outputs {
    return new SetSecondsPerMonthCall__Outputs(this);
  }
}

export class SetSecondsPerMonthCall__Inputs {
  _call: SetSecondsPerMonthCall;

  constructor(call: SetSecondsPerMonthCall) {
    this._call = call;
  }

  get secondsPerMonth_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetSecondsPerMonthCall__Outputs {
  _call: SetSecondsPerMonthCall;

  constructor(call: SetSecondsPerMonthCall) {
    this._call = call;
  }
}

export class SetWhitelistedCall extends ethereum.Call {
  get inputs(): SetWhitelistedCall__Inputs {
    return new SetWhitelistedCall__Inputs(this);
  }

  get outputs(): SetWhitelistedCall__Outputs {
    return new SetWhitelistedCall__Outputs(this);
  }
}

export class SetWhitelistedCall__Inputs {
  _call: SetWhitelistedCall;

  constructor(call: SetWhitelistedCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get isWhitelisted(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetWhitelistedCall__Outputs {
  _call: SetWhitelistedCall;

  constructor(call: SetWhitelistedCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get lockId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
