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

<img src="assets/dpo.png" width="600" />

## DPO Structure
DPO is a formalized on-chain organization. For GT-01, DPO is primarily used for crowdfunding. Here's some important basic concepts:
- A DPO has X **seats**. Each seat has the same value and an equal claim to the rewards of the DPO.
- A DPO is created by a **DPO Manager** with a default **target**. For example, a DPO may target 10 seats of GrowthBox-A (where each seat goes for 1k BOLTs and has an APY of 7%), requiring the DPO to reach a said target of 10k BOLTs to commit to its target.
- At times, the target may be sold out at the time a DPO completes its crowdfunding. Therefore, on creation, a DPO Manager must also specify a **tolerance bound** on the expected rewards (e.g. 10% on the 7% APY, and the DPO can ultimately commit to a target with no less than 6.3% APY).
- Users (or DPOs) that commit to seats of a DPO will become its **DPO Member**. A DPO Member may commit multiple times, as long as its within bounds.

For the Spanner GT-01 Launch Campaign,
- DPO Managers can flexibly configure the DPO's target and tolerance bound.
- DPO members of different types have the following bounds on seats:
  | Member Type         | Seat Cap |
  | ------------------- | -------- |
  | Individual (wallet) | 10       |
  | DPO Manager         | 20       |
  | Another DPO         | 30       |

- A DPO has 100 seats with the same price and value. All seats must be filled before the DPO is set in motion. (See State Transition section for more information).

## DPO Incentive
DPO incentive is guaranteed by blockchain consensus and based strictly on on-chain metrics.
- [GrowthBox](growthbox_rule.md) and DPOs have two types of incentives
  - **Growth Reward** - a recurring reward
  - **Growth Bonus** - a one time reward
- A DPO Manager receives commission for any Growth Rewards received by its DPO Members. The commission rate is set as (5 + Y)%, where Y is the number of seats claimed by the DPO Manager. This is subject to slashing conditions, see DPO Governance section.
- Anyone can refer anyone to a DPO, incentivized by the Growth Bonus with following reward details:
  | Referral Type | Description                              | Reward (direct/second degree) |
  | ------------- | ---------------------------------------- | ----------------------------- |
  | Manager       | refereed by the Manager of the same DPO  | 100% / 20%                    |
  | Member        | referred by a DPO member of the same DPO | 80% / 20%                     |
  | External      | other than the above                     | 60% / 20%                     |

TODO: example (refer to https://wiki.polkadot.network/docs/en/maintain-guides-validator-payout)

## DPO Governance
DPO governance aims to enforce that the DPO will operate as intended.
- Slashing Conditions
  - Manager releasing drop late.
      - Grace period of 7 DAYS
      - if called instead by a DPO Member, 50% of the manager's commission for the batch will go to the member who paid for the function fee instead
  - Manager committing an in-motion DPO late
      - Grace period of 3 DAYS
      - if called instead by a DPO Member, 50% of the manager's on going commission rate will be slashed

#### DPO State Transition
- Upon initiated, the DPO state becomes **CREATED**.
- All seats are required to be taken for the DPO to be **FILLED**.
- The DPO Manager has a 3-day grace period after **FILLED** to commit to a eligible target within the target bounds. DPO members can also pay a fee to commit the DPO in lieu of the manager. After the grace period, DPO members can commit to a target without any fees but the DPO Manager will be subject to slashing conditions. The DPO will be tagged as **COMMITTED** after commiting to a target.
- After all the rewards from the target are distributed, the DPO state becomes **COMPLETED**
- If a DPO fails to commit to any target after 14 days since FILLED, any of its DPO Members has the option to tag the DPO as **TERMINATED**.

TODO: a flowchart

#### DPO Fund Safety
- In the case that a DPO commits to an end target with a value less than its creation target, any excess funds will be prorated back to the DPO members on commitment.
- When the DPO is tagged **TERMINATED** / **COMPLETED**, all the funds will be at the designated DPO vaults readied to be withdrawn by its contributing memebrs
