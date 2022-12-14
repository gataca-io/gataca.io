---
date: 2021-07-22T10:12:05.000+00:00
meta_data:
  title: The impact of the new eIDAS proposal on the SSI community
  description: While the proposed revisions are positive for Self-Sovereign Identity
    (SSI), it is important to analyze its potential effects, opportunities, and threats.
  rrss_images:
    twitter: "/static/images/eidas-proposal-european-commission-post.jpg"
    facebook_and_whatsapp: "/static/images/eidas-proposal-european-commission-post.jpg"
    linkedin: "/static/images/eidas-proposal-european-commission-post.jpg"
title: The impact of the new eIDAS proposal on the SSI community
author: ''
hero_image: "/static/images/eidas-proposal-european-commission-post.jpg"

---
On June 6th, 2021, the European Commission announced the launch of a European Digital Identity together with an improvement proposal to the current eIDAS regulation in response to the announcement made by the President of the European Commission the previous year. 

eIDAS stands for "electronic IDentification, Authentication and trust Services" and refers to a regulation in the European Union that sets standards for electronic identification and trust services for electronic transactions in the internal market.

Self-Sovereign Identity (SSI) principles are all over the new eIDAS proposal. However, its technology-agnostic nature shreds doubt whether [ESSIF, the European SSI framework](https://essif-lab.eu/), will become the technology framework of choice for governments.

In the new proposal, not only will all Member States be _obliged_ to provide certified digital wallets to citizens, but businesses will also have to accept them as forms of identification, opening up the applications of government-issued digital identities to the private sector. 

In this article, GATACA dives deeper into the new eIDAS revision and explores the potential opportunities and threats this proposal may bring to the SSI community in six key points. 

Now, let’s get into the specifics. While we can all agree that the proposed revisions bring hope to the development and adoption of SSI in Europe, one where citizens can control how their data is being used, it is important to take a step back and analyze its potential effects on the wider SSI community which include SSI technology providers, businesses, issuers of verifiable credentials, and citizens.

_Please note the new eIDAS regulation proposal is currently under revision by the Member States and is subject to change._

## **Key point #1**: All EU Member States must provide a digital wallet to their citizens

**Where**: Article 6a

> “The draft Regulation requires Member States in Article 6a to issue a European Digital Identity Wallet under a notified eID scheme to common technical standards following compulsory compliance assessment and voluntary certification within the European cybersecurity certification framework, as established by the Cybersecurity Act \[…\]
>
> European Digital Identity Wallets shall be issued:
>
> (a) by a Member State;
>
> (b) under a mandate from a Member State;
>
> (c) independently but recognised by a Member State."

A Member State could therefore choose one of three paths: to provide their own Wallet, either via (a) an in-house development or (b) mandating the task to a specific (public or private) Wallet provider, or (c) creating an open market for private Wallet providers and certify some solutions.

**Opportunity.** Shall the Member State choose option (c), it would effectively open up the Wallet provider market to all types of high-quality providers and close it up to those who do not offer the required security or quality. 

This, in turn, would trigger competition between wallets from specialized technology companies and big tech companies to offer the best user experience, privacy, and security features. 

Option (c) would be the best one to stimulate the nascent market of existing SSI wallet providers worldwide, who have been leading in developing tools and contributing to the definition of standards and technology frameworks.

**Threats**. **Opting for path (a)** would cut down market expectations. The threat exists should governments focus efforts and invest heavily on promoting their own wallet, leaving little space for citizen agency. 

This scenario also raises a critical concern. If the SSI community, which strongly focuses on interoperability, is substituted by government-led national initiatives, how can we ensure interoperability beyond the confinements of Europe and even among Member States? 

Interoperability is a long-term bet, one that the SSI community has been working on for over four years now, and it’s still in its early stages. How can we expect to achieve interoperability when Member States shall deploy their solutions in under 24 months from the adoption of the new Regulation? In this case, we could expect that the mandatory mutual recognition would be met via more complicated technology frameworks (as opposed to standards-based interoperability), and, as we learned from the current eIDAS implementation, this approach does not lead to massive adoption.

**Option (b)**, which offers a middle ground, has disadvantages too. Under the best scenario for SSI Wallet providers, in which Member States decide or need to conduct the mandate through a public tender process and not by assigning it to a hand-picked organization, it is only logical to think that only larger companies with resources - and contacts - will be able to win these public contracts.

Lastly, **option (c)**. While most participants in the SSI community would point to this option as their preferred choice, it does not come without risks for them. In this scenario, specialized providers (i.e., all SSI technology startups) will still have to earn the “EU Digital Identity Wallet Trust Mark,” which is great and necessary. 

However, if this process is designed in such a way that it is not easily accessible (cost and resource-wise) to these small, innovative technology companies, we may as well be handing over this market to the large online platforms the Regulation is trying to defend citizens from in the first place.

## Key point #2: The creation and verification of verifiable credentials (referred to as electronic attestations of attributes in the Regulation) and the registry of electronic data in a DLT are now regulated Trust Services.

**Where**: Article 3, Point 16.

> "‘trust service’ means an electronic service normally provided against payment which consists of:
>
> (a) the creation, verification, and validation of \[…\] electronic attestation of attributes and certificates related to those services; \[…\]
>
> (f) the recording of electronic data into an electronic ledger.’;"

**Opportunities**. Categorizing these services as Trust Services incentivizes Issuers from both the public and private sectors to generate Credentials following a common regulatory and technical framework and to leverage blockchain technologies. 

This sets up the required regulatory framework by infusing trust in the market for the use of Verifiable Credentials and blockchain networks, as these can **no longer be denied legal effect because it is in an electronic form or it does not meet the requirements for qualified electronic attestation of attributes or for qualified electronic ledgers.**

Moreover, the regulation of blockchain networks and their use for the recording of electronic data with legal effect is a giant leap towards the proliferation of production-ready use cases as opposed to pilots and press-oriented projects.

To Europeans, this means that EBSI, the European blockchain network led by the European Commission, just got a legal framework to become THE blockchain for public services.

**Threats**. Every coin has two sides. If one creates a blockchain network on their own and registers data on it, will this data have legal validity? Not necessarily, but it definitely cannot be denied legal effect because it is in a proprietary blockchain network. 

The proposal, therefore, opens up the opportunity for non-qualified credentials issued by an ill-intentioned organization linked to registered data on a non-qualified private blockchain controlled by that same organization to have a legal framework - an excuse - to demand legal effect in court. 

Another aspect worth highlighting is the decoupling of the EU Wallet from the issuance of verifiable credentials. One may conclude from the Regulation that Verifiable Credentials could be issued by any provider, but that provider does not necessarily have to make these credentials compatible with EU Wallets. 

As a result, we could imagine organizations from both the private and public sectors willing to keep some kind of control over issued credentials and make them only available via their own Apps or Websites. This would indeed hinder the potential of EU Wallets to become the single, user-controlled repository of all our personal information.

The EU Wallet and issuance of electronic attestations are also decoupled from the blockchain trust service, throwing strong uncertainty as to whether EBSI and ESSIF are intended to become the technological framework for the European Digital Identity.

## **Key point #3:** The wallet will be allowed for use in the private sector and will be mandatory for private relying parties providing services where strong user authentication for online identification is required (including large online platforms).

Where: Article 12b

> "Where private relying parties providing services are required by national or Union law, to use strong user authentication for online identification, or where strong user authentication is required by contractual obligation, **including in the areas of transport, energy, banking and financial services, social security, health, drinking water, postal services, digital infrastructure, education or telecommunications**, private relying parties shall also accept the use of European Digital Identity Wallets issued in accordance with Article 6a.
>
> Where very large online platforms as defined in Regulation \[reference DSA Regulation\] Article 25.1. require users to authenticate to access online services, they shall also accept the use of European Digital Identity Wallets issued in accordance with Article 6a strictly upon voluntary request of the user and in respect of the minimum attributes necessary for the specific online service for which authentication is requested, such as proof of age."

**Opportunity:** Adoption is all that matters. We could design the most secure, privacy-preserving, user-friendly identity framework, but if it can only be used in limited cases, it will be a good-for-nothing Regulation. 

One of the key success factors for Estonia’s eID system (watch our Ask The Expert series on the subject [here](https://gataca.io/insights/video-gataca-asks-the-expert-priit-martinson-on-estonia-s-digital-transformation "https://gataca.io/insights/video-gataca-asks-the-expert-priit-martinson-on-estonia-s-digital-transformation")) was the involvement of the private sector early on, particularly the banking industry. 

Making the EU Wallets not only mandatory for Member States to provide but also for critical industries in the private sector to accept is certainly one of the greatest hopes for its success. 

This provision is particularly interesting to SSI providers, as it **guarantees a market.** All industries will be forced to accept the use of EU Wallets for authentication and may also seize an opportunity to offer the issuance of Credentials as a new revenue stream. For those purposes, they’ll demand technology and/or services currently provided by specialized SSI companies, potentially leading to mergers and acquisitions and a clearer exit strategy for investors.

## **Key point #4:** European countries can accept Credentials from abroad without needing peer agreements.

**Where**: Article 12c, 14, 24

> "Article 12c. “Where electronic identification \[…\] is required under national law or by administrative practice to access an online service provided by a public sector body in a Member State, the electronic identification means, issued in another Member State shall be recognised in the first Member State for the purposes of cross-border authentication for that online service, provided that the following conditions are met \[…\]”
>
> Article 14 - “\[…\] trust services provided by providers established in the third country concerned shall be considered equivalent to qualified trust services provided by qualified trust service providers established in the Union.’;
>
> “The provisions on the use of remote means of identification have been harmonised and clarified in order to ensure that the same rules are applied across the EU” as amended in Article 24.

**Opportunities**. Member States no longer need to establish a lengthy bilateral process to enable mutual recognition between two or more countries, which was one of the main stoppers for broad eIDAS adoption in cross-border use cases. 

With the new provisions, **a certified wallet and qualified Trust Services for electronic attestations will be enough for a Member State to accept identity attributes from abroad, including non-EU countries**, as long as the necessary assurance levels for electronic identification are met.

Furthermore, the ways in which remote identification can be executed have been harmonized, breaking the national silos that made cross-border interoperability a technological nightmare.

What does this mean for the SSI community? Easier interoperability and an even broader market. SSI technology providers will not need to build complex, ad-hoc solutions for each country but focus on compliance with the regulation that opens its solution for all Member States at once. 

**Threats**. Bigger market opportunities come with bigger competition. These provisions open the opportunity for better-funded US-based companies to enter the European market. Will the EU entrepreneurship & innovation ecosystem survive in its own playing field? Advanced non-EU wallet tech providers may enter the EU market sooner than foreseen, especially if SSI regulations in their home countries are lagging.

A brighter view of this issue could benefit EU wallet providers should regulation in non-EU countries prosper soon. If EU wallet providers are born requiring to be issued under a notified electronic identification scheme of the level of assurance ‘high’, EU wallet providers could hold a competitive advantage in non-EU countries, as both users and service providers will most likely have a preference towards wallets with higher levels of trustworthiness and assurance.

## **Key point #5:** All wallets must technically enable selective disclosure of attributes to relying on parties

**Where**: Point (29)

> “The European Digital Identity Wallet should technically enable the selective disclosure of attributes to relying parties. This feature should become a basic design feature thereby reinforcing convenience and personal data protection including minimisation of processing of personal data.”

**Opportunities.** Selective disclosure is a core design principle for SSI and reflects the influence that SSI frameworks had over the new Proposal. The great news is that this provision strengthens the arguments in favor of selecting ESSIF as a technical framework for this Regulation.

**Threats**. Although there is already a Community group [draft report on Data Minimization published in the W3C](https://w3c-ccg.github.io/data-minimization/ "https://w3c-ccg.github.io/data-minimization/"), there are not yet standard approaches or specifications for its technical implementation, neither within the proposed Regulation nor the SSI community at large.

An elegant and efficient way to implement selective disclosure is with the use of Zero Knowledge Proof (ZKP) combined with multi-claim credentials, provided we find a way to reduce its computationally expensive nature and the complexity of its implementation and algorithmic review. 

However, no policy framework supports ZKP, making it not legally binding proof for identity verification. As such, SSI providers with a strong focus on legal compliance are either not supporting selective disclosure mechanisms or implementing mono-claim credentials, as is the case of GATACA, in an attempt to offer a temporary solution in exchange for higher complexity at the UX design level.

Unless the Regulation comes with clear and concise specifications for this aspect, we risk the achievement of interoperability at the international level.

## **Key point #6:** Wallets must enable the storage of qualified and non-qualified credentials and allow signatures with Qualified Electronic Signature.

**Where**: Article 6a (b)

> “European Digital Identity Wallets shall enable the user to:
>
> (a) securely request and obtain, store, select, combine and share, in a manner that is transparent to and traceable by the user, the necessary legal person identification data and electronic attestation of attributes to authenticate online and offline in order to use online public and private services;
>
> (b) sign by means of qualified electronic signatures.sign by means of qualified electronic signatures.”

**Opportunities.** So far, the SSI industry has merely focused on the first point, developing standards and technology for creating, verifying, and storing Verifiable Credentials. The added compulsory feature of qualified electronic signatures accelerates the provisioning of value-added services and the usefulness of wallets in daily activities, such as the signature of documents. This simplifies the life of citizens that cannot currently rely on an electronic signature for many legal procedures in their jurisdiction.

It also broadens the concept of ID Wallet to more than a personal data vault; it glimpses the intentions to create a powerful tool, a single personal key for the Internet. As such, the logical evolutionary step would be to expand the wallet features to the storage and management of digital money, which may include or not cryptocurrencies, therefore creating very attractive diversification opportunities for wallet providers.

**Threats**. Jack of all trades, master of none. Biting off more than one can chew is an alarming signal of failure. Starting off an identity solution with more features than is strictly necessary only increases complexity in an already complex endeavor. The need to include qualified electronic signatures to offer a certified EU Wallet will likely trigger mergers and partnerships between e-signature tech and ID wallet providers and delay the release of market-ready products.

## SSI in action with Gataca Studio

The new proposal has pumped up the SSI community’s spirits as the market’s uncertainty veil seems to be disappearing. 

The new proposal and EU Digital Wallet are expected to be approved and launched in the spring of 2024, so the countdown has started, with governments and businesses already preparing for it by looking for solutions aligned with the new regulation. 

If this is your case, start testing and experiencing Self-Sovereign Identity technology with our all-in-one platform, [Gataca Studio](). 

***

**Start for free in Gataca Studio** - Create, validate, and digitally sign identity credentials and verify users in seconds. [Free trial here](https://studio.gataca.io/login). 

**Download the GATACA Wallet and start being in control of your data -** Securely store identity credentials and manage access to these right from your phone (Available on [IOS](https://apps.apple.com/us/app/gataca/id1498607616 "https://apps.apple.com/us/app/gataca/id1498607616") & [Android](https://play.google.com/store/apps/details?id=com.gataca.identity "https://play.google.com/store/apps/details?id=com.gataca.identity")).

**Stay in the loop -** Keep yourself updated on Gataca developments and how digital identities will transform our digital lives by [subscribing to our newsletter](https://4728390.hs-sites.com/subscription).

**Chat with us -** We’d love to chat with you. Let us know your thoughts on this topic or anything Digital Identity-related. Join our [Telegram ](https://t.me/digitalidentityinsights "https://t.me/digitalidentityinsights")group.

**Sources:**

* [Amending Regulation (EU) No 910/2014 as regards establishing a framework for a European digital Identity (eIDAS Draft).](https://ec.europa.eu/info/strategy/priorities-2019-2024/europe-fit-digital-age/european-digital-identity "https://ec.europa.eu/info/strategy/priorities-2019-2024/europe-fit-digital-age/european-digital-identity")