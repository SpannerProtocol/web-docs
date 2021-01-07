---
id: dpo_rule
title: DPO Rules
---

Check [this](https://spannerprotocol.medium.com/introducing-dpo-e4ca0730e1c) Medium post out for its design rational and principles. Users can also use it as is and configure DPO for their usages. 

Notable features of DPO include:
- Binding Governance — Opening participation and governance inclusive to all participants through advanced cryptography. All parameters can be configured and changed through a **binding** DPO governance.
- Transparent incentive — A reward mechanism based strictly on on-chain metrics to drive desired behaviors
- Modularization — Composable and scalable DPO in numerous levels. Enabling DPO in DPO patterns just like the holding structure of LLC.
- Liquidity — A market for all DPO stakes through on-chain swapping with ease compared to how company shares are circulated.

<img src="assets/dpo.png" width="600">

## DPO Structure
DPO is a formalized on-chain organization. Here's some important basic concepts:
- A DPO is initiated by a **DPO Manager** with a defined intent (e.g. to activate a [Growth Box](growthbox_rule.md)). 
- A DPO has X **seats**. Each seat has a price. And each slot has one share of **voting power**.
- A DPO will be **In Motion** when over Y seats are claimed. 
- Users who claim the seat will become **DPO Members**. A DPO Member can be an individual wallet or a DPO (DPO in DPO). A DPO Member may claim multiple seats within the bound. 


For our first launch, a DPO
- Targets a Growth Box or another DPO seat(s).
- Has 100 seats with the same price and the same voting power. Needs all seats claimed to be In Motion

## DPO Incentive
DPO incentive is guaranteed by the Blockchain consensus and based strictly on on-chain metric.
- Dpo Manager is entitled to charge management fee from the rewards of its DPO Members.
- Anyone can refer the seat to others. 
    - **Internal Referral**: referred by a DPO member of the same DPO.
    - **External Referral**: otherwise than the above.
- DPO Managet can configure the referral incentive structure

For our first launch,
- DPO Manager can not charge more than (5% + Z%) management fee, where Z is the number of seats claimed by the DPO Manager. The fee cap is 20%. DPO Manager can only lower the fee.
- Both Internal and External Referral will share a part of the overall Instant Drop from a [Growth Box](growthbox_rule.md).
- External Referral has only 30% bonus as that of an Internal Referral.

## DPO Governance
DPO governance includes:
- Changing the DPO mandate (the intent)
- Enforcing normal operations. e.g. DPO Members enforcing what the DPO Manager fail to perform
- All governance changes are binding and will be determiend by a formal quorom voting.

For our first launch,
- Major DPO Members can suggest a change of target. 
- If the DPO Manager fail to dispense rewards for its members, the DPO Member who enforces the reward dispense is entitled to a part of the management fee. 
- The DPO will be disbanded and all committed toekns will return to the members if the DPO failed to exercise its intent within 15 days.
