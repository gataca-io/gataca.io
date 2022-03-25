---
date: 2022-03-25T14:07:09Z
meta_data:
  title: This is how GATACA achieves blockchain interoperability
  description: Interoperability has been GATACA’s priority since day 1, as one of
    the first SSI providers to be blockchain agnostic (also known as achieving blockchain
    interoperability). How?
  rrss_images:
    twitter: "/static/images/did_registry_blog_main.jpg"
    facebook_and_whatsapp: "/static/images/did_registry_blog_main.jpg"
    linkedin: "/static/images/did_registry_blog_main.jpg"
title: This is how GATACA achieves blockchain interoperability
author: ''
hero_image: "/static/images/did_registry_blog_main.jpg"

---
We’ve said this before and we’ll say it again: the only way for the benefit of [Self-Sovereign Identity ](https://gataca.io/blog/ssi-essentials-everything-you-need-to-know-about-decentralized-identity "https://gataca.io/blog/ssi-essentials-everything-you-need-to-know-about-decentralized-identity")technology to reach millions of users globally is for the SSI ecosystem to bet on **interoperability**.

Fortunately, all SSI stakeholders are well aware of the intrinsic need for it. As the market has matured, we have seen standard and regulation definitions revolve and be led by the pillar of interoperability. After all, the market has not only has been primarily characterized by, but also relies heavily upon a coopetition model given providers, regulators, and standardization bodies work together to rapidly bring SSI to life.

Interoperability has been GATACA’s priority since day 1, as one of the first SSI providers to be blockchain agnostic (also known as achieving blockchain interoperability). While other providers were sticking to one network as it facilitated certain developments, the GATACA team understood that marrying one blockchain was too risky given the rapidly changing and uncertain environment.

## The responsible party for blockchain interoperability: the DID registry

Being blockchain agnostic means we do not build upon or rely on one specific blockchain protocol or network and that our products can easily read & interact with different protocols or networks if needed. Our platform can verify Verifiable Credentials with DID documents published on different blockchains, enabling global interoperability. This benefits all stakeholders – providers, verifiers, and issuers – by eliminating vendor-lock-in to ensure the highest customer satisfaction.

For GATACA, blockchain agnosticism is possible due to our DID registry component: all incoming activity is delegated to the DID registry with specific connections to each blockchain so that the rest of our technology components do not have to participate in the process. Other components need not know where the information persists from; they delegate that special knowledge to the DID registry and continue to perform their regular activities as usual.

The DID registry component has a plugin-based architecture designed to allow support for new protocols on-demand in a matter of a few days (depending on the complexity of the protocol). The DID registry component is capable of quickly matching a DID to a specific blockchain it is stored in, implying a very high level of customization.

Below you can find a high-level overview of our plugin architecture.

![](/static/images/didregistry_blog.png)

## DID registry impact

The DID registry allows a lot more than matching DID methods with their relative blockchain, specifically, it enables our platform to:

* Broaden its capacities by establishing new connections to multiple protocols
* Work with different blockchain networks simultaneously
* Add specific configurations to the DID registry that allows further internal segmentation to support client needs
* Automatically deploy or load contracts into blockchain networks


* Have the capacity to interact with other GATACA DID registries, creating a network effect in which members can help balance resolution workload through delegation
* Allow the Wallet to manage multiple DID methods without needing to update the Wallet version
* Readily adapt to new/changing technologies

Being blockchain agnostic is just one of the ways in which GATACA is working towards its mission to make trusted digital identities easy for all stakeholders. In reality, GATACA not only bets on the agnosticism of a particular blockchain, but if required, to blockchain itself, and is exploring other storage solutions such as cloud-based Identity Hubs.

**Chat with us -** We’d love to chat with you. Let us know your perspective and comments on this topic or anything Digital Identity-related. Join our [Telegram ](https://t.me/digitalidentityinsights "https://t.me/digitalidentityinsights")group.

**Stay in the loop -** Keep yourself updated on GATACA developments and how digital identities will transform our digital lives [here](https://gataca.io/insights/decentralized-finance-self-sovereign-identity-a-tale-of-decentralization-a-new-paradigm-of-trust "https://gataca.io/insights/decentralized-finance-self-sovereign-identity-a-tale-of-decentralization-a-new-paradigm-of-trust").

Have a specific topic you’d like us to cover? Email us at [hello@gataca.io](mailto:hello@gataca.io "mailto:hello@gataca.io") - we’ll break it down for you in our upcoming blog articles.