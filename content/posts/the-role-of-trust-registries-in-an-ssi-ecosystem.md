---
date: 2022-12-20T09:09:57Z
meta_data:
  title: The role of trust registries in an SSI ecosystem
  description: Trust registries contain information about who is authorized and trusted
    to issue or verify credentials providing a secure basis for entities to trust
    each other.
  rrss_images:
    twitter: "/static/images/picture2.png"
    facebook_and_whatsapp: "/static/images/picture2.png"
    linkedin: "/static/images/picture2.png"
title: The role of trust registries in an SSI ecosystem
author: ''
hero_image: "/static/images/trust-registries-in-ssi.png"

---
In the same way that anyone can falsify documents in the physical world, anyone can create a verifiable credential without being authorized to do so.

This raises the following question, how can a verifier assess that a verifiable credential is not fake and that it came from an authorized issuer? And vice-versa, how can users know which verifiers are trustworthy and if it is alright to share their credentials with them?

This article explores the concept of trust registries and how Gataca implements our Registries to create trust in our SSI environment.

## What is a Trust Registry?

The trust framework in SSI is formed by a set of registries that provide a secure and reliable basis for entities within the system to trust and interact with each other.

These registries, also called trust registries or trust anchors, contain information about who is authorized and trusted to issue or verify credentials.

There are different trust frameworks ([EBSI Registries](https://api-pilot.ebsi.eu/docs/apis) is one example), and consulting about the validity of a specific credential implies knowing the trust framework it is anchored on. Trust Frameworks are typically provided by government agencies, but they could also be built by industry consortia or other private entities.

These trust registries are typically stored on blockchain ledgers due to their enhanced traceability and immutability properties, and hence the trust they provide when multiple unknown/untrusted entities are in the ecosystem.

However, it is important to note there is no technical limitation or constraint to storing these trust registries in alternative storage systems such as centralized databases.

![Trust Registries - SSI ](/static/images/screenshot-2022-12-20-at-10-08-59.png "Trust Frameworks containing the list of Trust Registries with different storage systems")

### Types of Trust Registries

* **Trusted Issuers Registry (TIR)**

This registry contains a list of entities that are authorized to issue certain types of credentials ("Trusted Issuers"). For example, a bank included in the trust registry may be authorized to issue a bank account credential or a credit score but not a university diploma.

Trusted Issuers may include businesses, government agencies, educational institutions, and other organizations with the authority to issue, verify, and revoke digital credentials.

* **Trusted Schema Registry (TSR)**

This registry contains the list of schemas allowed in the ecosystem. Schemas are templates that define the structure and semantics of verifiable credentials. As such, a schema defines which claims are included in a specific credential type (e.g., Academic Diploma) and the format of each claim (e.g., text, date, boolean).

It also includes the rules for how it should be formatted and presented. Defining globally recognized schemas contribute to interoperability in the market.

* **DID Registry**

A DID registry maintains a directory of DIDs and their associated DID documents. More on DIDs and DID documents [here](https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs/).

* **Trusted Accreditation Organization Registry (TAOR)**

This registry contains the list of organizations authorized to accredit another entity to issue certain VCs; they define who are Trusted Issuers. For example, in a specific Trust Framework, the Ministry of Education could be the Trusted Accreditation Organization (TAO) entitled to decide which universities can be listed in the TIR as Trusted Issuers of University Diplomas credentials.

Not all Trust Frameworks have a TAOR. While EBSI’s trust framework has a TAOR, Gataca’s own trust framework does not.

* **Trusted Verifiers Registry (TVR)**

This registry contains the list of entities that are Trusted Verifiers. This registry guarantee that it is safe for a user to share credentials with them. The TVR ensures that only trusted entities can verify the authenticity of verifiable credentials in the SSI ecosystem, helping to prevent fraud or abuse.

Not all Trust Frameworks have a TVR. While EBSI’s trust framework does not have a TVR, at Gataca, we’ve implemented this registry as an extra security measure.

### How are Trust Registries used?

In practice, these trust registries are consulted every time a credential is shared. During a presentation exchange, the following verification checks are executed on the verifier side before a credential can be considered successfully validated:

* the credential complies with a schema listed in the TSR
* the credential is issued by an issuer listed in the TIR
* the issuer’s signature can be verified with the public keys listed in the DID Registry
* the issuer is authorized by a TAO to issue credentials using this schema

## **Trust Framework at Gataca**

Four registries form Gataca’s own Trust Framework:

* DID Registry
* TIR
* TVR
* Schema catalog

Gataca serves as the only TAO in its Trust Framework, so there is no need for a TAOR.

However, it is important to highlight that Gataca’s technology has been designed to connect and interoperate with multiple Trust Frameworks. This means that we do not build upon or rely on one specific blockchain network and that our products can easily read and interact with different protocols, ledgers, or databases if needed, enabling global interoperability.

To date, Gataca’s technology is connected with its own Trust Framework and to the EBSI's Trust Framework, so users can seamlessly store credentials whose verification properties are anchored in either framework.

![Trust Registries - SSI Gataca](/static/images/screenshot-2022-12-20-at-10-06-44.png "Gataca Trust Registries")

### How do Trust Registries work at Gataca?

When an organization creates a Gataca Studio account, a Gataca DID (did:gatc) is automatically generated, and its DID document is stored in Gataca’s DID registry. Subsequently, the organization may create more DIDs following did:gatc or did:ebsi methods.

For an organization to be registered in Gataca’s public Trust Framework (as Trusted Issuer, Verifier, or to publish a new credential schema), the organization must submit a registration request which Gataca will review for approval. Similarly, an organization can request Gataca’s support to be registered in EBSI’s Trust Framework.

In the meantime, how can organizations test issuance or verification flows if they are not publicly listed in Gataca’s or EBSI’s Trust Framework? [Gataca Studio](https://gataca.io/products/gatacaStudio) provides a private environment called the Sandbox, where you have your own private Trust Framework composed of a TIR, a TVR, and a TSR.

By joining a [Wallet](https://gataca.io/products/wallet) into your private environment, you’ll be able to successfully execute issuance and verification flows, but users outside of your private environment will not be able to successfully receive or share credentials.

## Moving forward

Gataca does not aim at becoming a Trust Framework provider but rather at becoming a proxy for all existing and future frameworks and providing Verifiers with the tools to select which frameworks they want to rely on. Do you have a Trust Framework and want to integrate it with Gataca Studio? Let’s [talk](https://gataca.io/company/contact)!

Join Gataca in leading the digital identity revolution.

**Get started with Gataca Studio** - If you're curious to see the benefits of our technology on your workflows today, [get started for free here](https://studio.gataca.io/login).

**Chat with us -** We’d love to chat with you. Let us know your perspective and comments on this topic or anything Digital Identity-related. Join our [Telegram ](https://t.me/digitalidentityinsights)group.

**Stay in the loop -** Keep yourself updated on GATACA developments and how digital identities will transform our digital lives by subscribing to our newsletter [here](https://4728390.hs-sites.com/subscription).