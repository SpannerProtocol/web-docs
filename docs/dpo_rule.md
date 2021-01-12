---
id: dpo_rule
title: DPO Rules for GT-01
---

DPO stands for Decentralized Programmable Organization. Essentially it is a DAO (Decentralized Autonomous Organization) that has an intention bounded by code. Check out our Medium post [Introducing DPO](https://spannerprotocol.medium.com/introducing-dpo-e4ca0730e1c) for more information on its design rationale and principles. Users can use it as is and configure it according to their requirements. 

Notable features of DPO include:
- **Binding Governance** — Open participation and governance inclusive to all participants through advanced cryptography. All parameters can be configured and changed through a binding DPO governance.
- **Transparent Incentive** — A reward mechanism based strictly on on-chain metrics to drive desired behaviors
- **Modularization** — Composable and scalable DPO in numerous levels. Enabling DPO in DPO patterns just like the holding structure of LLC.
- **Liquidity** — A market for all DPO stakes through on-chain swapping with ease.

<img src="assets/dpo.png" width="600">

## DPO Structure
DPO is a formalized on-chain organization. For GT-01, DPO is primarily for crowdfunding. Here's some important basic concepts:
- A DPO is initiated by a **DPO Manager** with a default target, target value and bounds (e.g. aims to crowdfund 10k BOLTs and commits to target, either a GrowthBox or seats of another DPO, with at least 7% APY)
- A DPO has X **seats**. Each seat has the same price, one share of voting power and an equal claim to the rewards of this DPO. 
- Users who claim seats will become a **DPO Member**. A DPO Member can be an individual wallet or a DPO (DPO in DPO). A DPO Member may claim multiple seats within the bound. 


For the Spanner GT-01 Launch Campaign, 
- DPO Managers can flexibly configure the target value and bounds.
- A DPO has 100 seats with the same price and the same voting power. All seats need to be claimed before the DPO is set in motion. (See State Transition section for more information).

## DPO Incentive
DPO incentive is guaranteed by blockchain consensus and based strictly on on-chain metrics.
- A DPO Manager is entitled to charge a management fee from the rewards of its DPO Members.
- Anyone can refer a DPO seat to others. 
    - **Internal Referral**: referred by a DPO member of the same DPO.
    - **External Referral**: other than the above.
- DPO Managers can configure the referral incentive structure

For our first launch,
- Management fee 
    - Is firstly set as DPO initialization is (5 + Z) %, where Z is the number of seats claimed by the DPO Manager. 
    - Is capped at 20%. Claiming more seats later wont increase the fee. The DPO Manager can choose to lower the fee.
    - Is subject to slashing conditions. See the DPO Governance section. 
- Both Internal and External Referral will share a part of the overall Instant Drop from a [GrowthBox](growthbox_rule.md).
- External Referral has only 30% bonus as that of an Internal Referral.

## DPO Governance
DPO governance aims to enforce that the DPO will operate as intended. It includes:
- Conditions for the DPO state transition
- Member fund safety
- Slashing conditions

For our launch,

#### DPO State Transition
- Upon initiated, the DPO state becomes **CREATED**. 
- All seats are required to be taken for the DPO to be **FILLED**. 
- The DPO Manager has a 3-day grace period after **FILLED** to commit to a eligible target within the target bound. DPO members can also pay a fee to commit the DPO in lieu of the manager. After the grace period, DPO members can commit to a target without any fees but the DPO Manager will be subject to slashing conditions. The DPO will be tagged as **COMMITTED** after commiting to a target.
- After all the rewards from the target are distributed, the DPO state becomes **COMPLETED**
- If a DPO fails to commit to any target after 14 days since FILLED, any of its DPO Members has the option to tag the DPO as **TERMINATED**. 

TODO: a flowchart

#### DPO Fund Safety
- If the committed target does not use the DPO funds to its fullest, the funds will be returned to their original holders.
- If the DPO is tagged as **TERMINATED**, all the funds will be returned to their original holders.

#### Slashing Conditions
- After the 3-day grace period, any other DPO Member can commit to a legitimate target on the behalf of the DPO Manager, in which case the management fee would be slashed in half. 
- Anyone can distribute the DPO rewards to its mebmer by calling the function. But this action incur costs and should normally be done by the DPO Manager. A DPO Manager should distribute rewards within 7 days since the last reward distribution checkpoint for a better member experience. Should the DPO Manager fail to do so, half of the management fee for the accumulated rewards will be slashed. If the distribution function was called by its DPO member after the 7-day grace period, the slashed amount will go to the caller as incentive. 