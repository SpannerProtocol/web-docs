---
id: dpo_rule
title: DPO Rules V1
---

Before you read on, make sure you have read the [BulletTrain Overview](bullettrain.md). 

## DPO Statuses and Actions

##### CREATED
A DPO is created by a **Manager** and has a **Target** objective and expiry (e.g. crowdfund 1000 BOLTs before block #10000). It has 100 equal-value seats for purchase to earn yields. A target can be to (1) buy an incentive package such as TravelCabin in BulletTrain or (2) chain to another DPO by buying its seats. On creation, the Manager specifies a **Default Target** which helps determine the DPO's crowdfunding amount. A Member can be a **User Member**, or a **DPO Member** (DPO buys seats of another DPO).
- A Manager can buy 0 to 15 seats
- A User Member can buy 1 to 15 seats
- A DPO Member can buy 1 to 30 seats

A DPO has 4 token accounts: 
  - **Deposit Account** to store funds raised from seats.
  - **Yield Account** to store yields and Milestone Rewards.
  - **Bonus Account** to store Bonus Rewards.
  - **Withdraw Account** to store the funds to be withdrawn by seat buyers.

Funds in the latter three accounts can be released by anyone to their rightful owners. 

##### ACTIVE
If seats are sold out before expiry, the DPO becomes ACTIVE and is ready to purchase a target. If the *Default Target* has not been sold, the DPO must buy it. Otherwise, it is free to buy another target. After buying a target, any unused funds will immediately be returned in proportion to seat. 

##### FAILED  
If a DPO does not become ACTIVE before expiry, then it has FAILED. All funds in the *Deposit Account* will go to its *Withdraw Account*. No other actions are allowed except for withdrawing from this DPO. If the member is a DPO, the withdrawn amount will go to their deposit account, which can be used to buy another Target.

[comment]: <> (| ![DPO States]&#40;/img/DPO_States.svg&#41; |)

[comment]: <> (|:--:|)

[comment]: <> (| DPO States and Transitions |)

## DPO Incentives
#### Management Fee and Yields

The Management Fee is applied to each Yield release and is determined by these rules:
 - **Skin In the Game**: The fee is set as (5 + Z)%, where Z is the number of seats bought by the DPO Manager on creation. This fee will stay the same even if a manager decides to buy additional seats at a later time.
 - **Lifetime Sentence**: Once **ACTIVE**, the **Manager** has 7-days to purchase a target. After this period, any **Member** can act on behalf of the DPO and the Management Fee will be permanently slashed in half (to punish the lazy manager).

Releasing Yields empties the *Yield Account* and distributes the yield by these rules:
- **Lazy Slashing**: Management Fee for this release will be slashed in half if the yield account has been accumulating for more than 5 days.
- **Fair Reward**: Yields after fee are distributed to the Manager and all Members in proportion to seat.

#### Referral and Bonuses
Any user can refer any DPO to others. 

All Members of a DPO must have an **Internal Referrer**. If they were not referred by an existing Member (they have no referrer or was referred by a Non-Member, i.e. **External Referrer**), they will be assigned an Internal Referrer from the **Members Queue**.

The *Members Queue* works by **First Come First Serve**:
- A newly joined *User Member* (not DPO Member) will be placed in the *Members Queue*.
- If the queue was priorly empty, the Manager will be assigned as the new Member's *Internal Referrer*.
- Otherwise, the first Member in the queue will be assigned as *Internal Referrer* and then removed from the Queue.

We devised a **Referral Point** system, named Emit-Catch-Divide to record and reward contributions of all referrers of a DPO (both Internal and External). 

```math
Property 1:

Value in project's token for each Referral Point = (Package Bonus / Package Price) * (DPO's used amount / DPO's total raised amount)
```
For example if the package purchased by the DPO Chain costs 1000 BOLTs and provides 60 BOLTs Bonus,
then each Referral Point will be worth 60 / 1000 = 0.06 BOLT. If a User Member's total value of seats is 300, it will emit 300 * 0.06 = 18 BOLTs to its referrers.

### Emit
The Emit rule enables Referral Points to be settled at each individual DPO, which mathematically guarantees the above property, and it is as such:

Upon buying DPO seat(s) with a total value of X, the buyer (the referral) will be given X Referral Points of the DPO and emit respective amounts to referrers according to its role in the DPO:
  - Manager of this DPO -> emit nothing
  - User Member -> emit X
  - DPO Member -> emit X * (it's manager's number of seats / 100)

### Catch
The emitted *Referral Points* will then be caught by referrers as follows:
- if the Member has an *External Referrer*, its External Referrer will catch 30%.
- the remaining will be caught as follows:
  - if the *Internal Referrer* is the *Manager*, the *Manager* will catch 100%
  - if the *Internal Referrer* is a *Member*, the *Internal Referrer* will catch 80%, and the *Internal Referrer*'s *Internal Referrer* will catch the remaining 20%

### Divide
Bonus Rewards received by the DPO will be divided proportionally according to the Referral Points each referrer related to the DPO holds.
