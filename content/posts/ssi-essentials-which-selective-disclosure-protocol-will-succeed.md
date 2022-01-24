---
date: 2022-01-24T15:46:42Z
meta_data:
  title: 'SSI essentials: Zero Knowledge Proof (ZKP) and Selective Disclosure, till
    death do us part?'
  description: An overview of the basics of Selective Disclosure and the most popular
    methods explored by SSI providers to achieve it.
  rrss_images:
    twitter: ''
    facebook_and_whatsapp: ''
    linkedin: ''
title: 'SSI essentials: Which Selective Disclosure protocol will succeed?'
author: ''
hero_image: "/images/zkp.jpg"

---
Zero-Knowledge Proof (ZKP) has been given the spotlight in the past year. In theory, ZKP is a protocol that enables one party to prove a statement to another party by **only revealing that the statement is true & leaking no other information**; it has a variety of use cases, but for the purpose of this article we will be focusing on the Selective Disclosure use case. For context, Selective DIsclosure is “the ability of an individual to granularly decide what information to share” ([W3C](https://w3c-ccg.github.io/data-minimization/#selective-disclosure)).  For example, an individual who is trying to prove they are overage to enter a bar, rather than sharing all the information that is included in their ID card, they only share their date of birth.

Many claim ZKP is intrinsic for true privacy-preserving [**Self-Sovereign Identity**](https://gataca.io/blog/ssi-essentials-everything-you-need-to-know-about-decentralized-identity) technology, in particular, to help SSI providers achieve Selective Disclosure for Verifiable Credentials. While all we SSI enthusiasts are working towards making Selective Disclosure a reality and the norm, the truth is current Selective Disclosure solutions based on ZKP protocols are far from achieving their full potential. In fact, ZKP is not the only solution to achieve Selective Disclosure. Alternatives include just-in-time issuance of Verifiable Credentials made for a specific purpose or trusted witness solutions where an entity acts as a trusted intermediary.

This article will analyze the basics of Selective Disclosure and the most popular methods explored by SSI providers using ZKP and alternative protocols. 

## The basics of Selective Disclosure for Verifiable Credentials 

[**Verifiable Credentials**](https://gataca.io/blog/self-sovereign-identity-ssi-101-decentralized-identifiers-dids-verifiable-credentials-vcs) (VCs) are an integral part of the Self-Sovereign Identity paradigm, as they **are the backbone for users’ secure, passwordless, and instant access to digital services**. As a refresher, VCs are the digitized, standardized, encrypted versions of your traditional identity documents including passports, vaccination cards, marriage certificates, etc.

The standard Verifiable Credential is a multi-claim credential; that is, one that contains multiple claims (or attributes). For instance, a Verifiable Credential that represents a Driver's License includes several claims in it: Full Name, ID Number, Date of Birth, Street Address, Zip Code, City, and more. 

Due to their cryptographically signed nature, **a VC can be automatically verified** (or confirmed its information is true) by verifiers, entities that wish to verify you are who you claim to be online. This is based on standard cryptographic signatures schemes.  In a standard VC signature scheme, issuers sign the VC with their _private_ key and produce a signature, a proof that is included in the VC. On the other side, a verifier simply uses the issuer’s _public_ key to prove the signature is valid.

![](/images/zkp_blog_img1.png)

When receiving a VC, verifiers have access to the claims it contains, as well as to the signature made by the credential issuer. But, why should a verifier have access to all the claims in a VC if it only requires one for verification? For example, why does a bouncer at a bar have access to the user’s address in their ID card if he only needs to read the birthdate? Even more, is there a way to prove a user is over age without even disclosing their birthdate?

**This is the basic thought behind the concept of Selective Disclosure: no information should be shared beyond what is truly necessary to execute a transaction.** SSI providers are taking a stab at it using both ZKP-based and alternative methods.

Next up, we will be diving into the three most popular approaches to Selective Disclosure by top SSI providers and one slightly more advanced solution that has yet to be introduced in our market:

1. Selective Disclosure via Monoclaim Credentials
2. Selective Disclosure via BBS+ Signatures 
3. Selective Disclosure Predicates
4. zk-sNARKs (non-SSI)

Follow along!

## Selective Disclosure via Monoclaim credentials

Monoclaim credentials are a selective disclosure method by which a multi-claim credential is technically divided into a subset of mono-claim credentials, each containing one single claim with an associated cryptographic proof. For example, the VC representing a Driver’s License would be technically divided into a subset of 6 monoclaim VCs, one per claim contained in a Driver’s License. The issuer then individually signs each claim. This technical split is seamless to the user, as the subset is grouped into the VC Group “Driver’s License” and visually presented as one single VC in their Wallet.

IMAGE2

As a result, credential holders can reveal and confirm certain claims of a VC group by sharing only one of the monoclaim VCs that conform to the group, following  standard cryptographic signature processes:

![](/images/zkp_blog_img3.png)

Note that this approach is compatible with multi-claim credentials, as a Credential Group could be composed of both monoclaim and multi-claim credentials, with the only caveat being that the claims contained in multi-claim credentials could not be selectively disclosed. This feature is useful for 2 reasons: 

* to implement selective disclosure while keeping compatibility with existing schemas and frameworks that do not yet support selective disclosure (e.g. EBSI)
* to enable an Issuer to link claims - that is to avoid sharing them independently- (e.g. a driver’s license number and its expiration date), while enabling selective disclosure on other claims

Nevertheless, while monoclaim VCs offer the introduction of selective disclosure and zero-knowledge proofs in the SSI world, they are not a scalable long-term solution, particularly with complex VC schemas. If a certain credential schema were to have 40+ data fields, the computational cost to cryptographically separate the claims becomes inefficient.

While we wait for ZKP to mature and spread out and for these ZKP protocols to be included as legally recognized methods by regulatory bodies like ENISA, the monoclaim credential approach offers a temporary solution for full Selective Disclosure capabilities.

## Selective disclosure via BBS+ signatures

Just like monoclaim credentials allow users to share specific claims from a VC, BBS+ Signatures is a multi-message digital signature scheme (named after its creators Boneh, Boyen, and Shacham) that gives users the possibility of sharing VCs with only certain attributes revealed. How does it work?

**BBS+ signatures allow a VC holder to derive proofs from the original signature**:

* **Deriving a proof**: To derive a proof, a holder takes the signed VC, chooses to hide one, several, or none of the containing claims, and creates a new signature (a derived proof) using the issuer’s public key. This derived proof can prove holder knows all of the original claims contained in the VC but chooses only to reveal the required ones. 
* **Verifying a proof**: To verify the proof, the verifier validates the derived proof using the issuer's public key. This process enables the verifier to confirm the validity of the proof, which in itself proves that the subset of claims was part of an original message signed by the Issuer. 

Below is an overly-simplified model of how BBS+ signatures work.

![](/images/zkp_blog_img4.png)

**An advantage of BBS+ signatures is that they allow a holder to keep the original signature safe,** which adds another layer of privacy to verifiable credentials: verifiers can no longer correlate issuer signatures. In turn, holders have complete control to decide when and what must be revealed, removing this power from the signer. 

The main downside to BBS+ signature scheme VCs is that it does not support ZKP predicates (explained in the next section). Yet, in comparison to the monoclaim credential approach, BBS+ signature schemes remain a more scalable choice for Selective Disclosure.

More details on BBS+ signature schemes below:

* JSON-LD BBS+ specification: [https://w3c-ccg.github.io/ldp-bbs2020/](https://w3c-ccg.github.io/ldp-bbs2020/ "https://w3c-ccg.github.io/ldp-bbs2020/") 
* BBS+ signature scheme: [https://mattrglobal.github.io/bbs-signatures-spec/](https://mattrglobal.github.io/bbs-signatures-spec/ "https://mattrglobal.github.io/bbs-signatures-spec/") 
* BBS+ cryptography: [https://eprint.iacr.org/2016/663.pdf](https://eprint.iacr.org/2016/663.pdf "https://eprint.iacr.org/2016/663.pdf")

## Selective Disclosure Predicates

A novel selective disclosure approach that goes beyond hiding non-necessary attributes is the implementation of predicates in the sharing/verification of verifiable credentials. **Predicates allow verifiers to check a value (for example age) against a certain condition (subject’s age must be greater than 18), successfully limiting the amount of information disclosed (the subject’s specific age is never revealed).**

The predicate policies are normally set by the verifier who uses it as a method to verify/authenticate its users (let’s continue with the previous example of a Bar verifier). How does it work? Well, verifiers can create predicate policies & conditions such as designating certain ranges (Alice must be over 18) or requesting membership to a specific set (Alice has to be an alum of University X). Users respond to this policy with FALSE/TRUE values rather than revealing claim values. This is achieved with certain signature types, that allow claims from a standard verifiable credential to be presented as predicates. 

But the use case goes beyond age verification and can include account balance or credit scores which is highly sensitive personal data that is often requested by real estate agents when renting/buying a home, or by banks when taking out a loan.

The main setback of this approach is that predicate policies in Verifiable Credentials can only be used for limited types of verifications: “greater/smaller than” conditions and for numeric value verification, with constraints the verifier in the types of selective disclosure-based authentication they can do. For now, the potential of predicate policies in Verifiable Credentials ends here.

Recommended reading around predicates: 

* [https://medium.com/51nodes/selectively-disclosed-verifiable-credentials-79a236b81ee2](https://medium.com/51nodes/selectively-disclosed-verifiable-credentials-79a236b81ee2 "https://medium.com/51nodes/selectively-disclosed-verifiable-credentials-79a236b81ee2") 

## SNARKs 

Other organizations are exploring alternative ZKP protocols like zk-SNARKs. SNARKs stands for Succinct Non-interactive Argument of Knowledge. Like BBS+ signatures schemes, the general concept of zk-SNARKS cryptographic solution uses proofs but works by enabling the production of a proof that proves the possession of information, without revealing the inputs used to obtain the information, and requiring no interaction between the prover and verifier. 

This is possible by “turning what you want to prove into an equivalent form about knowing a solution to some algebraic equations” ([ZCash](https://z.cash/technology/zksnarks/)).

This solution has a tremendous potential impact to give users fast Zero-Knowledge interactions with their verifiable credentials. Unfortunately, we have yet to see the application of zk-SNARKs on VCs, as the solution is mainly being pioneered in the crypto world to prove the validity of crypto transactions.

The single, yet costly barrier to the construction and application of zk-SNARKS lies in its cryptographic complexity that makes it computationally expensive.

More info on the use of SNARKs for selective disclosure in Verifiable Credentials in this Whitepaper:

* [https://github.com/decentralized-identity/snark-credentials/blob/master/whitepaper.pdf](https://github.com/decentralized-identity/snark-credentials/blob/master/whitepaper.pdf "https://github.com/decentralized-identity/snark-credentials/blob/master/whitepaper.pdf") 

## Conclusion

While the concept of Selective Disclosure using ZKP technology remains in an emerging state, we cannot deny the potential it has and the progress of the market’s approach to it so far. As they stand, all 4 aforementioned solutions can succeed in the short term, and they are already doing it. But in the long term, the concern goes beyond scalability, the problem becomes interoperability. If each SSI provider develops its own approach to selective disclosure & ZKP, can we ensure that they will all lead to global interoperability between vendors & verifiers? The current variety of methodologies and the multiplicity of approaches to data management can inhibit mass adoption.

Selective Disclosure is also lacking a common framework for vendors and applications to leverage, especially for the SSI space. Despite being a nascent industry itself, Self-Sovereign Identity has realized that the standardization and establishment of technical & regulatory frameworks are the keys to obtaining legal validity for selective disclosure mechanisms. 

Regardless of the barrier to overcome, it is precisely these types of small innovative steps by the technology providers themselves that will move us one step closer to finding one or a combination of common ground Selective Disclosure solutions that are flexible, scalable, and easy-to-implement.