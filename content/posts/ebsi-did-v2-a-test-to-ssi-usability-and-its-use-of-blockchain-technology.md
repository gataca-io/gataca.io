---
date: 2022-07-20T11:26:43.000+00:00
meta_data:
  title: 'EBSI DID v2: A test to SSI usability and its use of blockchain technology'
  description: 'In the past months EBSI has been working on the proposal of EBSI DID
    method v2, which changes the role of blockchain in SSI technology as we know it
    - so we decided to write about it. '
  rrss_images:
    twitter: "/static/images/ebsi_did_v2_blog.png"
    facebook_and_whatsapp: "/static/images/ebsididv2_blogmainpic.jpg"
    linkedin: "/static/images/ebsididv2_blogmainpic.jpg"
title: 'EBSI DID v2: A test to SSI usability and its use of blockchain technology'
author: ''
hero_image: "/static/images/ebsididv2_blogmainpic.jpg"

---
What’s all the recent activity with DIDs?

In the past months, there have been numerous debates and decisions being made regarding [Decentralized Identifier](https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs "https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs") [(DID)](https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs "https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs") specifications worldwide:

* On the one hand, the W3C, one of the most important internet standards organizations, [approved the DID spec as an official W3C recommendation despite formal objections from tech giants such as Google & Mozilla.](https://www.w3.org/2022/06/DIDRecommendationDecision.html)
* On the other hand, EBSI, the European Blockchain Services Infrastructure, announced changes to the EBSI DID method for natural persons affecting the DID interactions with blockchain networks for natural persons in the EBSI ecosystem.

While the first decision means great news for the SSI community, given that DIDs are its core concept to enable true decentralization, the second has generated controversy. 

In this blog, we’ll dive into the EBSI DID versions 1 & 2 and their potential implications, including advantages and disadvantages.

## EBSI DID version 1 vs. version 2

So far, SSI technology has been widely tied to the use of blockchain technology, but in reality, blockchain is replaceable in the SSI sector.

In SSI, DLTs are -in the vast majority of frameworks- only used for the storage and localization of trusted registries – never, ever for the storage of sensitive personal information [(e.g. Verifiable Credentials)](https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs) or transaction processes.

Regarding natural persons, the only blockchain registry linked to them is the [DID registry](https://gataca.io/blog/this-is-how-gataca-achieves-blockchain-interoperability). That is a database of all existing DIDs and their associated **DID documents** (which include public keys associated with such DID).

This connection between DIDs, DID documents, and DLTs has been standard in the SSI industry globally -including in EBSI DID v1- as it kept decentralized values at its core.

**However, European regulators deemed DIDs as personal information and the storage of DID documents in the blockchain non-GDPR-friendly for natural persons.** 

In response, the EBSI group has proposed EBSI DID v2 (see below), which eliminates the use of blockchain to register DID documents of natural persons, and therefore removes the link between a natural persons' DID and DLTs. 

In this new DID method, the public key can be derived from the DID itself so that no registry of public keys is necessary.

![EBSI DID Method v2](/static/images/ebsi_did_v2_blog.png)

Original DID methods include a scheme, a DID method, and a DID method-specific identifier. In v1, the Identifier section comprises a random set of numbers (think of it as a holder’s URL). In v2, the identifier now includes a JWK thumbprint with the holder’s Public Key.

This change has an impact on how verification flows should be implemented. The flow of information in standard SSI frameworks - and hence in EBSI DID v1- are as follows:

### **Scenario DID v1**

1. Issuer records its DID document in EBSI Ledger & issues VC to Holder
2. Holder shares VC + proof (containing DID and signature to prove ownership) with Verifier
3. Verifier verifies the Holder's identity by taking DID and retrieving the DID document from the DID registry in the EBSI Ledger, which contains the public keys used to verify the signature.

What does the flow look like now? Since the DID Document cannot be retrieved from EBSI, the Holder needs to send it along with shared VCs, as follows:

### **Scenario DID v2**

1. Issuer still records its DID Document in EBSI Ledger & issues VC to Holder
2. Holder shares VC + DID + DID document with Verifier, with no ties to the EBSI Ledger
3. Verifier verifies Holder's identity by verifying DID, which is now linked to the Holder’s public key, without referring to the EBSI Ledger

![DID Methods](/static/images/ebsididv2_flow.png)

_Please note that there are no changes or impacts on legal entities' DID process, only natural persons. DID documents for legal entities are still recorded in the EBSI ledger and follow the DID method v1._

## The EBSI DID v2 debate

Now that we’re all caught up with EBSI DID versions 1 & 2, let’s dive into the arguments and criticism for/against EBSI’s v2 approach and its impact on current and future SSI mechanisms:

### Arguments in favor of v2

* **DIDs are considered personal information, and thus registering them on the blockchain is against GDPR** (among other reasons, because “the right to be forgotten” cannot be implemented). V2 offers a GDPR-compliant SSI solution.
* **Given that the majority of DLTs are public, storing anything tied to a Holder’s identity risks security and privacy.** European authorities consider DIDs to be personal information as it is a holder’s representation in the digital world. Thus, they argue storing it in a public blockchain, accessible by any entity, violates holders' right to privacy.
* **Blockchain lasts forever; a person does not.** In V1, a holder's public keys would remain forever in the blockchain regardless if the holder loses access to their key pairs, wants to abandon the service, or passes away. V2 argues that there always exists the chance that a malicious hacker can obtain access to these forgotten/lost/inaccessible keys and commit identity fraud. While current computing powers make this almost impossible, one never knows what computing will be like in a few years.  
  V2 was proposed with this in mind: holders should be able to delete their key pairs and DID from the world if they wish to.

### Criticism against v2

* **DIDs cannot be considered personal information.** While DIDs are associated with a person, those against V2 argue DIDs themselves do not contain the actual personal information, Verifiable Credentials do, and VCs are never stored in the blockchain but in the holder’s device. A holder’s digital identity is created from a DID + VCs, but the DID acts as the glue that links the VCs issued by multiple issuers, but the DID itself truly only serves for the integrity and non-repudiation of validations.
* **Losing access to your cryptographic keys has major implications on user experience.** Providers like GATACA have implemented Key Rotation mechanisms similar to “change password” mechanisms. In this process, a new set of keys associated with a specific DID is generated, the old set revoked, and the update is registered on the blockchain DID registry, keeping a history of revoked keys. This key rotation mechanism, only possible in v1:
  * implies little to no effort from the holders, as it can be automatically performed or executed on demand
  * provides extra security since a set of keys can be renewed if the old ones are compromised or lost, without the need to revoke the entire DID and throw away all credentials issued to that DID.

  With v2, Key Rotation is impossible, given DIDs are tied to public keys, and the rotation of a key pair would imply the alteration of a DID. As v2 stands, if a holder loses access to their private key, they would have to request the re-issuance of all VCs, as the DID tie to these would no longer be valid. This can be especially cumbersome as certain issuance processes might involve physical presence.
* **V2 is a breaking change that makes interoperability with other frameworks much more difficult**, potentially leading to vendor lock-in situations.
* **Natural persons will no longer be able to configure specific use cases for public keys.** DID Documents allow a DID to have multiple sets of keys associated with it. This feature is helpful if we want to associate different keys for different purposes or to provide compatibility with different cryptographic protocols (e.g., to use different keys for authentication processes with a Level of Assurance High or Low). With V2, only one key can be associated with the DID, thus limiting current functionality.

## The future of self-sovereign identity technology

The EBSI DID method v1 & v2 represents the eternal debate of usability vs. privacy/security. While V1 ensured higher security & user experience via key revocation and other mechanisms, V2 guarantees a lifetime of privacy. How far away from usability are we willing to go to ensure privacy? Could V2 threaten mass adoption?

Furthermore, these slight changes are questioning the role blockchain has played in decentralized digital identity technology up until now, as well as the self-sovereignty of the technology itself.

Where will DID registries be stored now? The move to remove DIDs from blockchain generates some skepticism - is this the rise of semi-centralized databases? So far, v2 has not proposed another DID database or registry for verifiers to be able to consult whether a DID is active or not. 

Some SSI experts hypothesize that this first registry removal from the blockchain can give way to the rise of centralized DID databases by certain groups such as EBSI, member states, local authorities, etc., allowing the filtering of centralized thinking into a decentralized world. While DID databases being semi-centralized by certain groups is better than federated identities (big tech owning those databases), it still tarnishes the advantages of decentralized identity technology.

Ongoing tech specification changes such as this one show how decentralized technologies have yet to find compromises with real-world regulations, such as GDPR.

***

Join Gataca in leading the digital identity revolution.

**Get started with Gataca Studio** - If you're curious to see the benefits of our technology on your workflows today, [get started for free here](https://studio.gataca.io/login).

**Chat with us -** We’d love to chat with you. Let us know your perspective and comments on this topic or anything Digital Identity-related. Join our [Telegram ](https://t.me/digitalidentityinsights)group.

**Stay in the loop -** Keep yourself updated on GATACA developments and how digital identities will transform our digital lives by subscribing to our newsletter [here](https://4728390.hs-sites.com/subscription).