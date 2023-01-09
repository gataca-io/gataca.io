---
date: 2022-08-25T11:23:45.000+00:00
meta_data:
  title: 'SSI Essentials: A crash course on Digital ID Wallets'
  description: 'In the latest SSI Essentials blog, GATACA takes a step back and analyze
    the general purpose of Digital ID Wallets, break down the types of ID Wallets,
    and evaluate their future evolution in a clear, easy-to-read way. '
  rrss_images:
    twitter: "/static/images/walletblog_mainpic.png"
    facebook_and_whatsapp: "/static/images/walletblog_mainpic.png"
    linkedin: "/static/images/walletblog_mainpic.png"
title: 'SSI Essentials: A crash course on Digital ID Wallets'
author: ''
hero_image: "/static/images/walletblog_mainpic.png"

---
**How do we prove who we are online? Where does the information we use to prove who we are get stored?**

These questions are at the core of the digital identity revolution happening today. As the world turns digital and identity fraud becomes more common, digital services have had to implement longer, more complex methods of identity verification in an effort to reduce cyberattacks. Moreover, users have no control over who has access to their data or where it is used.

Not only is the user experience on the decline, but online security & privacy are also deteriorating, ironic isn't it? Wasn’t the goal of adding additional authentication steps to boost security and privacy?

Digital ID Wallets, particularly Self-Sovereign Identity Wallets, are tackling this problem.

## What are Digital ID wallets?

A Digital ID Wallet is the mobile or web application version of your physical wallet that serves three main purposes:

1. **Acting as a secure digital vault for all your personal data**: A digital ID wallet enables users to store all their identity documents (such as national ID cards, driver’s licenses, academic diplomas, or membership cards) in an encrypted, digital format. These digital identity documents are called [Verifiable Credentials](https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs "https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs") in SSI wallets.
2. **Proving who you are**: With digital ID wallets, users have all of their data in their hands (literally), so they can easily share single attributes and/or complete verifiable credentials in one click to prove they are who they claim to be. This eliminates the use of usernames and passwords forever. 
3. **Managing linked services**: Users can finally control and manage who has access to their data. This means they can both grant and revoke access to their data, as well as view all the given consents to “linked services,” AKA services that are currently accessing their data.

![](/static/images/digital_wallets_blog_appstore.png)

## Standards and specifications: which ones should ID Wallets follow?

Multiple international standardization bodies are attempting to standardize the way ID wallets work while simultaneously, regulatory bodies focus on the development or support of standards for the local/regional wallets they plan to provide. 

Digital ID Wallets first became a hot topic during the pandemic as governments were rushing to issue COVID health passes in a mobile wallet that could be internationally recognized. 

This paved the way for digital credentials in mobile wallets; now there are multiple standards evolving for digital identity, some have a regional focus, others focus on specific use cases, and a few that aim for global adoption.

**EBSI**, the [European Blockchain Services Infrastructure](https://ec.europa.eu/digital-building-blocks/wikis/display/EBSI/Home), was launched to support European cross-border public services and earlier this year launched the[ EBSI conformance test](https://ec.europa.eu/digital-building-blocks/wikis/display/EBSI/Conformant+wallets "https://ec.europa.eu/digital-building-blocks/wikis/display/EBSI/Conformant+wallets") for Digital ID Wallets in Europe. Wallets that pass the test are considered “conformant,” which guarantees their interoperability with the EBSI specifications and allows these wallets to engage with the EBSI ecosystem.

Simultaneously, the EC has been working over the past 2 years on an[ **eIDAS** revision](https://gataca.io/blog/here-s-what-the-new-eidas-proposal-really-means-for-the-ssi-community-in-6-key-points). eIDAS is the European regulatory framework for **e**lectronic **Id**entities **a**nd **S**ignatures, and its first major revision proposal, eIDAS 2.0, was published in June 2021. 

Among the most relevant changes worth highlighting is the launch of EU Digital Identity Wallets across Europe as a mandatory service for governments to provide and for many businesses to accept (more on the original proposal [here](https://gataca.io/blog/here-s-what-the-new-eidas-proposal-really-means-for-the-ssi-community-in-6-key-points) and the Wallet expectations [here](https://gataca.io/blog/the-eudi-wallet-architecture-reference-framework-in-plain-english "https://gataca.io/blog/the-eudi-wallet-architecture-reference-framework-in-plain-english")). 

While eIDAS and EBSI focus on building security, technical, and functional specifications on a regional level, the Worldwide Web Consortium (W3C) and ISO, the two most important standardization organizations, focus on establishing low-level technology standards that can be recognized on a global level.

**ISO** was the first to work on the standard for digitalizing driver’s licenses and other identity cards on mobile devices ([ISO IEC 23 220](https://www.iso.org/standard/74910.html "https://www.iso.org/standard/74910.html")). Under its umbrella, it also has blockchain and DLT specifications ([ISO/TC 307](https://www.iso.org/committee/6266604.html "https://www.iso.org/committee/6266604.html")) and is currently working on decentralized identity standards ([ISO/AWI 7603](https://www.iso.org/standard/82842.html?browse=tc#:\~:text=A%20standard%20for%20the%20design,with%20Verifiable%20Credentials%20(VCs). "https://www.iso.org/standard/82842.html?browse=tc#:~:text=A%20standard%20for%20the%20design,with%20Verifiable%20Credentials%20(VCs).")) that complement W3Cs.

So far, the **W3C** has the most mature and widely recognized standards for decentralized digital identity, specifically for the self-sovereign identity core. It has led international working groups to standardize [Verifiable Credentials ](https://www.w3.org/TR/vc-data-model/ "https://www.w3.org/TR/vc-data-model/")and [Decentralized Identifiers](https://www.w3.org/TR/did-core/ "https://www.w3.org/TR/did-core/").

## Where are identity wallets mostly used?

Up until now, Digital ID Wallets have been a priority for Governments. Since Wallets deal with extremely sensitive citizen data, it is only natural for governments to become the pioneers of the technology as they are the ones who must approve its use.

Yet on the other spectrum of Identity Wallet enthusiasts, we have the Web3 community, as their mission and vision focus on returning users control over their data and activity online, something Digital ID Wallets also promise. 

### Government

Government-related bodies in Europe have taken the lead with ID Wallets. [Greece](https://news.gtp.gr/2022/07/28/greek-citizens-can-store-national-id-drivers-license-new-wallet-app/ "https://news.gtp.gr/2022/07/28/greek-citizens-can-store-national-id-drivers-license-new-wallet-app/"), [France](https://www.biometricupdate.com/202204/france-announces-user-controlled-mobile-digital-identity-app-for-use-with-national-id "https://www.biometricupdate.com/202204/france-announces-user-controlled-mobile-digital-identity-app-for-use-with-national-id"), [Estonia](https://www.biometricupdate.com/202108/estonia-plans-digital-wallet-netherlands-urged-to-upgrade-digital-id-infrastructure "https://www.biometricupdate.com/202108/estonia-plans-digital-wallet-netherlands-urged-to-upgrade-digital-id-infrastructure"), [Spain](https://gataca.io/blog/gataca-joins-the-european-commission-s-early-adopters-program-as-the-ssi-technology-provider-in-the-spanish-group "https://gataca.io/blog/gataca-joins-the-european-commission-s-early-adopters-program-as-the-ssi-technology-provider-in-the-spanish-group"), and others have been working on or testing national ID Wallets for their citizens.

In the United States, individual states like [Arizona have begun to rollout Driver’s License IDs, ](https://www.popsci.com/technology/apple-wallet-id-arizona/ "https://www.popsci.com/technology/apple-wallet-id-arizona/")recognizable nationwide, into the Apple Wallet. In Asia, [Singapore](https://www.biometricupdate.com/202207/singpass-incorporates-digital-identity-card-saves-36-per-onboarding-considers-decentralization "https://www.biometricupdate.com/202207/singpass-incorporates-digital-identity-card-saves-36-per-onboarding-considers-decentralization") has expressed interest in building a Verifiable Credential ID Wallet. In the Caribbean, [Jamaica](https://www.biometricupdate.com/202206/jamaica-greece-advancing-digital-id-plans-with-biometrics-capture-pilot-digital-wallet "https://www.biometricupdate.com/202206/jamaica-greece-advancing-digital-id-plans-with-biometrics-capture-pilot-digital-wallet") has been advancing in developing an ID Wallet.

There’s a strong momentum surrounding the concept within governments – so much so that Gartner has advanced its position in the 2022 Hype Cycle for Digital Government Services. Currently, it stands in the “Peak of Inflated Expectations,” which reflects the numerous pilots being performed at a global level while still leaving room for the necessary progress that still must be done to achieve market maturity.

![](/static/images/gartnerhypecycle_egov_2022.jpeg)

### Web3

The Web3 sector, which includes the concepts of NFTs, Decentralized Finance, and the Metaverse, has rapidly been gaining popularity. Many platforms interact with Wallets, specifically for storing cryptocurrencies or NFTs. 

But while Web3 projects rapidly advanced the performance of their technology and enhanced its usability, it has been lacking an identity layer: a secure, privacy-preserving, and user-friendly way for users to access these Web3 services and manage their digital assets. 

This is where ID wallets meet the needs of the market. This is especially important given the high and ever-increasing rates of hacks aimed at identity fraud in Web 3 platforms.

## What’s the expected evolution of the Digital ID Wallet?

Digital ID wallets are still in their early stages and are still missing mass user testing, yet we are already seeing specific changes take place as we come closer to reaching the public.

Currently, most digital ID wallet providers and projects are focusing on perfecting the privacy, security, and accessibility of identity documents. This is essential, especially since user data is extremely sensitive, and being able to properly deal with it takes time.

However, as in a physical wallet and based on user needs, we believe that digital ID wallets shall evolve into SuperWallets: digital wallets that combine in one single app **payments** (both traditional and crypto), **management of digital assets** (like Securities or NFTs), **digital signatures**, **and** **identity** information.

**Payments**: it is only natural to link payments with identity, for a reason the term wallet is subconsciously associated with money. Most transactions between individuals and service providers not only require identification but also requires payment in exchange for the service. Adding payment capabilities to ID wallets would both streamline the end-to-end user journey and increase the usefulness of ID Wallets, hence contributing to their mass adoption.

**Management of Digital Assets**: Web3 has popularized the concept of a vault for an individual’s digital assets, which may be cryptocurrency, security tokens, utility tokens, or NFTs. As such, a SuperWallet is expected to include not only payment capabilities but also storage and management capabilities of digital assets other than money.

**Digital Signatures**: we said that the user journey in any digital transaction involved identification of the consumer and payment for the service, but we omitted that buying/using such service often implies an agreement between the parties. Many agreements require a legally-binding digital signature, one that shall be strongly related to the individual’s identity, so we’ll surely see this functionality added to ID Wallets. This is one of the main functional requirements for the [EUDI wallet](https://gataca.io/blog/the-eudi-wallet-architecture-reference-framework-in-plain-english "https://gataca.io/blog/the-eudi-wallet-architecture-reference-framework-in-plain-english") anticipated in eIDAS v2.0.

## What type of Wallet should I offer my users?

![](/static/images/idwallets_selectionflow.png)

Governments and corporations have a variety of options when it comes to choosing a Digital ID Wallet for their organizational scope. Because the EUDI Wallet issued by governments under eIDAS v2.0 will be allowed for use in the private sector and will even be mandatory for private corporations providing services where strong user authentication for online identification is required, it is natural to think that such eIDAS-certified Wallets provided by national governments will predominate in the market.

However, not all organizations will require eIDAS-certified wallets, and we foresee a good number of use cases in the private sector where non-eIDAS-compliant ID Wallets will flourish (e.g., an ID Wallet for the Metaverse). On the other hand, such government-provided wallets can be constructed in several ways according to eIDAS v2.0, including the option to:

**a) develop the wallet from scratch,**

**b) mandate the development/issuance to a specific organization, or**

**c) recognize independent wallet(s) based on a certification process.**

Based on market trends and priorities, scenarios b) and c) may very well become the most popular option in many countries, particularly given option c) encourages competitiveness on security and usability.

Shall a government or a corporation decide to **develop its own wallet**, it could execute the task from scratch (either with internal resources or subcontracting the development efforts) or leverage existing Wallet SDKs. 

Entities who choose this path will likely experience longer time-to-market, high maintenance and support costs - and possibly worse usability. On the bright side, these entities would be able to customize the product offering to the very last detail.

Shall a government or a corporation decide to **leverage an existing ID wallet**, they can either white label an existing wallet (if the tech provider offers that option), or recognize/certify ID Wallets already in the market, which are typically available for free to the end users. 

Either way, the decision shall revolve around the protocols, regulations, and trust frameworks needed to comply with the use case. Existing ID wallets may be SSI compliant, integrated with EBSI and/or eIDAS certified, where these features are not mutually exclusive:

![](/static/images/typesofwallets.png)

1. **SSI Wallets**: There are many SSI providers in the market that have built fully-functioning Digital ID Wallets ready to be downloaded on the App store. SSI Wallets power users with [Decentralized Identifiers (DIDs)](https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs "https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs") and allow users to request, store, and share [Verifiable Credentials](https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs "https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs") in a simple, secure, and privacy-preserving manner. They can also follow other specification frameworks such as eIDAS and EBSI. When choosing an SSI Wallet provider, it is important to understand what DID methods they support and what exactly they store in the blockchain network, in the device, and the cloud.
2. **EBSI-conformant Wallets**: Using[ EBSI-conformant wallets](https://ec.europa.eu/digital-building-blocks/wikis/display/EBSI/Conformant+wallets "https://ec.europa.eu/digital-building-blocks/wikis/display/EBSI/Conformant+wallets") enables entities to be interoperable with other EBSI-conformant wallets, enabling efficient cross-border services within Europe. These Wallets follow a specific technical and standardization framework provided by EBSI to enable such interoperability and leverage the EBSI network to query Trusted Registries of Issuers and Schemas.
3. **eIDAS-certified Wallets**: eIDAS 2.0 includes launching a EUDI Wallet framework, where the technical and legal specifications are still in progress. There is no mention that blockchain technology _must_ be used, but it _could_, so it is up to the specific government entity to choose if their national/certified Wallets can also be EBSI-conformant. It is expected that many SSI & EBSI-conformant wallets that play in the European market will adapt to eIDAS 2.0 specifications for greater interoperability chances.
4. **Other Wallets**: these may include solutions built by large corporations or KYC providers in a centralized fashion.

## Get to know the GATACA Wallet

The [GATACA Wallet](https://www.youtube.com/watch?v=Q2HU49Lx8Og "https://www.youtube.com/watch?v=Q2HU49Lx8Og") is one of the first EBSI-certified SSI Wallets in Europe and is globally recognized for its compliance, interoperability, and usability. 

The Wallet offers users the secure storage and management of Verifiable Credentials right from their phone, allowing them to request, store, and send VCs in seconds. As of today, there are multiple key European institutions in the government, education, and financial services sectors testing GATACA’s Wallet and technology stack and leveraging its one-click, compliant identity verification functionalities.

Curious? **Download the GATACA Wallet** for free & playing around with it - available on [IOS](https://apps.apple.com/us/app/gataca/id1498607616 "https://apps.apple.com/us/app/gataca/id1498607616") & [Android](https://play.google.com/store/apps/details?id=com.gataca.identity "https://play.google.com/store/apps/details?id=com.gataca.identity").

**Get started with Gataca Studio** - If you're curious to see the benefits of our technology on your workflows today, [get started for free here](https://studio.gataca.io/login).