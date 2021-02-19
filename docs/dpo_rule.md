---
id: dpo_rule
title: DPO Rules V1
---

Before you read on, make sure you have read the [BulletTrain Overview](gt01.md). 

## DPO Lifecycle and Behaviors

##### CREATED
A DPO is created by a **Manager** and has a **Target** objective and expiry (e.g. crowfund 1000 BOLTs before block #10000). It has 100 equal-value seats for **Members** to buy. A target can be to (1) buy an incentive package such as TravelCabin in BulletTrain or (2) chain to another DPO by buying its seats. On creation, the Manager specifies a **Default Target** which helps determine the DPO's crowdfunding amount. A Member can be a **User Member**, or a **DPO Member** (DPO buys seats of another DPO).
Manager earns Management Fee and both Manager and Members can earn yield rewards proportionate to their seats. A Manager, User Member and DPO Member can buy up to 15, 15, and 30 seats, respectively.

A DPO has 4 accounts to store project tokens: 
  - **Deposit Account** to store the funds Members paid for their seats.
  - **Yield Account** to store yields and Milestone Rewards.
  - **Bonus Account** to store Bonuses.
  - **Withdraw Account** to store the funds to be returned to seat buyers.

##### ACTIVE
When all seats are bought, a DPO is ready to commit to a target. If the Default Target from CREATE is available to be committed, the DPO must commit to it. Otherwise, it is free to select another target to commit to. The Default Target might not be available because a user or another DPO could have committed to it first.

After committing to a target successfully, unused funds will go to the Withdraw Account. Any Member can release the withdraw amount from that account to the DPO but Managers are encouraged and incentivized to do it. Released amounts are distributed proportionately to Members by their seats. Funds in the Yield Account, Bonus Account and Withdraw Account can be released as soon as amounts are acculumated there.

##### FAILED  
If the DPO has failed to buy all seats before its expiry, all funds in the Deposit Account will go to the Withdraw Account.
DPOs directly chaining to this DPO, can commit to a new target. No other actions are allowed for a FAILED DPO except to withdraw. 

[comment]: <> (| ![DPO States]&#40;/img/DPO_States.svg&#41; |)

[comment]: <> (|:--:|)

[comment]: <> (| DPO States and Transitions |)

## DPO Incentives
#### Yields
Yields are to be released by the **DPO Manager** to its members. A **Management Fee** is charged by the manager for their timely actions.

##### Management Fee
**Skin-in-the-game**: The fee is set as (5 + Z) % on DPO creation, where Z is the number of seats taken by the DPO Manager **on creation**. This fee will stay the same if a manger decides to take up additional DPO seats at a later time. The Management Fee will always go to the DPO Manager even on the occasion of slashing.

Once **ACTIVE**, the **Manager** has 7-days to purchase a target. After this period, any **Member** can act on behalf of the DPO and the Management Fee will be permanently slashed by half (to punish the lazy manager).

##### Releasing Yields
Releasing Yeilds will empty the *Yield Acccount* and follows the following rules:
- **Lazy Slashing**: Management Fee for this release will be slashed by half if the yield account has been accumulating for more than 5 days.
- **Fair Reward**: Yields after fee are distributed to the Manager and all Members by seats.

#### Referral and Bonuses
Any user can refer any DPO to others. All Members of a DPO must have an **Internal Referrer**. If they were not referred by an existing Member (no referrer or referred by a Non-Member, i.e. **External Referrer**), they will be assigned an Internal Referrer from the **Members Queue**.

The *Members Queue* works as follows:
- All newly joined *Member* (excluding DPO) will be placed in the *Members Queue*.
- If the queue was priorly empty, the Manager will be assigned as the new Member's *Internal Referrer*.
- Otherwise, the first Member in the queue will be assigned as *Internal Referrer* and then removed from the Queue.

##### Calculating Distributable Bonus
Upon joining a DPO, a member will emit **Referral Points** amounting to:
- if a user, the Total Value of Seats
- if a DPO, the Total Value of Seats * (it's Manager's Seats / 100). Remaining will go to it's Members.

In the case of a Lead DPO (i.e. the DPO Target is a TravelCabin), the Manager's referral points will go
to the manager. Otherwise, the *Referral Points* are distributed as follows:
- if the Member has an *External Referrer*, 30% of the Referral Points will go to its External Referrer.
- the remaining will be distributed by:
  - if the *Internal Referrer* is the *Manager*, 100 % to the *Manager*
  - if the *Internal Referrer* is a *Member*, 80% to the *Member* and 20% to its *Internal Referrer*

Bonus will be distributed in proportion to the *Referral Points*.

Under these rules, following will mathematically hold for each Seat:
```math
    Value in BOLT for each Referral Point = TravelCabin* Bonus / TravelCabin* Price

    For example if a TravelCabin costs 1000 BOLTs and provides 60 BOLTs Bonus, 
    the each Referral Point will be worth 60 / 1000 = 0.06 BOLT.
    If a User Member's total value of seats is 300, it will emit 300 * 0.06 = 18 BOLTs as bonus.
    
    *Lead DPO's purchased TravelCabin
```

| ![internal distributable bonus](/img/bonus_pipe.svg) |
|:--:|
| Examples of Calculating Distributable Bonus |
