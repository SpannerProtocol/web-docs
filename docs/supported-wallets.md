---
id: supported-wallets
title: Supported Wallets
---

Links to Spanner's DApp will be made available here after its official launch.
  
## Wallets
While waiting wallet support for Polkadot/Subtrate matures, Spanner has created a custodial wallet service to improve the experience of users on Spanner.
Spanner will actively add additional wallet options as they become available. 

### Custodial Wallets
Users can use any Ethereum wallet that is available via [WalletConnect](https://walletconnect.org/wallets) to authenticate with Spanner.
When a user uses their Ethereum wallet, a keypair is generated for them by Spanner using Hierarchical Determinstic (HD) Key Derivation and 
is not stored. If user wants to use other wallet options in the future to have control over their own keys, they can do so and transfer their balances over.

### Universal Signer Wallets via Desktop Browser Extensions
We currently support desktop universal signers such as PolkadotJS and MathWallet. 
This is for users with experience with crypto wallets and wants control over their own keys.
Using the wallet you can create your own account with the following information:

- *Network*: Polkadot Substrate
- *Key Derivation and Signing Algorithm*: Schnorrkel/Ristretto x25519 (sr25519)
