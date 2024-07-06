import {
  AdminChanged as AdminChangedEvent,
  AdminRemoved as AdminRemovedEvent,
  Approval as ApprovalEvent,
  MinterAdded as MinterAddedEvent,
  MinterRemoved as MinterRemovedEvent,
  SpenderUnwhitelisted as SpenderUnwhitelistedEvent,
  SpenderWhitelisted as SpenderWhitelistedEvent,
  Transfer as TransferEvent
} from "../generated/WETH/WETH"
import {
  AdminChanged,
  AdminRemoved,
  Approval,
  MinterAdded,
  MinterRemoved,
  SpenderUnwhitelisted,
  SpenderWhitelisted,
  Transfer
} from "../generated/schema"

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._oldAdmin = event.params._oldAdmin
  entity._newAdmin = event.params._newAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAdminRemoved(event: AdminRemovedEvent): void {
  let entity = new AdminRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._oldAdmin = event.params._oldAdmin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._spender = event.params._spender
  entity._value = event.params._value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinterAdded(event: MinterAddedEvent): void {
  let entity = new MinterAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._minter = event.params._minter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMinterRemoved(event: MinterRemovedEvent): void {
  let entity = new MinterRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._minter = event.params._minter

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSpenderUnwhitelisted(
  event: SpenderUnwhitelistedEvent
): void {
  let entity = new SpenderUnwhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._spender = event.params._spender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSpenderWhitelisted(event: SpenderWhitelistedEvent): void {
  let entity = new SpenderWhitelisted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._spender = event.params._spender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._to = event.params._to
  entity._value = event.params._value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
