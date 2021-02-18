---
id: dpo_rule
title: DPO Rules V1
---

Before you read on, make sure you have read the [Express Overview](gt01.md). 

## Structures
DPO is short for Decentralized Programmable Organization. 
- It has a crowdfunding goal (e.g. 1000 BOLTs), a *Default Target* (GrowthBox or DPO) and expiry (e.g. at block #10000)
- It has 100 seats to represent stakes of the DPO. Each seat has equal value (1% of the crowdfunding goal).
- It has 3 roles with distinct incentive structures. Roles include 
  - *Manager*, who created the DPO, can earn Management Fee for creating and running the DPO.
  - *Member*, who takes the seats of the DPO, can share GrowthBox yield rewards of the DPO for joining the crowdfund. 
 A Member can be an *User Member*, or a *DPO Member* if the seats are taken by a DPO.
  - *Referrer*, who refers other users to become *Members*, can have GrowthBox Bonus for growing the community.
- It has 4 accounts to securely manage the funds and received rewards. 
  - *Deposit Account* to store the funds *Members* pay for taking the seats.
  - *Yield Account* to store the accumulated received yields from GrowthBoxes and also Global Rewards.
  - *Bonus Account* to store the received bonus from GrowthBoxes.
  - *Withdraw Account* to store the funds to be returned to *Members*.

*Manager*, *User Members* and *DPO Members* can take up to 15, 15 and 30 seats, respectively.

## Lifecycle and States
- **CREATED**: The state upon DPO creation. Users can then start referring others to join the DPO.
- **FILLED**: When all seats were taken. DPO will wait for the action of *Manager* or *Member*. 
  If the *Default Target* is available, the DPO must commit to it. 
- **CHAINED**: When the DPO_a takes DPO_b seats, DPO_a is **CHAINED** to DPO_b. 
  DPO_a is then subjected to ChaACTIVATED from DPO_b that
  if DPO_b changes to any of the *ChaACTIVATED Applicable* states, DPO_a will also change to the same state.
- **ACTIVATED**: When the DPO has purchased a GrowthBox and begins receiving rewards. 
  This state is Chain Effect Applicable.
- **TERMINATED**: When the DPO has failed to become ACTIVATED or CHAINED before Expiry.
  This state is Chain Effect Applicable. 
  Remaining funds in the *Deposit Account* is transferred to the *Withdraw Account*.

| ![DPO States](/img/DPO_States.svg) |
|:--:|
| DPO States and Transitions |

## Incentives
Anyone can release the remaining tokens in the *Yield Account*, *Bonus Account* and *Withdraw Account*.
Releasing the *Withdraw Account* is very straightforward that tokens will go to *Members* by seats.
For the other two accounts, releasing tokens involve incentive mechanism and behave differently. 

#### Yields

##### Determining Management Fee
A Management Fee is applied to yield release. 
It is set as (5 + Z) % on DPO creation, where Z is the number of seats taken by the DPO Manager **on creation**.
For example, if the *Manager* takes 15 seats on creation, the fee is 20%. 
This design incentivizes managers to have Skin-in-the-game on creation. 
After the DPO becomes **FILLED**, the *Manager* has a 7-day grace period to
buy a GrowthBox (becomes **ACTIVATED**) or chain to another DPO (becomes **CHAINED**).
This action is exclusive to the *Manager* in the grace period, after which 
any *Member* of the DPO can act and slash the management fee by half through the whole DPO lifecycle.

##### Releasing Yields
Releasing Yields will clear the *Yield Account* and assign all accumulated yields by following rules:
- **Lazy Slashing**: *Manager* will first receive Management Fees.
  Management Fees for this release will be slashed by half if yields in account has accumulated for more than 5 days (grace period), 
- **Fair Reward**: The rest will go to *Members* by seats.

#### Referral and Bonuses
Any user can refer any DPO to others.
DPO determines the referrer by the following rules:
- Let's say if Alice refers Bob to join a DPO successfully. 
  If Alice is a *Member* of the DPO, then Alice will become Bob's *Internal Referrer*.
  If not, Alice will become Bob's *External Referrer* and 
  Bob will be assigned an *Internal Referrer* according to the Walk-In Rule.
- IF Charlie joins the DPO without any referrer, he will be assigned an *Internal Referrer* according to the Walk-In Rule.
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
  
[comment]: <> (|Referral Type|Description                             |Reward &#40;first/second degree&#41;|)

[comment]: <> (  |-------------|----------------------------------------|-----------------------------|)

[comment]: <> (|Manager      |refereed by the Manager of the same DPO | 100% / 20%                  |)

[comment]: <> (|Member       |referred by a DPO member of the same DPO| 80% / 20%                   |)