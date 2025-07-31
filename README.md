```
# 🧠 Cubiq: The zkEVM Blockchain for Mobile

**Cubiq** is a modular, zkEVM-based blockchain architecture designed to enable lightweight participation from mobile devices (called **Qubes**) by offloading zero-knowledge proof generation to decentralized cloud-based Provers. Cubiq combines zkRollup technology with mobile-first consensus and interoperability features, making Web3 truly decentralized and accessible.

## 🚀 Features

- ✅ **zkEVM with Plonky3** for fast recursive proofs
- 📱 **Mobile node support (Qubes)** for block verification and participation
- ☁️ **Cloud Prover system** (decentralized, permissionless)
- 🌐 **zkURL protocol** for proof fetching and syncing
- 🔄 **Interoperability-first architecture** with cross-chain APIs
- ⚖️ **DPoS-based consensus** with mobile validator rotation
- 🧩 Fully modular, pluggable execution and proof layers

## 📦 Repo Structure (coming soon)

```bash
/cubiq-core        # zkEVM execution & chain logic
/qube-sdk          # Mobile client SDK for Qube nodes
/prover-engine     # Cloud-based proof generation engine
/zkurl-protocol    # Light client proof fetching protocol
/contracts         # Qube token, staking, governance contracts
/docs              # Technical documentation (GitBook source)
```

## 🧱 Qube Token

- Ticker: `QUBE`
- Decimals: `18`
- 1 QUBE = 10^18 Wei
- Utility: Staking, governance, prover rewards, gas

## 🔗 Key Concepts

- **Qubes** – lightweight mobile nodes that verify and propose blocks
- **Cloud Provers** – decentralized actors who generate zkSNARK/zkSTARK proofs for block state transitions
- **zkURL** – new sync protocol allowing Qubes to fetch compact verified proofs
- **Prover Incentives** – rewarded in QUBE for each accepted proof

## 📚 Documentation

Detailed technical whitepaper and architecture docs available at:

➡️ [**docs.cubiq.org**](https://docs.cubiq.org) *(placeholder link)*

## 👷 Build & Contribute

```bash
# Clone the repo
git clone https://github.com/cubiq-labs/cubiq.git
cd cubiq

# Install dependencies (for each module)
cd cubiq-core && yarn install
```

> 📥 Contributions are welcome — please open issues or pull requests for bugs, improvements, or ideas.

## 📜 License

Licensed under MIT. See `LICENSE` file for more details.

## 🧠 Vision

> *"Make decentralization truly mobile."*

Cubiq empowers billions of mobile users to become active participants in blockchain networks without sacrificing performance, security, or decentralization.

```
