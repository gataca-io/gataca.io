---
date: 2021-11-29T13:58:41.000+00:00
meta_data:
  title: 'SSI Essentials: Everything you need to know about Decentralized Identities'
  description: Get caught up with the technology that will change the way we interact
    online, in less than 15 minutes.
  rrss_images:
    twitter: "/static/images/identity_architectures_history_2.png"
    facebook_and_whatsapp: "/static/images/identity_architectures_history_2.png"
    linkedin: "/static/images/identity_architectures_history_2.png"
title: 'SSI Essentials: Everything you need to know about Decentralized Identity'
author: ''
hero_image: "/static/images/identity_architectures_history_2.png"

---
_11 min read_

Every 60 seconds a person’s online identity is hacked or stolen. We hear these statements often, but what does it really mean to get hacked in this context?

Basically, the credentials you use to authenticate yourself online (in most cases usernames and passwords) are in the hands of a cybercriminal. The bigger problem is that these credentials give these criminals access to your accounts, and these accounts have access to a ton of your personal information (name, address, credit card…etc). As a result, when a hacker gets access to your authentication credentials, they have the key to your data and can impersonate you to commit credit card, tax, bank, and other types of fraud.

We often think of this as an external occurrence, something that happens but never to you. Yet in our increasingly digital world, identity theft is surging at an alarming rate and traditional identity architectures on the internet are to blame.

Self-sovereign identity (SSI) is a nascent technology that aims to give users back control of their data, and not only solve this cybersecurity issue, but also make users' day-to-day life easier.

In this article, we aim to provide an overview of the SSI from history to technology to future outlook. Follow along!

## Solving the identity paradox: the tradeoff between privacy, security, & user experience

Let’s take a step back: have you ever thought about what’s happening to your data right this moment? Think of the hundreds of accounts you’ve created throughout your lifetime and the personal information you provided these businesses: full name, birth date, address, credit card number, home address, Facebook account,…etc. Currently, these businesses store and manage your information in their databases, and you have no control over what they do with it and who they share it with. Spooky, huh?

The aforementioned methods of authentication (usernames, passwords, handing over your personal information into a corporate abyss) are based on **centralized models**, characterized by users having to give up their personal information repeated times without control. These models are not just an inconvenience for users, but for organizations as well. Public and private entities concentrate millions of records and sensitive user information in their databases, making them very attractive targets for hackers. Consequently, these organizations must invest millions of Euros in security systems, GDPR compliance, and very complex authentication processes to combat cyberattacks and identity fraud. Despite these investments, should a cybersecurity attack occur, businesses are left with high fines and a damaged reputation.

**_To date, no identity system has been able to resolve the tradeoff between privacy, security, and user experience._**

Big tech companies attempted to tackle all three issues by developing **federated models of identity management**: single sign-on authentication methods such as those of Google or Facebook (ie. “Log in with Google”). With federated models, users delegate their identity management to big techs, who receive the power to manage our access to third-party services (ie. Google manages your access to Spotify), while accumulating more and more information about our consumer profile (now Google has access to your Spotify data & behavior). On one hand, this model can drastically improve user experience by allowing users to instantly sign up through their established service accounts, but on the other, it **exacerbates privacy and security risks by further centralizing user data in their databases.**

**Then comes the self-sovereign identity (SSI)**, or decentralized identity, paradigm, a new era of trust. The father of the SSI concept, Christopher Allen, refers to SSI as a new sort of identity based on individual control and human rights ([Coindesk](https://www.coindesk.com/policy/2021/04/26/self-sovereign-identity-5-years-on/)); **essentially, it promises to give users back control of their data, and businesses peace of mind.** How is this possible? Decentralized technologies have provided the foundation to develop a novel, trust, and global authentication layer for the internet and revolutionize digital relationships and interactions between individuals, organizations, and things.

**_This user-centric identity model enables users to manage their personal information and access all digital services via one single identity, password-free._**

(More on passwordless authentication [here](https://gataca.io/blog/passwordless-the-model.ssi-the-method))

![](/identity_architectures_history.png)

## The SSI ecosystem & trust triangle

Digital relationships and transactions rely upon trust, but with the abrupt launch into a fully digital world due to COVID-19, this trust has weakened as traditional authentication methods became less reliable. In an effort to limit identity fraud, businesses need to request more and stronger proofs of identity (scans of ID documents, second-factor authentication codes, dedicated authentication apps, etc.) and users suffer more complex onboarding processes.

**SSI attempts to re-establish this trust by increasing security without compromising user experience or privacy.** In doing so, the model proposes new methods of interactions and categorizes agents into three main groups: Issuers, Users (or Holders), and Verifiers.

Below we define the roles of these agents:

* **Issuers**: Entities that are authorized to issue specific Identity credentials such as universities (issuing student IDs and academic diplomas), governments (national IDs, driver’s licenses, passports, birth certificates, certificate of car ownership), financial institutions (credit scores), hospitals (medical records), employers (employee cards), etc.
* **Users (holders)**: Individuals or organizations subject of such Identity credentials (that’s you!). That is, the credential owners who store, manage, and share these credentials through the use of a digital ID Wallet.
* **Verifiers**: Verifiers are service providers that require identity verification and authentication for access to their services (ie. banks, retail stores, insurance companies, hospitals, universities, etc). An example of a Verifier is an employer that asks Alice for an authentic Academic Diploma for job qualification.

Now that we have the players and their roles have been established, let’s explore the backbone of the SSI technology: Blockchain (or Distributed Ledger Technologies, DLTs), DIDs, and VCs.

## The Backbone of SSI: DIDs, and VCs and Blockchain

Decentralized computing architectures provide the backbone to the ground-breaking SSI technology that transfers control of private information to the end users. **For the first time, a solution combines the simplicity and usability of single sign-on technologies (such as those of Google or Facebook) with advanced cryptography and blockchain technologies to provide government-grade secured access to digital services.** DIDs and VCs are two fundamental standards of SSI technology established by the World Wide Web Consortium (W3C), an international organization that generates recommendations and standards for the internet. Both concepts, together with blockchain technology, make up the powerhouse of SSI.

**A brief intro into DIDs & VCs**

In real life and online, users need to _identify_ themselves and do so through _identifiers_, which can be passport numbers, usernames, emails, telephone numbers, and more. In today’s world, these identifiers are issued and registered by centralized bodies such as government agencies, email providers, and telecommunication providers. Decentralized Identifiers are just that, decentralized, portable identifiers that are not tied to any centralized registry or identity provider, rather they pertain to the owner or subject and are registered in a Distributed Ledger Technology (DLT) or Blockchain. In an SSI ecosystem, every agent is identified by one or more DIDs; that is, Issuers, Users, and Verifiers are all represented by one or more DIDs.

Similarly, Verifiable Credentials (VCs) enable users to finally have trustworthy, tamper-proof, and machine-verifiable digital identity documents. Think of your passport in a secured, digital ID wallet that you can use to travel, or a digital academic diploma that you can use to apply for a job application without having to personally request the university’s administration to issue an “authentic version” every time a new entity requests it from you. Goodbye administrative headaches! More on DIDs and VCs [here](https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs "https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs").

**The role of Blockchain and Distributed Ledger Technologies (DLTs)**

Blockchain/DLTs connect the SSI ecosystem through simple activities: storing DIDs and enabling decentralized public key infrastructures (PKIs). PKIs are composed of a set of cryptographic keys, a public key (stored in the blockchain) tied to a private key (stored by the user on their phone); this setup allows entities to verify the legitimacy and ownership of verifiable credentials. If one sends a credential claiming it was signed (issued) by an Authority, only the Authority’s public key published on the blockchain will verify such signature. Otherwise, it was not the Authority who signed it.

Unlike private keys, public keys are stored in the blockchain enhancing their resistance, resilience, and integrity. By being stored in the blockchain, they are always readily available for when an entity or individual needs to use it to validate signatures made with the associated private key.

The diagram below illustrates the triangle of trust and the components that go along with it.

![](/vc_trust_triangle.png)

## SSI product suites: what do they look like?

Naturally, SSI-based identity technology products are what power the trust triangle’s transactions. In today’s nascent SSI market, a complete decentralized identity solution should be composed of at least three components:

* **Credential issuance** **tool** (for Issuers): enables Trusted Authorities (governments, universities, banks) to issue VCs; that is, to create VCs, attest to their authenticity and ownership using cryptographic signatures, transfer these VCs to a subject/user, and manage their status lifecycle including revocation mechanisms.
* **ID Wallets** (for users)**:** Allows users to store and manage identity credentials (VCs) and seamlessly authenticate in digital services. Through ID wallets, users can sign up and sign in to digital services by consenting to share specific Verifiable Credentials from the Wallet and revoke such consent at any time from the Wallet.
* **Single sign-on (SSO) authentication tool** (for Verifiers): Provides Service Providers with single-sign-on authentication and credential verification tools. These tools enable the use of ID wallets as an authentication method and to verify the authenticity, integrity, and ownership of shared VCs. Communication between the Verifier’s Interface and the User’s wallet happens typically by scanning QR codes

Below you can visualize GATACA’s full-stack product suite which includes each of the aforementioned components and how each product relates with each SSI agent (a real-life technology version of the trust triangle).

![](/gataca_product_suite.png)

## Benefits: short term vs. long term

A user-centric Digital Identity model has extensive benefits for individuals and businesses alike. In the short term, the implementation of Decentralized Identities lays down a means to reduce administrative and compliance costs as well as operational costs related to security for public administrations and online service providers. Some of the benefits of implementing SSI technology include:

* **Decreased Identity fraud (identity theft)** through the elimination of centralized databases & passwords and with the introduction of tamper-proof verifiable credentials and government-grade secure ID Wallets.
* **Improved conversion rates/reduced onboarding abandonment rates** through one-click onboarding and authentication processes that enhance customer experience. Customers forget about lengthy Know-Your-Customer (KYC) forms that force them to manually fill in the required information.
* **Increased efficiency** for organizations as resources are no longer used to manually verify individual credential authenticity and legitimacy. For example, university administrative staff no longer need to manually and physically verify that the applicant’s degree is legitimate.
* **New revenue streams** (for governments and universities) with the issuance of verifiable credentials such as eIDs and digital academic diplomas and transcripts.
* **Boosted privacy & security** through the use of advanced cryptography and blockchain technology.

Nonetheless, the SSI vision and philosophy goes beyond instant benefits for the economy, and in the long term, aims to provide a solution to the 1 billion people who do not have any type of identification and the 3.4 billion without a digital self.

## Use cases

SSI technology applications are unlimited. Think about it: in our increasingly digital world, every single industry needs to authenticate users, clients, citizens, employees, or providers. Digital transformation is beyond a reality and SSI helps make it a sustainable one.

![](/use_cases.png)

### The pioneers

Given the regulatory and technological landscape, the current SSI industry pioneers are governments, universities, and banks. With this technology, **governments can issue easy-to-use, hyper-secure digital ID documents for citizens as well as authenticate them instantly into eGov services,** a process that has been lacking usability for decades. Furthermore, these eIDs can also be used to access any other private service (such as banking, education, or healthcare), making SSI a key driver of digital transformation and economic growth.

Similarly, **universities are implementing SSI in their digital and physical ecosystem to take their innovation game to the next level and attract a larger student base**. These entities are pioneering use cases such as the issuance of student IDs, academic diplomas, micro-credentials, transcripts, etc. These credentials enable instant student authentication in digital campuses, access to buildings/labs, fast-tracked application processes, easier implementation of exchange programs, and so much more.

SSI has the potential to **revolutionize the financial industry through eKYCs, one-click customer onboarding, and instant credit/loans**. Identity fraud risk and KYC regulation in the banking sector results in complex and long user onboarding processes, while conversion rates drop. Those days will soon be long gone. With SSI, customers will now be able to share previously verified and cryptographically signed identity documents with their banks, and experience instant, user-friendly onboarding in seconds (rather than days).

### Follow-up sectors

When we mentioned that SSI applications were unlimited, we meant it. Other potential use cases include:

* **DeFi/Crypto**: SSI can provide this sector with a layer of trust for users, providers, and regulators in the form of eKYC for crypto/ICOs and instant, compliant, and secure onboarding into crypto/DeFi platforms, without compromising its decentralization principles.
* **Travel**: In addition to Covid health passes, the integration of SSI technology in the travel industry has the potential to enhance traveler experience and boost sector recovery. Digital identities provide benefits such as automatic airport security, fast airline check-in, and instant hotel check-in thanks to the issuance of globally recognized digital passports, boarding passes, and travel visas.
* **Healthcare**: For Healthcare providers, our technology offers more efficient and secure access & management of patient data. Healthcare providers can issue digital health credentials that patients store in a digital Wallet, where they control who these are shared with, hence easily complying with HIPAA, GDPR, and similar health-data regulations. Credential types range from Covid health condition certificates, vaccination records, insurance cards, or any other type of medical record.
* **Corporations**: Businesses can now issue digital employee cards to employees or authorized partner certifications to suppliers, who in turn use these to enjoy frictionless access into company systems and/or buildings. Businesses can also leverage our technology to issue credentials to their clients such as membership & loyalty cards and provide a unique, stress-free customer journey.
* **Real Estate**: In the real estate sector, secure identity verification is essential, however current methods demand too many resources and rely on antiquated methods. SSI technology allows users to instantly and securely verify their identities in seconds which optimizes and secures online or P2P buy/sell and renting situations and makes building access more efficient.

## Market Dynamics

The SSI market has three types of players: standardization bodies, regulatory bodies, and technology providers.

**Standardization** is extremely important in the industry to guarantee interoperability between technology providers and in order to achieve scalability at a global level and mass adoption. Many organizations continue to contribute in the area of SSI including [W3C](https://www.w3.org/ "https://www.w3.org/"), [DIF](https://identity.foundation/ "https://identity.foundation/"), and [RWOT](https://www.weboftrust.info/pastevents.html "https://www.weboftrust.info/pastevents.html"), but also technology providers such as GATACA who’s leading the [Verifiable Universal Interface](https://gitlab.grnet.gr/essif-lab/interoperability/verifierapis "https://gitlab.grnet.gr/essif-lab/interoperability/verifierapis") interoperability initiative.

Likewise, **regulatory bodies** are essential to establish a common ground for governance for public and private sectors implementing SSI technologies. The most advanced regional regulator in SSI at the moment is the European Commission, which has been working on establishing a European Self-Sovereign Identity Framework (ESSIF) to develop core technical and legal specifications to promote an SSI market in the region, and has launched initiatives such as the Early Adopters Program to incentivize European nations to develop cross border use cases.

Of course, at the core of SSI, we have the **technology providers**. In the past couple of years, the SSI space has experienced an exponential increase in emerging players, which as a consequence has increased market saturation across all continents. While SSI tech providers have the common goal of giving users back control of their data, there are notable differences in different business models, technical implementations, and industry targets.

![](/ssi_value_chain.png)

### Recent Progress in Europe

Due to the European Commission’s commitment towards digital transformation and blockchain use cases, Europe has positioned itself as one of the most advanced regions globally for SSI.

The European commitment took a firm step towards digital identity on June 3, 2021, with the announcement in a press release by the Vice-President of the European Commission, Margrethe Vestager, and the Commissioner for the Internal Market, Thierry Breton, who announced the construction of a single European digital identity and for this purpose presented a proposal to amend the eIDAS regulation fully aligned with the principles of decentralized identity. The proposed modification of the eIDAS regulation was born in response to the mandate of the EC President (Ursula Von Der Layen) on September 16, 2020, where she announced the need for a new form of European identity [(we break down the proposal for you here](https://gataca.io/blog/here-s-what-the-new-eidas-proposal-really-means-for-the-ssi-community-in-6-key-points "https://gataca.io/blog/here-s-what-the-new-eidas-proposal-really-means-for-the-ssi-community-in-6-key-points")).

This announcement triggered several key announcements in favor of SSI by strategic Member States: on July 29, 2021, the Spanish and German governments announced a cooperation pact for the development of a decentralized, cross-border digital identity ecosystem based on the principles of self-sovereign identity. On September 22, the Finnish government joined the coalition by signing another collaboration pact and a day later, on September 23, 2021, the Dutch government also joined the coalition in another communiqué.

The growing interest of governments and companies in this solution has favored the emergence of startups and corporate initiatives in an increasingly complex competitive map.

## Future outlook

Self-sovereign identity technologies have the potential to become the linchpin of economic growth. If we think about it, all businesses need to authenticate their users, and with the exacerbation of digital transformation, the need to securely and efficiently authenticate users has become urgent for client satisfaction. After all, revenues and client satisfaction go hand-in-hand.

We see and feel the global SSI momentum. As we see with European local governments, other nations such as Korea, Ethiopia, Canada, and India are already pioneering this technology in various use cases. We know SSI mass adoption is a matter of “when”, not “if”, yet as with all technologically disruptive technologies - we expect another couple of years before we achieve it. Nonetheless, we are positive it will happen sooner than everyone initially thought. Governments and businesses are already aware of the increased risks and costs of identity theft, the lack of data privacy granted by tech giants, and of course, the need for an authentication system that is up to par with our technology-driven society.

At GATACA we’re ready to make this a reality. We’ve not only built a full-stack SSI product suite with solutions for all actors, but we’re also implementing it across governments and universities in Europe. Are you ready for a new identity model?

Book a demo and see what all the fuss is about (we promise it won’t let you down). [Get in touch!](https://gataca.io/company/contact)

**Chat with us -** We’d love to chat with you. Let us know your perspective and comments on this topic or anything Digital Identity-related. Join our [Telegram ](https://t.me/digitalidentityinsights)group.

**Stay in the loop -** Keep yourself updated on GATACA developments and how digital identities will transform our digital lives [here](https://gataca.io/insights/decentralized-finance-self-sovereign-identity-a-tale-of-decentralization-a-new-paradigm-of-trust).

Have a specific topic you’d like us to cover? Email us at [hello@gataca.io](mailto:hello@gataca.io "mailto:hello@gataca.io") - we’ll break it down for you in our upcoming blog articles.
