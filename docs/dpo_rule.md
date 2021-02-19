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
Releasing yields will give Management Fee to the Manager and yields to its Members.
##### Determining Management Fee
It is set as (5 + Z) % on DPO creation, where Z is the number of seats bought by the DPO Manager **on creation**.
For example, if Manager buys 10 seats on creation, the fee is 15%. 
It will stay 15% even if the Manager buys more seats later. 
This design is known as **Skin-in-the-game**. 

After the DPO becomes **ACTIVE**, the *Manager* has a 7-day grace period to commit to a target. 
This action is exclusive to the *Manager* in the grace period, after which 
any *Member* of the DPO can act and slash the management fee by half through the whole DPO lifecycle.

##### Releasing Yields
Releasing Yields will clear the *Yield Account* and assign to Members by following rules:
- **Lazy Slashing**: *Manager* will first receive Management Fees.
  Management Fees for this release will be slashed by half if yields in account has accumulated for more than 5 days (grace period), 
- **Fair Reward**: The rest will go to *Members* by seats.

#### Referral and Bonuses
Any user can refer any DPO to others.

DPO determines the referral structure by the following rules:
- **Members-get-more**:
  - Let's say if Alice refers Bob to join a DPO successfully. 
  If Alice is a *Member* of the DPO, then Alice will become Bob's *Internal Referrer*.
  If not, Alice will become Bob's *External Referrer* and 
  Bob will be assigned an *Internal Referrer* according to the Walk-In Rule.
  - If Charlie joins the DPO without any referrer, he will be assigned an *Internal Referrer* according to the Walk-In Rule.
- The Walk-In Rule states that any newly joined member without an *Internal Referrer* 
  will be assigned one selected from the *Member Queue* structured by very simple rules:
  - **Get-in-line**: Any newly joined *User Member* will be placed at the end of the queue. 
  - **First-come-first-serve**: If *Internal Referrer* assignment is needed, the first *Member* of the queue will be selected 
    and then be placed to the end of the queue (Get-back-in-line :D). 

##### Calculating Distributable Bonus
Bonus will first go to Members by seats. The assigned bonus will turn into Distributable Bonus through two filters 
- Filter 1: if the *Member* is a *DPO Member*, only its *Manager's* portion is distributable. 
  The rest will be distributed within that *DPO Member's* DPO.
- Filter 2: if the *Member* has a *External Referrer*, only 70% is distributable while the other 30% go to the *External Referrer*

Note the Filter 1 is designed to guarantee that
for each *Member*
```math
          assigned bonus / seat value = GrowthBox bonus / GrowthBox price
          
     or   assigned bonus = GrowthBox bonus * seat value/ GrowthBox price
```
For example, if a *Member* spent 100 BOLTs to buy 10 seats,
and the DPO purchased, directly or via DPO chains, a GrowthBox priced 1000 BOLTs with 200 BOLTs as bonus,
the *Member* will be assigned 200 * 100 / 1000 = 20 (BOLTs).

| ![internal distributable bonus](/img/bonus_pipe.svg) |
|:--:|
| Examples of Calculating Distributable Bonus |

##### Assigning Distributable Bonus
  - if the *Internal Referrer* is the *Manager*, 100 % to the *Manager*
  - if the *Internal Referrer* is a *Member*, 80% to the *Member* and 20% to its *Internal Referrer*