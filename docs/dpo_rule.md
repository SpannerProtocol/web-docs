---
id: dpo_rule
title: DPO Rules
---
Decentralized Programmable Organization
### DPO Structure and Roles


- Manager: the user who created the DPO
- Members: users taking up seats of a DPO. A Member can be an *Individual Member* or a *DPO Member*
- DPO Chaining: a DPO taking seats of another DPO. e.g. DPO_a chains to DPO_b. It is equivalent to DPO_a is chained to DPO_b

### DPO Lifecycle, States and Behaviours
- **CREATED**: The state upon DPO creation. Users can then start referring others to join the DPO.
- **FILLED**: When all seats were taken by *Members*. The DPO can then buy a GrowthBox or chains to another DPO
- **CHAINED**: When the DPO chains to another DPO. The DPO will wait for recursive state change events.
- **IN EFFECT**: When the DPO has purchased a GrowthBox and begins receiving rewards. 
- **COMPLETED**: when all rewards from the purchased GrowthBox have been received. Members can withdraw at this state.
- **TERMINATED**: Members can withdraw at this state. There are a few scenarios where a DPO could become **TERMINATED**: 
  - **CREATED** -> **TERMINATED**: if the DPO can not fill all of its 100 seats within 15 days after **CREATED**, and a member requests to withdraw
  - **FILLED** -> **TERMINATED**: if the DPO fails to commit to an eligible target within 15 days after **FILLED**, and a member requests to withdraw

Please note that a new state of {**IN EFFECT**, **COMPLETED** or **TERMINATED**} will trigger recursive state change to all of its *DPO Members* into the same state. 
This rule will apply recursively that if a DPO Member has its own DPO Members. 

## DPO Structure
- A DPO is initiated by a **DPO Manager** with a target crowdfund value and bounds (e.g. aims to crowdfund 10k BOLTs and commit to target, either a Growth Box or seats of another DPO, with at least 7% APY)
- A DPO has 100 **seats**, taken by its **DPO Members**. Each seat has the same price and an equal claim to the rewards of this DPO. 
- **DPO Members** can be either an individual wallet address or a DPO, the DPO chaining pattern 
    - An individual wallet participant can take up to 20 seats
    - A DPO participant can take up to 30 seats

**Member Referrals**
- Anyone can refer the seat to others. 
    - **Internal Referral**: referred by a DPO member of the same DPO.
    - **External Referral**: otherwise than the above.
- Both Internal and External Referral will share a part of the overall Instant Drop from a [Growth Box](gt01.md). External Referral has only 30% BONUS as that of an Internal Referral.
- DPO Members without a referrer when joining will be assigned a referrer selected from the early members of the DPO. The selection rule is using a First-In-First-Out queue:
    - ..

## DPO Incentive
DPO only receives two types of rewards, namely the BONUS and YIELD from GrowthBoxes.

### BONUS Distribution
BONUS will first distribute pro rata to members per the number of their seats of the DPO. 
The member keeps 20% the assigned BONUS and the rest 80% will distribute as follows
- 60, 20

### YIELD Distribution
A management fee is applied to YIELD rewards for the manager's efforts in organizing and managing the DPO. 
For each time the YIELD reward gets distributed, the manager receives a portion of the total YIELD reward and the rest goes to DPO members pro rata to the number of their seats

The management fee 
- is set to be (5 + Z) % on DPO creation, where Z is the number of seats claimed by the DPO Manager. The reason is the simple yet effective Skin-in-the-game rational.
- is capped at 20%. Once initialized, the fee can only monotonously go down should the manager chooses so. The manager taking more seats later will not increase the fee.
- can be slashed by DPO governance.

#### DPO governance
DPO Managers are expected to perform some functions for the benefit of the DPO members.
For example, they should actively distribute YIELD rewards to its members and pay for the gas fee required for performing such actions on Blockchain.

Slashing condition:
- After the DPO became FILLED, the manager has a 7-day grace period to commit to an eligible target (GrowthBox or another DPO). 
  Should the manager fails to do so, any member of the DPO can commit to an eligible target. 
  If a member performed the action, then the management fee will be slashed by half throughout the whole DPO lifetime.
  
- After the DPO became COMMITTED, the DPO will start receiving the YIELD reward, and the manager is expected to distribute the rewards to its members. 
  However, anyone (even not a DPO member) is allowed to call the function to distribute the YIELD reward for flexibility. 
  If the manager fails to distribute the YIELD to its member within a 7-day grace period since last distribution, the management fee of this distribution batch will be slashed by half
  If the distribution function was called by an internal DPO member, then the slashed fee will go to the caller. 
  If the function was called by an external account, then the slashed fee will go to the Spanner Treasury.

#### DPO Fund Safety
- If the committed target does not use the DPO funds to its fullest, the rest of the fund will be returned to their origin.
- If the DPO is tagged as **DISBANDED**, all the funds will be returned to their origins.