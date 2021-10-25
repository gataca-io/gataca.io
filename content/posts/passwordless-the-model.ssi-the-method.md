---
date: 2021-10-25T16:38:37Z
meta_data:
  title: ''
  description: ''
  rrss_images:
    twitter: "/static/images/password-less-authentication-sign-in-blog.jpg"
    facebook_and_whatsapp: "/static/images/password-less-authentication-sign-in-blog.jpg"
    linkedin: "/static/images/password-less-authentication-sign-in-blog.jpg"
title: Passwordless, the model. SSI, the method.
author: ''
hero_image: "/static/images/password-less-authentication-sign-in-blog.jpg"

---
# What is Passwordless Authentication?

The average user has around 100 passwords, according to [a study conducted by NordPass in 2020](https://securitybrief.co.nz/story/average-person-has-100-passwords-study "https://securitybrief.co.nz/story/average-person-has-100-passwords-study") , an increase of 25% over the previous year. The management of this number of passwords, complying with security recommendations, size and randomness of values, is impossible without the use of specific software for their storage, something that the vast majority of users do not use and causes the passwords to have to follow certain patterns to be memorized and even in cases where it is used, the user must manage the backups.

> 12.6 mins/week
>
> “Average time spent entering or resetting password per week PER employee”
>
>  ([Ponemon Authentication Report 2019]())

These are not minor problems, and although the username and password authentication method is still very widespread, every day there are more and more passwordless systems available to users.

The term “passwordless” refers to all platforms that have an authentication process in which the classic archetype of username and password access is not present. In user-password authentication, the user shares a secret (password) with the system and it is the responsibility of both to ensure that no one else knows the secret. A passwordless system works by creating a different temporary secret for each authentication, which it gives to the user to exchange in the authentication process.

There’s a clear difference between a user’s responsibility in both password-based and passwordless systems. In the first case, the user chooses the secret and must keep it secure, while in the second case a secret is generated with a maximum time duration, usually ten minutes or less, removing the need to guarantee privacy for long periods of time.

> “81% of hacking related breaches used either weak or stolen passwords”  
>  ([Verizon Data Breach Report 2017]())

## Types of Passwordless Authentication

### One-time password (OTP)

Due to their operation, Passwordless systems need a secure channel, through which system and user can communicate, guaranteeing the transmission of the secret. Some of the most widespread types are:

Secrets sent by SMS or emails, makes use of these channels as a way of communicating one-time passwords (OTP) or special links. Given the ubiquity of cell phones or email, it is one of the most common implementations.

### Single Sign-on (SSO)

Another popular implementation is known as SSO. Systems that use this flow employ a trusted third party, who does the work of identifying the user on their systems and provides the user profile information to the new system.

SSO systems emerged from the hand of social networks, such as Facebook, Twitter, Instagram or Google among others, which have a large number of users and allow others to authenticate their users through their platforms (ie. commonly encountered as “Log in with Google”). These companies have a great reputation, as well as resources to ensure the security and integrity of authentications.

## Benefits

Users, administrators, and organizations can reap great benefits from switching to a passwordless authentication system. Some of the most important advantages include:

* **Administrators**

For administrators, password management is a complex task, as they must ensure the security of highly sensitive data, in addition to dealing with the complexity of key rotation and revocation. Passwordless systems eliminate these problems, which increases worker productivity.

* **Users**

Similarly, users benefit from the ease of use of not having to manage their username and password, saving and rotating the password for security. It also eliminates the security vulnerability caused by the practice of reusing the same password, or small variations of it, across different services. This generates greater security, both for the user and for companies, since possible theft or identity theft, as a result of social engineering attacks and attacks on other platforms with similar or even identical passwords, are considerably reduced.

* **Organizations**

In addition to increasing the productivity of system administrators, boosting security and improving user experience, organizations can also achieve considerable cost reductions. According to a Gartner study, between 20%-50% of incidents received by helpdesks are due to password resets. Forrester Research estimates that the cost of each reset request costs around $70, although Auth0 has already indicated that some of its customers report costs as high as $120 per reset.

> “According to the Gartner Group, between 20% to 50% of all help desk calls are for password resets. Forrester Research states that the average help desk labor cost for a single password reset is **about $70**." ([SearchEnterpriseDesktop](https://searchenterprisedesktop.techtarget.com/tip/Resetting-passwords-in-the-enterprise-without-the-help-desk))

**The passwordless paradigm is gaining more and more traction every day. The reasons are clear: ease of use, added security and lower costs make this technology superior.**

## Drawback

While passwordless systems are undoubtedly the preferred choice in terms of authentication systems, they are not problem-less. These problems depend on the type of implementation chosen (so far, in this article we have discussed OTP and SSO systems).

The problem with OTP systems is the communication channel between the user and the system. When using an email, we use a system that is accessed through a username and password, at least the majority of the time since this is the most common configuration, which cancels out all the advantages of the this passwordless system. **The weakest link in the chain of defense in cyber-attacks is the user** and the most direct and simple way to attack is by email, so it is not surprising that it [is the major vector of attack on companies](https://www.ibm.com/downloads/cas/M1X3B7QG "https://www.ibm.com/downloads/cas/M1X3B7QG").

You may be thinking that receiving the OTP code via SMS is the solution, but you are wrong. At first glance, it may seem more secure, yet SMS is just as vulnerable. Mobile applications with malware, duplicate SIM cards or insecure networks are some of the possible attack vectors for SMS. **The privacy and security of your messages is not guaranteed.**

Authentication systems based on SSO (Single Sign-On) are not exempt from attacks, on the contrary, they are often the main target as they hold valuable information. As we have introduced above, SSOs are usually controlled by large companies, usually in the technology sector, which offer their services free of charge. In return, they collect large amounts of information from their users, from which they extract patterns of consumption, personality or behavior, among many others, which are used to display tailored advertising or to market all this knowledge in all kinds of areas, even in a subject as serious as **modifying people's behavior.**

> The Times reported that in 2014 contractors and employees of Cambridge Analytica, eager to sell psychological profiles of American voters to political campaigns, acquired the private Facebook data of tens of millions of users — the largest known leak in Facebook history. ([New York Times 2018](https://www.nytimes.com/2018/03/17/us/politics/cambridge-analytica-trump-campaign.html))

You might be thinking to yourself “that’s it, there’s no such thing as a safe authentication method.”

Guess again!

## Self-Sovereign Identity (SSI)

Self Sovereign Identity or SSI is a new digital identity model that aims to give users back control of their data, so that they can choose what data they share and who they share it with. SSI also has different implementations, but they all share this philosophy.

From the user's point of view, they simply scan a QR code to authenticate themselves online, so it’s safe to assume that SSI belongs to the Passwordless category, sharing all its advantages and adding more privacy and control over data.

It works through the exchange of digital credentials, cryptographically signed, between the user and the system, through public key schemes or PKI, distributing the public keys through DLT or Blockchain technology.

The use of Blockchain is mainly to be able to share information in a decentralized way, which makes SSI more resilient to attacks, as there is no single centralized point of failure that maintains the information. In addition, traceability of changes and data integrity is guaranteed with this technology.

This structure allows the inclusion of new participants in the network in a transparent and secure way for the rest of the nodes, together with the fact that the sensitive information is kept by citizens in their digital wallets and the cryptographic keys are shared through public networks, allowing governments not to depend on any company, being able to adopt SSI for their processes of issuing credentials, permits, licenses, certificates or any procedure that requires **strong identification**.

## Why SSI?

One of the most important problems of digital identity is the difficulty of guaranteeing a strong identification. **On the Internet we talk about profiles or avatars, but in most cases we do not know with certainty who is the real person behind that profile or avatar**. The services that need strong identification, usually public administration processes, have different requirements, even with different implementations, depending on the country, city or specific procedure.

This diversity of applications frustrates the citizen, who does not have a single window to access the administration, and also frustrates the public administration, which has to maintain different applications, making internal integrations difficult, which reduces its flexibility and agility to change. In the same way, private sectors such as banking, telecommunications or insurance, among others, could make use of a strong identification process, with which to update their processes or provide new services. **We expect mass adoption of this technology will trigger a whole series of synergies between the public and private sectors.**

This might seem like a distant reality, but worry not! The [European Commission is already betting on digital identity architectures based on SSI principles](https://gataca.io/insights/here-s-what-the-new-eidas-proposal-really-means-for-the-ssi-community-in-6-key-points "https://gataca.io/insights/here-s-what-the-new-eidas-proposal-really-means-for-the-ssi-community-in-6-key-points").

SSI is the latest version of digital identity and, as in any evolutionary process, it builds on past mistakes and problems to develop new models. As a Passwordless system, SSI continues to offer all the advantages of ease of use, security and cost reduction, but with a more robust and secure design.

Photo by [cottonbro](https://www.pexels.com/@cottonbro?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels) on [Pexels](https://www.pexels.com/photo/netflix-on-an-imac-5082561/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

**Chat with us -** We’d love to chat with you. Let us know your perspective and comments on this topic, or anything Digital Identity related. Join our [Telegram ](https://t.me/digitalidentityinsights)group.

**Stay in the loop -** Keep yourself updated on GATACA developments and how digital identities will transform our digital lives [here](https://gataca.io/insights/decentralized-finance-self-sovereign-identity-a-tale-of-decentralization-a-new-paradigm-of-trust).

Have a specific topic you’d like us to cover? Email us at [hello@gataca.io](mailto:hello@gataca.io "mailto:hello@gataca.io") - we’ll break it down for you in our upcoming Ask The Expert interviews.