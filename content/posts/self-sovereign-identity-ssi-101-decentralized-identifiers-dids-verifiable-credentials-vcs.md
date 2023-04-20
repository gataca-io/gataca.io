---
date: 2021-11-15T21:18:42+01:00
meta_data:
  title: 'Self-Sovereign Identity (SSI) 101: Decentralized Identifiers (DIDs) & Verifiable
    Credentials (VCs)'
  description: A specific DID is associated with Verifiable Credentials to identify
    the owner of that credential. Decentralized identifiers help users represent who
    they are without centralized registries.
  rrss_images:
    twitter: "/static/images/vaccination-certificate-european-green-pass-2021-09-04-10-23-45-utc.jpg"
    facebook_and_whatsapp: "/static/images/vaccination-certificate-european-green-pass-2021-09-04-10-23-45-utc.jpg"
    linkedin: "/static/images/vaccination-certificate-european-green-pass-2021-09-04-10-23-45-utc.jpg"
title: 'SSI Essentials: What are Decentralized Identifiers (DIDs) & Verifiable Credentials
  (VCs)?'
author: ''
hero_image: "/static/images/dids-and-vcs-top-image.png"

---
Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs) are the foundational concepts of Self-Sovereign Identity and the standards for developing a new decentralized identity architecture based on the notions of privacy, security, and user-centricity. 

This article provides a quick, easy-to-understand guide on these two concepts.

## An Introduction to DIDs

How do third-party service providers prove that the digital identity holder is truly who they say they are? What _identifies_ the user?

The first fundamental concept within the SSI paradigm, and now an [official web standard by the W3C](https://www.w3.org/TR/did-core/), is the Decentralized Identifier (DID), **an identifier for any participant (individual, entity, or thing) in the SSI ecosystem.**

Decentralized identifiers (DIDs) help users represent who they are in any context without referring back to centralized identity registries such as the government for ID attributes, google for email and password, phone providers for telephone numbers, etc.

More specifically, a DID is a globally unique identifier (URI), like a URL, that:

1. Does not require a centralized authority for their generation or registration.
2. It is unique globally and for all contexts regardless of where they are to be used (as opposed to a username only used for the service in question).

You can create DIDs on our decentralized identity platform, [Gataca Studio](https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs).

### What’s behind a DID?

When a user creates a DID, it is associated with at least one pair of cryptographic keys, a public key & a private key. Advanced cryptography enables the generation of a public key tied to a private key (which always stays with the user off-chain).

The DID and public keys are published in the blockchain, and this "package" is called a **DID document**. DID documents also contain instructions for verifying machines to authenticate the DID owner.

It is important to note that since 2022, **European regulators** have deemed DIDs as personal information and the [storage of DID documents in the blockchain as non-GDPR-friendly for natural persons](https://gataca.io/blog/ebsi-did-v2-a-test-to-ssi-usability-and-its-use-of-blockchain-technology), creating a new version of the DID method for Europe.

In this new DID method, the DID is the thumbprint of the key, and it is shared in the request that needs to validate it - we are sending the key now.

In simpler words, think of a user's DID as the "username" tied cryptographically to your wallet and the private key as the user's password. During the authentication process in a decentralized system, a user proves their identity by signing a message with their private key. Any third-party entity can verify the signature by searching the user's public key in the corresponding blockchain ledger or DID document. And with this: [passwords begone](https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs).

Now onto technicalities. What does a DID look like? The DID data model comprises the Scheme, DID method, and DID Method-specific Identifier.

![What is behind a DID?](/static/images/behind-a-did.png)

* **DID Scheme:** All DIDs begin with "_did:"_
* **DID method**: This field specifies how this DID is created, resolved, and used in a particular context. Computers understand where to fetch the DID when reading this part of the DID. For example, GATACA's DID method is denominated "gatc"
* **DID Method-specific identifier:** Refers to the DID's unique identifier within the method. In Europe, this part includes the encoded public key.

For full documentation on Gataca's DID method, click [here](https://github.com/gataca-io/gataca-did-method "https://github.com/gataca-io/gataca-did-method").

So, where do DIDs fit in the SSI ecosystem? **A specific DID is associated with Verifiable Credentials to identify the owner or holder of that credential.** 

Now let's dive into the following foundational concept in the SSI paradigm, Verifiable Credentials.

## An Introduction to Digital Verifiable Credentials

We use identity credentials daily, such as passports, driver's licenses, academic diplomas, proof of address, or insurance cards. You name it.

With the acceleration of digital transformation, many authentication processes have gone digital yet still rely on physical proof of documentation, or at most a photo or scan of these documents, which is **time-consuming, easily forged, and challenging to verify** (usually a natural person must manually proceed with the verification process). Is this the most efficient and secure manner to deal with identity verification? Luckily, the answer is no!

Thanks to Distributed Ledger Technologies (DLTs), identity verification innovation has finally been brought to par with our technology-driven world.

**Verifiable credentials (or VCs) are a standard format for the digital representation of credentials (documents that collect attributes about a subject) that are cryptographically secure, verifiable through machines, and that guarantee privacy by enabling methods such as minimum disclosure.**

![Verifiable Credentials](/static/images/gataca-wallet-credentials.png)

With VCs, users can easily manage and share their identity credentials from the comfort of a digital ID wallet and use them to instantly prove their identity and access digital services (i.e., opening a bank account online or applying for masters) or in-person businesses (i.e., accessing university buildings or retailer loyalty programs).

Similarly, organizations can streamline onboarding & authentication processes and automatically verify user identities without manually consulting issuing entities to prove their legal validity.

Our platform, [Gataca Studio](https://gataca.io/products/gatacaStudio), streamlines the issuance and verification of verifiable credentials, as well as the management of users in one place.

### The Structure of a Verifiable Credential

Verifiable Credentials obey a common structure regardless of the attributes contained: the format is the same for a national ID, an Academic diploma, a birth certificate, or a vaccination record.

**This standardization of digital identity credentials introduces an opportunity to unify all logins and registration processes, including for regulated services**. In other words, creating a single digital identity to access all Internet services is possible.

There are three components of a VC:

1. **Credential Metadata**: Information about the credential, such as the credential type, issue, and expiration dates.
2. **Claims**: A statement about a subject (individual, legal entity, or thing), such as a person's name, date of birth, or academic degree.
3. **Proofs**: The cryptographic proof (digital signature) that the credential is authentic and has not been tampered with.

  
![The structure of a verifiable credential](/static/images/the-structure-of-a-verifiable-credential.png)

Let's put things into real-life perspective with an academic diploma VC example.

* The Metadata would include an identifier for this specific credential ("id12345678"), the DID of the issuer ("University of Madrid"), the type of credential ("Academic Diploma"), and the issuance date ("01/02/2023")
* The claims of an academic diploma would include the claims addressed to the student's DID, such as the type of degree, the graduation year, the grade, and the number of credits completed.
* The proofs are the cryptographic signatures from the issuing authority that permit service providers to verify the authenticity and ownership of the credential.

### Characteristics of a VC

* **Tamper-proof:** VCs are cryptographically signed by trusted authorities, providing the maximum reliability for verifying organizations. In other words, the proof that users own a specific credential, such as an Academic Diploma, and that the corresponding Education institution officially issued it is self-contained in the VC.
* **Sovereign:** VCs allow both the user and the receiver to be sovereign in sharing and validating the credential without consulting the issuer.
* **Privacy-preserving:** Verifiable credentials, such as National IDs, can be shared partially (only specific claims) to enable minimum disclosure. This means that for a user to prove their age, they can send a Verifiable Presentation of their date of birth rather than the entire ID VC.
* **Portable:** Users are not limited to using the VC within the issuer's ecosystem (i.e., a national ID within e-government services). Instead, VCs can be used to prove a user's identity across all systems. For example, a national ID VC can be used to access your Bank, enroll in a master's, or purchase a property online.
* **Standardized:** VCs follow the W3C Verifiable Credentials standard to be used and recognized worldwide. Think of it as the passport standard.

### Verifiable Presentations

Along with VCs comes the **Verifiable Presentation (VP)** concept: **a pack of claims extracted from one or more Verifiable Credentials from the same or different issuers** (if Verifiable Credentials are presented directly, they become Verifiable Presentations). 

With VPs, ["holders can freely choose which information (from underlying VCs) they include in a Verifiable Presentation and, thus, share with a relying party](https://ec.europa.eu/cefdigital/wiki/display/EBSIDOC/Verifiable+Presentation+API+and+Library)."

For example, to apply for a master's degree using SSI technology, a user needs to share multiple attributes (or personal information) from multiple issuers. These can include an academic diploma, a transcript from their previous educational institution, and personal ID information from the government.

A Verifiable Presentation is the simple, tamper-proof, and previously verified version of the tedious attachments you would send to the Master's institution to prove your qualifications for the application (i.e., copy of passport, official transcript & diploma, copy of CV).

**DIDs, VCs, and VPs not only facilitate the process of sending your personal information to verifiers but drastically reduce the turnaround time for verification.**

Continuing the example of the academic diploma, once the user sends the Verifiable Presentation to the Master's application, the information sent would be verified instantly by a computer thanks to the already verified, cryptographically-signed Verifiable Credentials, which are automatically paired to a DID to prove the sender is the subject of the information.

## Putting it all together: the Verifiable Credential Flow

The diagram below illustrates the flow of a Verifiable Credential between the three main stakeholders in the SSI ecosystem: Issuers (issue VCs), Holders (store & share VCs), and Verifiers (verify VCs). This is also known as the Trust Triangle.

![Verifiable Credential Flow](/static/images/the-verifiable-credential-flow.png)

**Example - Opening or Accessing a Bank Account:**

1. The government (issuer) issues a national ID Verifiable Credential sent directly to the user's digital ID wallet.
2. Once national ID VC is stored in the user's ID wallet, the user then sends the Bank (verifier) a Verifiable Presentation signed by themselves that contains the identity information required by the Bank for authentication.
3. Afterward, the Bank verifies the user & issuer's cryptographic signatures in the VP and VC, respectively, through blockchain.
4. After verification, the user is granted access to their account on the Bank's online platform.

The best part: this all happens in seconds! [Test it out in Gataca Studio for free](https://gataca.io/pricing/).

**Stay in the loop -** Keep yourself updated on Gataca developments and how digital identities will transform our digital lives by subscribing to our [newsletter](https://4728390.hs-sites.com/subscription).