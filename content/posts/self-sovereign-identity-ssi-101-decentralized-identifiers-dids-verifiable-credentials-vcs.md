---
date: 2021-11-15T20:18:42.000+00:00
meta_data:
  title: 'Self-Sovereign Identity (SSI) 101: Decentralized Identifiers (DIDs) & Verifiable
    Credentials (VCs)'
  description: The foundation concepts of SSI were officially brought to life when
    the Credentials Community Group was created under the international organization...
  rrss_images:
    twitter: "/static/images/vaccination-certificate-european-green-pass-2021-09-04-10-23-45-utc.jpg"
    facebook_and_whatsapp: "/static/images/vaccination-certificate-european-green-pass-2021-09-04-10-23-45-utc.jpg"
    linkedin: "/static/images/vaccination-certificate-european-green-pass-2021-09-04-10-23-45-utc.jpg"
title: 'Self-Sovereign Identity (SSI) 101: Decentralized Identifiers (DIDs) & Verifiable
  Credentials (VCs)'
author: ''
hero_image: "/static/images/vaccination-certificate-european-green-pass-2021-09-04-10-23-45-utc.jpg"

---
The foundation concepts of SSI were officially brought to life when the Credentials Community Group was created under the international organization [World Wide Web Consortium (W3C)]() that generates recommendations and standards for the Internet. The group, of which the founder of [GATACA ]()is a part, defined two fundamental standards for the development of a new decentralized identity architecture: Decentralized Identifiers (DIDs) and Verifiable Credentials (VCs). Not only are these the foundation for the self sovereign identity authentication paradigm, but also for a user-centric, secure, and privacy-preserving Web 4.0. VCs and DIDs have been accepted and adopted by governments and business worldwide implementing self-sovereign identity ecosystems.

In this article, we provide a quick, easy to understand guide on these two concepts.

## An introduction to DIDs

How do third party service providers prove that the a digital identity holder is truly who he is? What _identifies_ the user?

In order to truly have a decentralized, secure, and trustworthy digital identification system, the internet requires decentralized identifiers (like decentralized URLs) to help users represent who they are in any context without referring back to centralized identity registries such as the government for ID attributes, google for email and password, phone provider for your telephone number, etc.

The first fundamental concept, and W3C standard draft, within the SSI paradigm is the Decentralized Identifier (DID), an identifier for any participant (individual, entity, or thing) in the SSI ecosystem. More specifically, a DID is a globally unique identifier (URI), like a URL (or web address), that:

1. **does not require a centralized authority for their generation or registration as they are registered through distributed ledger technologies (DLT);**
2. **is unique globally and for all contexts regardless of where they are to be used (as opposed to a username which is only used for the service in question).**

So, what’s behind a DID?

DIDs are associated with at least one pair of cryptographic keys: a public key & a private key. Advanced cryptography enables the generation of a public key that is tied to a private key (which always stays with the user off-chain). Together, the DID and public keys are published in the blockchain, and this “package” is called a **DID document**. DID documents also contain instructions for verifying machines on how to communicate with or authenticate the DID owner. Since DIDs and their associated public keys are recorded on immutable and decentralized ledgers, they allow for a secure and trustworthy distribution of public keys, solving man-in-the-middle (MitM) attacks, one of the biggest problems of modern asymmetric cryptography. In essence, DLTs help tie a DID to DID documents.

In other words, think of a user DID as the “username” that is tied cryptographically to your wallet and the private key as the user’s password. During the process of authentication in a decentralized system, a user proves their identity by signing a message with their private key and any third party entity can verify such signature by looking up the user’s public key in the corresponding blockchain ledger. And with this: passwords begone (more on passwordless authentication [here]()).

Now onto technicalities. What does a DID look like? The DID data model is composed of three parts: the Scheme, DID method, and DID Method-specific Identifier.

![](/did_example.png)

* **DID Scheme:** All DIDs begin with “_did:”_
* **DID method**: This field specifies how to deal with this DID. When reading this part of the DID, computers understand where to go fetch the DID. For example, GATACA’s DID method is denominated `"gatc"`
* **DID Method-specific identifier:** Refers to the DID’s unique identifier within the method. For example, GATACA’s DID method uses 32 characters using base58 for its identifiers.

The diagram below exemplifies how a DID interacts with DID documents (which stores public keys) and DLTs.

![](/dids_flow.png)

(For full documentation on GATACA’s DID method, click [here](https://github.com/gataca-io/gataca-did-method "https://github.com/gataca-io/gataca-did-method").)

So, where do DID’s fit in the wider SSI standard ecosystem and Verifiable Credentials? **Verifiable Credentials are associated with a specific DID, as the owner or holder of that credential.**

## An introduction to Digital Verifiable Credentials

We use identity credentials daily to access local citizen services, prove our qualifications, and to register for both online and offline private services. These identity credentials range from a passport, proof of address, proof of living, driver’s license, vaccination cards, insurance cards, you name it. With the acceleration of digital transformation, many of these processes have gone digital yet still relying on physical proof of documentation, or at most a photo or scan of these documents, which are **time-consuming, easily forged, and difficult to verify** online or by computer (normally a natural person must manually proceed with the verification process). Is this as advanced as society can go in the 21st century?

Luckily, the answer is no! Thanks to Blockchain and Distributed Ledger technologies identity verification innovation has finally been brought up to par with our technology-driven world. Introducing: Verifiable Credentials.

**Verifiable credentials (or VCs) are a standard format for the digital representation of credentials (documents that collect attributes about a subject) that are cryptographically secure, verifiable through machines, and that guarantee privacy by enabling methods such as minimum disclosure.** VCs can be used to describe identity credentials, such as a an academic diploma, driver’s licenses, passports, insurance cards, vaccination records (and so much more), and they contain metadata properties that reference the holder (or user), the issuer, associated DIDs, the issue date, and the expiration date.

With VCs, credential holders (that’s you!) can easily manage and share their identity credentials from the comfort of a digital ID wallet and use them to instantly prove their identity and access digital services (ex. opening a bank account online or applying for a masters) or in-person businesses (ex. accessing university labs/buildings or retailer loyalty programs). Similarly, organizations (ie. banks, government agencies, universities, etc) are able to streamline onboarding & authentication processes and automatically verify user identities without having to manually consult issuing entities (ie. governments, universities, etc) to prove its legal validity.

Verifiable Credentials obey a common structure regardless of the attributes contained: the format is the same for a national ID, an Academic diploma, birth certificates or a vaccination record. **This standardization of digital identity credentials introduces an opportunity to unify all logins and registration processes, including for regulated services**. In other words, the possibility of creating a single digital identity with which to access all Internet services.

There are 3 components in a VC:

1. **Credential Metadata**: Properties or attributes of the credential
2. **Claims**: A statements about a subject (individual, legal entity, or thing).
3. **Proofs**: cryptographic signatures tied to private keys that prove the user sharing the VC is the subject of the information.

![](/vcs_datamodel.png)

Let’s put things into real-life perspective with an academic diploma VC example.

* The Metadata would include an identifier for this specific credential (“id12345678”), the DID of the issuer (“University of Madrid”), the type of credential (“Academic Diploma”), and the issuance date (“01/12/2021”)
* The claims of an academic diploma would include the claims addressed to the DID of the student Alice such as the type of degree, the graduation year, the grade, and the number of credits completed.
* The proofs are straightforward: cryptographic signatures from the issuing authority that permit service providers to verify the authenticity and ownership of the credential.

### Characteristics of a VC

* **Tamper-proof:** VCs are cryptographically signed by trusted authorities, providing the maximum trustworthiness for verifying organizations. Verifiers no longer call into question the authenticity and ownership of the VC. In other words, the proof that users owns a specific credential, such as an Academic Diploma, and that it was officially issued by the corresponding Education institution is self-contained in the VC.
* **Sovereign:** VCs allows the user to be sovereign in the sharing of said credential and a receiver to be sovereign in the validation of its authenticity without having to consult the issuer.
* **Privacy-preserving:** Verifiable credentials, such as National IDs, can be shared partially (only specific claims), to enable minimum disclosure. This means that for a user to prove their age they can send a Verifiable Presentation of their date of birth, rather than the entire ID VC.
* **Portable:** Users are not limited to using the VC within the issuer’s ecosystem (for ex. a national ID within e-government services). Rather, VCs can be used to prove user’s identity across all systems such as banking, education, real estate, etc. In the aforementioned cases, a digital national ID VC could be used to access your bank (banking), enroll in a masters (education) or purchase a property online (real estate).
* **Standardized:** VCs follow the W3C Verifiable Credentials standard so they can be used and recognized worldwide. Think of it as the passport standard. The international community agreed to a passport standard format that, regardless who issues it, can be read and accepted globally, by all governments.

### Verifiable Presentations

Along with VCs, comes the **Verifiable Presentation (VP)** concept: **a pack of claims extracted from one or more Verifiable Credentials from the same or different issuers** (If Verifiable Credentials are presented directly, they become Verifiable Presentations). With VPs, “holders can freely choose which information (from underlying VCs) they include in a Verifiable Presentation and thus, share with a relying party” ([European Comission](https://ec.europa.eu/cefdigital/wiki/display/EBSIDOC/Verifiable+Presentation+API+and+Library)). For example, in order to apply to a masters degree using SSI technology,  a user needs to share multiple attributes (or personal information) from multiple issuers. These can include an academic diploma and transcript from their previous educational institution, and a personal ID information from the government. Basically, a Verifiable Presentation is the simple, tamper-proof, and previously-verified version of the tedious attachments you would send to the masters institution to prove your qualifications for the application (ie. copy of passport, official transcript & diploma, copy of CV).

**DIDs, VCs, and VPs not only facilitate the process of sending your personal information to verifiers, but drastically reduce the turnaround time for verification.** Continuing the example of the academic diploma, once the user send the Verifiable Presentation to the Master’s application, the information sent would be verified instantly by a computer thanks to the already verified, cryptographically-signed Verifiable Credentials which are automatically paired to a DID to prove the sender is the subject of the information.

## Putting it all together: the Verifiable Credential Flow

To connect the dots the VC flow between stakeholders, we must first depict where each of the 3 main stakeholders in the SSI ecosystem stand: Issuers (issue VCs), Holders (store & share VCs), and Verifiers (verify VCs).

The diagram below illustrates the flow of a Verifiable Credential between SSI stakeholders, also known as the Trust Triangle.

![](/vc_trust_triangle.png)

**Example - Opening or Accessing a Bank Account:**

1. Government (issuer) issues a national ID Verifiable Credential that is sent directly to the user’s digital ID wallet.
2. Once national ID VC is stored in user’s ID wallet, the user then proceeds to send the Bank (verifier) a Verifiable Presentation signed by him/herself that contains the identity information required by the bank for authentication.
3. Afterwards, the Bank verifies the user & issuer’s cryptographic signatures in the VP and VC respectively, through blockchain.
4. Following verification, the user is granted access to their account in the bank’s online platform.

The best part: this all happens in seconds!

## Conclusion

While  the adoption of DIDs and the Verifiable Credential trust ecosystem is just gaining traction, it has already provided a sneak peek into what a robust, user-centric, and secure internet will look like. Users will no longer have to depend on federated identity providers such as Google or Facebook that threaten user digital identity by having one single point of failure (the internet recently experienced this when [Facebook, Whatsapp, and Instagram shut down for hours, leaving its users in the air](https://www.nytimes.com/2021/10/04/technology/facebook-down.html)), rather they will be able to control and own their digital identity enabling richer and more secure digital experiences.

The publication of these two standards in 2018 and 2019 respectively constituted the fundamental technological base for the development of an international ecosystem of technologists, technology companies, policy makers, governments and corporations fostering the concept of SSI worldwide. DIDs have yet to be approved by the W3C as a Web standard, yet when approved, they would be the first new identifier the W3C would approve since the URL.

For an informational webinar on the objections made by Google, Apple, and Mozilla on the approval of DIDs as an W3C URI standard, we recommend watching the following [webinar](https://www.evernym.com/dids-webinar/).

Photo by [Dom J](https://www.pexels.com/@dom-j-7304?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) on [Pexels](https://www.pexels.com/photo/uk-driving-license-45113/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

**Chat with us -** We’d love to chat with you. Let us know your perspective and comments on this topic, or anything Digital Identity related. Join our [Telegram ](https://t.me/digitalidentityinsights)group.

**Stay in the loop -** Keep yourself updated on GATACA developments and how digital identities will transform our digital lives [here](https://gataca.io/insights/decentralized-finance-self-sovereign-identity-a-tale-of-decentralization-a-new-paradigm-of-trust).

Have a specific topic you’d like us to cover? Email us at [hello@gataca.io](mailto:hello@gataca.io "mailto:hello@gataca.io") - we’ll break it down for you in our upcoming blog articles.

#### Relevant Links

[https://didproject.azurewebsites.net/docs/verifiable-credentials.html](https://didproject.azurewebsites.net/docs/verifiable-credentials.html "https://didproject.azurewebsites.net/docs/verifiable-credentials.html")

[https://www.w3.org/TR/vc-data-model/#introduction](https://www.w3.org/TR/vc-data-model/#introduction "https://www.w3.org/TR/vc-data-model/#introduction")

[https://medium.com/metadium/decentralized-identifiers-the-easy-guide-fb96429e8b24](https://medium.com/metadium/decentralized-identifiers-the-easy-guide-fb96429e8b24 "https://medium.com/metadium/decentralized-identifiers-the-easy-guide-fb96429e8b24")

[https://ssi-ambassador.medium.com/an-introduction-to-self-sovereign-identity-ssi-916eb42f0490](https://ssi-ambassador.medium.com/an-introduction-to-self-sovereign-identity-ssi-916eb42f0490 "https://ssi-ambassador.medium.com/an-introduction-to-self-sovereign-identity-ssi-916eb42f0490")

[https://ec.europa.eu/cefdigital/wiki/display/EBSIDOC/Verifiable+Presentation+API+and+Library](https://ec.europa.eu/cefdigital/wiki/display/EBSIDOC/Verifiable+Presentation+API+and+Library "https://ec.europa.eu/cefdigital/wiki/display/EBSIDOC/Verifiable+Presentation+API+and+Library")