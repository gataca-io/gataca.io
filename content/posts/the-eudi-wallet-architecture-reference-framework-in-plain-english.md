---
date: 2022-05-18T14:36:04.000+00:00
meta_data:
  title: The EUDI Wallet Architecture & Reference Framework in Plain English
  description: The EUDI Wallet Architecture & Reference Framework in Plain English
  rrss_images:
    twitter: "/static/images/eidas-reference-framework-blog-mainpic.png"
    facebook_and_whatsapp: "/static/images/eidas-reference-framework-blog-mainpic.png"
    linkedin: "/static/images/eidas-reference-framework-blog-mainpic.png"
title: The EUDI Wallet Architecture & Reference Framework in Plain English
author: ''
hero_image: "/static/images/eidas-reference-framework-blog-mainpic.png"

---
In June 2021, the European Commission took a giant step toward making a citizen’s day-to-day life a piece of cake: announcing a new EU Digital Identity with a digital ID Wallet as a key component. The ID Wallet has been an essential piece of the SSI architecture since day 1, and we’re excited to see it being prioritized at a regional level for all public and private digital identity processes.

About 2 months ago, the EU published a [EUDI Architecture and Reference Framework](https://ec.europa.eu/newsroom/dae/redirection/document/83643) - the first public documentation since June 2021. It serves as a guide to explain the general objective of the EUDI Wallet, ecosystem actors and roles, functional/non-functional requirements, and potential building blocks. 

While the document does not explicitly refer to the concept of [Self-Sovereign Identity (SSI)](https://gataca.io/blog/ssi-essentials-everything-you-need-to-know-about-decentralized-identity), its underlying concepts and overall goal coincide with the SSI vision and mission as it emphasizes privacy, user control, and user-friendliness. In its own words:

_“The primary objective of the proposed European Digital Identity Wallet is to promote trusted digital identities for all Europeans allowing users to be in control of their own online interactions and presence.”_

General points:

* This reference framework includes many actors and roles which had not been originally recognized by the SSI ecosystem or had been referenced as functional components rather than roles.
* As expected, there is a strong focus on user control, user privacy, and selective disclosure
* The Wallet will be mandatory for Member states to provide but will be optional for citizens to adopt

## eIDAS 2.0 Toolbox & Status

![](/static/images/eidas2-0timeline.png)

With the expected launch date of the EUDI Wallet being Q1 2024, the eIDAS 2.0 toolbox and regulation are being worked on by the **eIDAS expert group** comprised of representatives from the 27 member states; the process is being organized in **4 sub-working groups**, each concerned with a separate feature or functionality of the toolbox.

At the same time, the European Commission is incentivizing Member States to start adopting the new regulation using a €37M [grant](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-details/digital-2022-deploy-02-electronic-id) to support the implementation of 4 large-scale pilots. 

Worth highlighting [Digital Credentials for Europe (DC4EU)](https://www.dc4eu.eu/), a 22-member consortium that will present two use cases in addition to the onboarding of a base identity: Educational credentials & professional qualifications and Social Security.

## eIDAS 2.0 Roles adapted to the SSI ecosystem

So far, the EU has defined 14 basic roles and actors for the EUDI ecosystem, and the majority can be re-categorized into SSI stakeholder categories: Issuer, Holder, and Verifier.

For those under the Issuer umbrella, the eIDAS toolbox distinguishes 3 different roles relative to the type of data they issue: personal data, official & non-official attributes. 

Additionally, it has emphasized other types of providers, which SSI has not yet identified as roles or entities, but rather as [sources of information (or registries)](https://gataca.io/blog/the-role-of-trust-registries-in-an-ssi-ecosystem): Schema Catalogue Providers, Authentic Source providers, and Providers of Registries of Trusted Sources.

Interestingly, eIDAS extends the definition of the Provider of registries of trusted sources also to include trusted lists of verifiers and wallet providers, information that is not included in typical SSI implementation.

There have also been new roles/actors added that had been uncontemplated by the SSI ecosystem: Conformity Assessment Bodies (CAB) and Supervisory Bodies, which certify and supervise EUDI Wallet, qualified and non-qualified trust service providers, respectively. 

For your reference and easier understanding, we have arranged and adapted the eIDAS roles into an SSI stakeholder map for a clearer visualization of information and relationship flow - see below.

![](/static/images/eidas2-0roles.png)

## A look into the functional requirements

In this next section, we’ll dive into the most critical functional requirements established by the eIDAS Toolbox and aim to explain them in simpler, casual English.

For more complicated section titles, we included an alternative, simpler title which catches the gist of the original titles' intention.

#### **Section 4.1:** Store person identification data, qualified electronic attestation of attributes, and electronic attestation of attributes

_Plain English section summary:_

**Storing personal data in the Wallet**

* Wallets must be able to store and manage personal data on their smartphone (locally) or remotely (in-cloud).
* As in SSI, users have to be able to receive their Verifiable Credentials, store them in their Wallet, and share these credentials without having to ask the issuer.

#### **Section 4.2:** Request and obtain person identification data, qualified electronic attestation of attributes and electronic attestation of attributes

_Plain English section summary:_

**Requesting and obtaining personal data in the Wallet**

* Wallet must allow organizations to request and obtain personal user data during onboarding/authentication. For example, Bank asks the user for a National ID verifiable credential in the “create your bank account process.”
* Users should be able to request personal data credentials from issuers. Users should also be able to delete data from their wallets.

#### **Section 4.3:** Cryptographic functions

_Plain English section summary:_

**Access and management of cryptographic functions**

* This section mainly emphasizes the correct use of cryptographic functions  (keys, computation, environments). The Wallet should be able to create, store, use and delete cryptographic material (i.e., keys).
* Users should have secure access to cryptographic functions (i.e., cryptographic keys) wherever they are hosted.

#### **Section 4.4:** Mutual authentication

_Plain English section summary:_

**Entities, users, and wallets authenticating each other**

* EUDI Wallet must be able to recognize and identify organizations it is interacting with and vice versa. 
* These actions should be possible both online and offline.
* There must be a standard specified as EU-level interoperability is required.

#### **Section 4.5:** Selection, combination and sharing of personal identification data, qualified electronic attestation of attributes and electronic attestation of attributes

_Plain English section summary:_

**Selecting, combining, and sharing personal data**

* Users should be able to use their EUDI Wallet as a method of authentication (prove their identity). This digital form of proving who they are will have legal validity.
* The Wallet should follow standard presentation interfaces to communicate and share the user’s data in an effort to make it interoperable at the European level.
* The Wallet Provider cannot see/store any user information unless it is absolutely necessary for it to continue providing the service.
* The Wallet is required to have the possibility of sharing information through selective disclosure mechanisms. This enables users to share bits of their identity without revealing all of their attributes. For example, to prove her age at a liquor store, thanks to selective disclosure, the holder would only share their full name and birthdate information. The rest would be hidden from the liquor store.
* In an offline (in-person) scenario, if a user shares attributes that are not directly linked to their EUDI Wallet (for example, the Covid Health Certificate), they may have to support it with additional documentation.
* In an online scenario, when proving their identity through the sharing of personal data via their Wallet, users must be able to prove they control or have access to the cryptographic keys linked to the information being shared. “My keys, my Wallet, my info”

#### **Section 4.6:** User interface for user awareness and authorization mechanism

_Plain English section summary:_

**Maximizing user experience and transparency**

* This section is all about the user-friendliness of the EUDI Wallet
* The user should be able to know/see clearly:
  * Who they’re interacting with (issuers, verifiers, wallets, registries, etc.)
  * The reason third parties request particular information
  * Their data protection rights
  * Which data is mandatory to be authenticated and which is optional
  * The history or log of events of the wallet’s use (i.e. when they’ve shared a credential, been issued a credential, or linked to a service)
* The Wallet should follow privacy and security-by-design principles, specifically requesting users to clearly express their consent to sharing information.
* The Wallet has to allow two-factor authentication

#### **Section 4.7:** Sign by means of qualified electronic signature or seal

_Plain English section summary:_

**Being able to sign and seal digitally**

* The Wallet must allow its user to digitally sign documents and data

## Conclusion

The first outline for the European Digital Identity Architecture and Reference Framework has provided a solid foundation for the main requirements and objectives of the EUDI Wallet. 

We’re looking forward to the evolution of this framework to see which specific mechanisms and methodologies will appropriately gear and guide Wallet providers for accurate implementation.

The reference framework currently emphasizes data privacy, highlighting selective disclosure protocols and interoperability, requiring it at a European level at a minimum - two essential characteristics for the usability and security of the EUDI Wallet. 

We will have to wait for further details on how exactly European interoperability will be guaranteed, which is a long-time goal SSI enthusiasts have been working on. Other key points we're hoping the updated document expands on are high Level of Assurance (LOA), two-factor authentication (2FA), and security requirements. 

As for governance, we’re especially curious to see how the potential complexity of the EUDI Wallet certification process driven by these factors, along with the selectivity from Member States, can threaten the competitiveness of the Wallet provider market.

We’re looking forward to seeing eIDAS 2.0 Toolbox progress and adapting the GATACA Wallet to its specifications.

Join Gataca in leading the digital identity revolution.

**Get started with Gataca Studio** - If you're curious to see the benefits of our technology on your workflows today, [get started for free here](https://studio.gataca.io/login).

**Chat with us -** We’d love to chat with you. Let us know your perspective and comments on this topic or anything Digital Identity-related. Join our [Telegram ](https://t.me/digitalidentityinsights)group.

**Stay in the loop -** Keep yourself updated on GATACA developments and how digital identities will transform our digital lives by subscribing to our newsletter [here](https://4728390.hs-sites.com/subscription).