---
date: 2023-02-21T10:19:47+01:00
meta_data:
  title: 'What are the implications of EBSI''s Wallet Conformance Test? '
  description: 'Explore the differences between the WCT v1 and the v2, including the
    new DID method for natural persons and of OID4VC, a new protocol selected. '
  rrss_images:
    twitter: "/static/images/wctsm.png"
    facebook_and_whatsapp: "/static/images/wctsm.png"
    linkedin: "/static/images/wctsm.png"
title: 'What are the implications of EBSI''s Wallet Conformance Test? '
author: ''
hero_image: "/static/images/wctsm.png"

---
On February 6th, 2023, Gataca Wallet passed the latest version of the EBSI Wallet Conformance Test (WCT).

We already passed v1 of the WCT in March 2022, being [one of Europe's first EBSI conformant Wallets](https://www.gataca.io/blog/the-gataca-wallet-becomes-one-of-the-first-ebsi-conformant-wallets-in-europe). However, with interoperability being one of Gataca's priorities since day one, we wanted to ensure we were up to date with its latest version, which includes some new stipulations.

**In this article, we highlight the differences between the WCT v1 and the v2, including a detailed explanation of the new DID method for natural persons and of OID4VC, the new protocols chosen for credential issuance, and presentation work.**

## What is EBSI Wallet Conformance Test?

The EBSI Wallet Conformance Testing service is intended for third-party application providers developing a digital wallet that want to ensure the interoperability and conformance of their wallet with the specifications defined by the [European Blockchain Services Infrastructure (EBSI)](https://ec.europa.eu/digital-building-blocks/wikis/display/EBSI/Home).

The goal is to verify that third-party wallets conform to the following:

* **EBSI core services specifications:** this will assess if a wallet can correctly interact with the core services endpoints of EBSI. Put simply, if the wallets' requests are well-formed and the core services return a successful answer;
* **EBSI playbook of Verifiable Credentials and their lifecycle:** this will verify that a wallet can correctly interact with Issuers of Verifiable Credentials (VC) and Verifiers of Verifiable Presentations (VP).

### What are the requirements for the Wallet Conformance Test?

V2 of the Wallet Conforming Test consists of two test case scenarios to assess if our wallet can communicate with EBSI via its APIs:

1. Request Verifiable Credentials (Issue a credential)
2. Present Verifiable Credentials (Verify a credential)

As a precondition, we had to generate an EBSI DID associated with the Verifiable Credentials to issue and verify.

![](/static/images/screenshot-2023-02-21-at-11-05-06.png)

It is relevant to note that EBSI has developed a "mock issuer" and a "mock verifier" for the Wallet Conforming Test to allow testing interactions with all actors involved in the VC lifecycle.

The first step was to request a credential from the "mock issuer" service using an API. This allowed us to request the issuance of a credential to the Gataca Wallet.

The second step was to request the previous verifiable credential issued to our wallet to be verified and to get an authentication response. In this test, the API acts as a "mock verifier," so the wallet provides a presentation that the API verifies.

Finally, once we executed both tests, we submitted a ticket with our conformance testing header to the EBSI team so that they could trace the requests, and we got a successful result.

See our [compliance report](https://ec.europa.eu/digital-building-blocks/wikis/download/attachments/475267168/Gataca_signed.pdf?api=v2).

## **What is the difference between v1 and v2 of the WCT?**

The v2 of the Wallet Conforming Test was announced to include a new user-friendly interface to test wallets, and a privacy-preserving DID method for natural persons.

This was the response to European regulators deeming DIDs as personal information and the [storage of DID documents in the blockchain non-GDPR-friendly for natural persons](https://gataca.io/blog/ebsi-did-v2-a-test-to-ssi-usability-and-its-use-of-blockchain-technology). Please note that there are no changes or impacts on legal entities' DID process, only natural persons.

Therefore, it is not mandatory to use the new DID method. We performed our Wallet Conforming Test as a natural person but could also have used v1 for a legal entity.

v2 eliminates the use of blockchain to register DID documents of natural persons, removing the link between natural persons' DIDs and DLTs. In this new DID method, the DID is the thumbprint of the key, and it is shared in the request that needs to validate it. In other words, we are sending the key now.

![](/static/images/screenshot-2023-02-15-at-13-03-16.png)

Moreover, in v2, EBSI chose [OpenID for Verifiable Credentials (OID4VC)](https://openid.net/openid4vc/) for credential issuance and presentation, so our wallet had to follow these specifications. 

OID4VC is a set of 3 protocols that enable self-controlled authentication ([SIOPv2](https://openid.bitbucket.io/connect/openid-connect-self-issued-v2-1_0.html)), issuance ([OID4VCI](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html)), and presentation ([OID4VP](https://openid.bitbucket.io/connect/openid-4-verifiable-presentations-1_0.html)) of verifiable credentials expressed in any format, including W3C VC data model and ISO/IEC 18013-5. 

Note that EBSI only abides by the last two protocols, leaving the choice of authentication mechanisms open to different protocols, including SIOPv2.

Most protocols that support authorization-based credential exchange, such as OIDC, only allow holders to authorize verifiers in relationship with the issuer to access their information. However, with OID4VC, users no longer need to rely on issuers, as they can autonomously control the exchange of credentials with verifiers.

## **What’s next?**

For us, the main implication of the Wallet Conforming Test was the implementation of OID4VCI and OID4VP protocols to meet the requirements of both the “mock issuer“ and “mock verifier“.

Additionally, passing the EBSI Wallet Conforming Test helps us establish Gataca Wallet as a trusted and reliable option in the market and facilitates interoperability and cross-border services while meeting the highest standards regarding privacy and security.

At Gataca, we will continue to work toward interoperability and make our wallet compliant with European Regulations by applying all specifications developed by regulatory bodies, such as the EBSI WCT or the [technical framework for the EUDI Wallet](https://digital-strategy.ec.europa.eu/en/library/european-digital-identity-wallet-architecture-and-reference-framework "https://digital-strategy.ec.europa.eu/en/library/european-digital-identity-wallet-architecture-and-reference-framework").

In this regard, we are participating this year in the EBSI Call, [one of the tenders from the European Commission](https://gataca.io/blog/gataca-participate-eu-digital-identity-wallet-large-scale-pilots "https://gataca.io/blog/gataca-participate-eu-digital-identity-wallet-large-scale-pilots"), to advance EBSI/ESSIF Framework and implement it in real use cases.

\--

Join Gataca in leading the digital identity revolution.

**Get started with Gataca Studio** - If you're curious to see the benefits of our technology on your workflows today, [get started for free here](https://studio.gataca.io/login "https://studio.gataca.io/login").

**Stay in the loop -** Keep yourself updated on the latest news and resources about decentralized identity by subscribing to our monthly newsletter [here](https://4728390.hs-sites.com/subscription "https://4728390.hs-sites.com/subscription").