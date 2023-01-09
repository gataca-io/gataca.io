---
date: 2022-02-22T12:38:12.000+00:00
meta_data:
  title: The Verifier Universal Interface (VUI) releases its first official draft
    to achieve interoperability between ID Wallets and Verifier components
  description: " Originally funded by eSSIF-Lab, a project funded by the European
    Commission within the Next Generation Internet Program, VUI aims to build a set
    of standard APIs to enable interoperability between ID Wallets and Verifier components."
  rrss_images:
    twitter: "/static/images/vui_blog_mainpic.png"
    facebook_and_whatsapp: "/static/images/vui_blog_mainpic.png"
    linkedin: "/static/images/vui_blog_mainpic.png"
title: The Verifier Universal Interface (VUI) releases its first official draft to
  achieve interoperability between ID Wallets and Verifier components
author: ''
hero_image: "/static/images/vui_blog_mainpic.png"

---
## The Verifier Universal Interface (VUI)

Over the course of a year, GATACA has been leading an interoperability working group called the Verifier Universal Interface (VUI). Originally founded by [eSSIF-Lab](https://www.ngi.eu/ngi-projects/essif-lab/ "https://www.ngi.eu/ngi-projects/essif-lab/"), a project funded by the European Commission within the Next Generation Internet Program, VUI aims to build a set of standard APIs to enable interoperability between ID Wallets and Verifier components.

As different technology providers build SSI solutions, it becomes critical to ensure interoperability between them. Available standards for SSI still have important gaps, leading us to an ecosystem of full-stack providers whose approach to interoperability is building proprietary plug-ins for each of the other available solutions. 

This approach to interoperability is not scalable. The underlying problem is that building standards take time. That is why we launched a practical and focused approach to enable scalable interoperability in the SSI community.

At GATACA, we proposed the SSI community start with a specific SSI component, namely the Verifier component, and lead the definition of the minimum standard APIs necessary to implement or interoperate with such module. **That is a role-centric approach to standardization at the API level.**

VUI identifies a minimum set of 6 APIs to offer an end-to-end credential verification flow.

1. DID resolution
2. Status resolution
3. Data agreements
4. Presentation exchange
5. Issuer resolution
6. Schema resolution

![](/static/images/vui-verifier-api-structure.jpg)

Since both DID Registry & Status resolution APIs have advanced pre-defined work, we set out to build a team to work on the remaining interfaces. In just one year, the VUI working group, composed of 12 SSI organizations, has been able to define APIs for Data Agreements, Presentation Exchange, and Issuer Resolution. 

It is important to note that our delivery for the Presentation Exchange API was an extension of the existing work based on WACI. As for the remaining API, Schema resolution, future work of VUI will involve its definition as it is the only one without a definition proposal or an existing normative reference.

VUI members can contribute in 2 main roles:

* Implementors - entities or individuals leading the definition of the APIs. They are responsible for:
  * defining an API proposal
  * defining a set of interoperability tests
  * delivering a service endpoint
* Integrator - entities or individuals committed to integrating said APIs into their technology stacks.
  * integrating the service endpoints in their technology stack
  * executing tests

Each API was organized in a different Working Package (WP), with associated implementors and integrators, while GATACA assumed the role of Coordinator to ensure consistency & alignment between different WP.

## Results

The results of these efforts include specifications built on ReSpec, API swaggers, and an open-source library that organizations can use to easily implement these APIs. Below are some details of each Working Package.

### Data Agreements

In current SSI architectures, there is little to no support for data agreements, also known as consent management, on the usage of Verifiable Credentials. 

On the one hand, there was some groundwork done by [Kantara](https://kantarainitiative.org/ "https://kantarainitiative.org/") on a generic [Consent Receipts](https://gataca-io.github.io/vui/dataAgreements#dfn-consent-receipts "https://gataca-io.github.io/vui/dataAgreements#dfn-consent-receipts") specification that could apply to any digital service, yet in the context of SSI frameworks, the only progress made was proprietary implementations of consent mechanisms, such as GATACA’s Verifiable Consent; but no proposal had received major adherence. 

Due to the standardization gap, the [Automated Data Agreement](https://gataca-io.github.io/vui/dataAgreements#dfn-data-agreement "https://gataca-io.github.io/vui/dataAgreements#dfn-data-agreement") (ADA) project was created under the EssifLab organization and led by [iGrant.io](http://igrant.io/ "http://iGrant.io") and built upon Kantara [Consent Receipts](https://gataca-io.github.io/vui/dataAgreements#dfn-consent-receipts "https://gataca-io.github.io/vui/dataAgreements#dfn-consent-receipts") to allow data privacy mechanisms to be enforced in the framework of Hyperledger Aries. Given the strong alignment with the Consent Management API defined at VUI, both teams decided to join forces into one single initiative.

Now, the VUI Data Agreement sub-ReSpec proposes a specific Data Model to manage data agreements, built upon both [Automated Data Agreements](https://gataca-io.github.io/vui/dataAgreements#dfn-data-agreement "https://gataca-io.github.io/vui/dataAgreements#dfn-data-agreement") and Kantara [Consent Receipts](https://gataca-io.github.io/vui/dataAgreements#dfn-consent-receipts "https://gataca-io.github.io/vui/dataAgreements#dfn-consent-receipts"). It also defines a basic protocol and the mechanisms to embed it inside a [Presentation Exchange](https://gataca-io.github.io/vui/dataAgreements#dfn-dif-presentation-exchange "https://gataca-io.github.io/vui/dataAgreements#dfn-dif-presentation-exchange"), which multiple exchange standards could support.

### Presentation Exchange

There are multiple known and adopted technology solutions or standards focused on the presentation exchange between a wallet and a verifier, the DIF Presentation Exchange (PE) data model being the most widely accepted. This is because DIF PE is compatible with multiple exchange protocols such as WACI, CHAPI, DID Comm, and DID Siop, making it scalable. 

To avoid further siloing the standards market by developing another PE data model from scratch, at VUI, we believed supporting a successful, pre-existing data model was the best approach and decided to develop an extension of the groundwork done at DIF PE. Our core work consisted of proposing new extension features, including:

* Linkage to the data agreement (as mentioned before)
* Mutual authentication (right now, it’s performed at the exchange layer protocol), and
* Mechanisms to improve the link between the credential subject and the person managing the wallet.

### Issuer resolution

Who should be trusted as an issuer? This is a common yet challenging question often asked in the online authentication space. In the past, many technology providers have attempted to provide generic solutions such as hardcoded lists in configuration files, API services, Domain name consultations, or Blockchain/DLT registries. 

In the SSI world, however, the Verifier has the final decision on who he/she will trust to supply valid, verifiable data.

One of the most mature trust frameworks for Issuers has been defined at the [EBSI/ESSIF ](https://ec.europa.eu/digital-building-blocks/wikis/display/CEFDIGITAL/EBSI "https://ec.europa.eu/digital-building-blocks/wikis/display/CEFDIGITAL/EBSI")project by the European Commission, which includes a trusted issuer registry designed with a complex governance protocol to determine who can issue which credentials and who can vouch for those issuers.

With this in mind, for VUI, we’re taking it one step further by designing a generic, platform-agnostic issuer registry approach that is portable across any governance platform. 

Our goal is to offer a generic adaptation compatible not only with EBSI/ESSIF trusted registries but also with any other trust framework, where the Verifier will have to build a generic query interface, similar to the Universal DID Resolver, to retrieve the issuers from any platform, and manage them at his preference.

## VUI Deliveries

The following section provides access links to VUI documentation: ReSpec specifications, API swaggers, and VUI core library.

**ReSpecs-** The primary documentation for the VUI working group consisted of one main ReSpec and 3 sub-ReSpec for each respective API.

Verifiable Universal Interface: [https://gataca-io.github.io/vui/](https://gataca-io.github.io/vui/ "https://gataca-io.github.io/vui/")

Data Agreements: [https://gataca-io.github.io/vui/dataAgreements](https://gataca-io.github.io/vui/dataAgreements "https://gataca-io.github.io/vui/dataAgreements")

Presentation Exchange: [https://gataca-io.github.io/vui/presentationExchange](https://gataca-io.github.io/vui/presentationExchange "https://gataca-io.github.io/vui/presentationExchange")

Issuer Resolution: [https://gataca-io.github.io/vui/issuerResolution](https://gataca-io.github.io/vui/issuerResolution "https://gataca-io.github.io/vui/issuerResolution")

**API Swaggers** - Since the Presentation Exchange and Data Agreements APIs are intrinsically related, we have consolidated them into one swagger. The Issuer Resolution swagger link can be found below.

Presentation Exchange & Data Agreements: [My New API](https://gataca-io.github.io/vui-core/issuerResolution.html)

Issuer resolution: [My New API](https://gataca-io.github.io/vui-core/issuerResolution.html)

**VUI-core library** - Consists of an open-source library that implements the above-mentioned APIs. While they do not obtain the complete functionality of a verifier, they offer the core implementation of these APIs.

[https://github.com/gataca-io/vui-core](https://github.com/gataca-io/vui-core "https://github.com/gataca-io/vui-core")

## Next steps

The VUI initiative has been steadily gaining international traction. It was recently mentioned in a [report published by the European Commission (DG Connect) and the Canadian Innovation, Science and Economic Development Canada, (ISED)](https://digital-strategy.ec.europa.eu/en/library/canada-eu-joint-workshop-series-enabling-interoperability-and-mutual-support-digital-credentials "https://digital-strategy.ec.europa.eu/en/library/canada-eu-joint-workshop-series-enabling-interoperability-and-mutual-support-digital-credentials"), as a key global interoperability approach to explore.

This is just the start. Moving forward, VUI can help the SSI community successfully achieve interoperability between Verifiers and Wallets, a necessary step toward mass adoption.

As we keep on maturing the Data Agreement, Presentation Exchange, and Issuer Resolution APIs, and launch the Schema resolution API working group, the next step for VUI includes the donation of the existing work to a large SSI standardization community for further evolution.

## Participating in VUI

We’re always looking for new organizations to join the VUI working group.

If you want a brief introduction, don’t miss our presentation at the next [DIFCon 2022](https://www.eventbrite.com/e/difcon-f2f-virtual-3-tickets-162786327287 "https://www.eventbrite.com/e/difcon-f2f-virtual-3-tickets-162786327287") (Feb 24th, at 18:40 CET).

For more information on how to join the team as an implementor or integrator, please reach out to us directly at [vui@groups.io](mailto:vui@groups.io "mailto:vui@groups.io") or subscribe to our communication list to keep updated on the latest news by sending an email to [vui+subscribe@groups.io](mailto:vui+subscribe@groups.io "mailto:vui+subscribe@groups.io").

***

Join Gataca in leading the digital identity revolution.

**Get started with Gataca Studio** - If you're curious to see the benefits of our technology on your workflows today, [get started for free here](https://studio.gataca.io/login).

**Chat with us -** We’d love to chat with you. Let us know your perspective and comments on this topic or anything Digital Identity-related. Join our [Telegram ](https://t.me/digitalidentityinsights)group.

**Stay in the loop -** Keep yourself updated on GATACA developments and how digital identities will transform our digital lives by subscribing to our newsletter [here](https://4728390.hs-sites.com/subscription).