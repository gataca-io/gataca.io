---
date: 2021-10-25T16:38:37.000+00:00
meta_data:
  title: Passwordless, the model. SSI, the method.
  description: The average user has around 100 passwords, according to a study conducted
    by NordPass in 2020 , an ...
  rrss_images:
    twitter: "/static/images/password-less-authentication-sign-in-blog.jpg"
    facebook_and_whatsapp: "/static/images/password-less-authentication-sign-in-blog.jpg"
    linkedin: "/static/images/password-less-authentication-sign-in-blog.jpg"
title: Passwordless, the model. SSI, the method.
author: ''
hero_image: "/static/images/password-less-authentication-sign-in.jpg"

---
# What is Passwordless Authentication?

The average user has around 100 passwords, according to [a study conducted by NordPass in 2020](https://securitybrief.co.nz/story/average-person-has-100-passwords-study "https://securitybrief.co.nz/story/average-person-has-100-passwords-study"), an increase of 25% over the previous year. 

The management of this number of passwords, complying with security recommendations, size, and randomness of values, is impossible without the use of specific software for their storage, something that the vast majority of users do not use and causes the passwords to have to follow specific patterns to be memorized and even in cases where it is used, the user must manage the backups.

> 12.6 mins/week
>
> “Average time spent entering or resetting password per week PER employee” ([Ponemon Authentication Report 2019]())

These are not minor problems, and although the username and password authentication method are still very widespread, every day, there are more and more passwordless systems available to users.

**The term “passwordless” refers to all platforms with an authentication process in which the classic archetype of a username and password access is not present.** 

In user-password authentication, the user shares a secret (password) with the system, and it is the responsibility of both to ensure that no one else knows the secret. A passwordless system works by creating a different temporary secret for each authentication, which it gives to the user to exchange in the authentication process.

There’s a clear difference between a user’s responsibility in password-based and passwordless systems. In the first case, the user chooses the secret and must keep it secure, while in the second case, a secret is generated with a maximum time duration, usually, ten minutes or less, removing the need to guarantee privacy for long periods of time.

## Types of Passwordless Authentication

### One-time password (OTP)

Due to their operation, Passwordless systems need a secure channel through which the system and user can communicate, guaranteeing the transmission of the secret. Some of the most widespread types are:

Secrets sent by SMS or emails make use of these channels as a way of communicating one-time passwords (OTP) or special links. Given the ubiquity of cell phones or email, it is one of the most common implementations.

### Single Sign-On (SSO)

Another widespread implementation is known as SSO. Systems that use this flow employ a trusted third party, who does the work of identifying the user on their systems and provides the user profile information to the new system.

SSO systems emerged from the hand of social networks (i.e. commonly encountered as “Login with Google”). 

## Benefits

Users, administrators, and organizations can reap great benefits from switching to a passwordless authentication system. Some of the most important advantages include:

* **Administrators**

For administrators, password management is a complex task, as they must ensure the security of highly sensitive data, in addition to dealing with the complexity of key rotation and revocation. Passwordless systems eliminate these problems, which increases worker productivity.

* **Users**

Similarly, users benefit from the ease of use of not having to manage their username and password, saving and rotating the password for security. It also eliminates the security vulnerability caused by the practice of reusing the same password, or small variations of it, across different services. 

This generates greater security, both for the user and for companies, since possible theft or identity theft, as a result of social engineering attacks and attacks on other platforms with similar or even identical passwords, are considerably reduced.

* **Organizations**

In addition to increasing the productivity of system administrators, boosting security, and improving user experience, organizations can also achieve considerable cost reductions. 

> “According to the Gartner Group, between 20% to 50% of all help desk calls are for password resets. Forrester Research states that the average help desk labor cost for a single password reset is **about $70**." ([SearchEnterpriseDesktop](https://searchenterprisedesktop.techtarget.com/tip/Resetting-passwords-in-the-enterprise-without-the-help-desk))

**The passwordless paradigm is gaining more and more traction every day. The reasons are clear: ease of use, added security, and lower costs make this technology superior.**

## Drawbacks

While passwordless systems are undoubtedly the preferred choice in authentication systems, they are not problem-less. These problems depend on the type of implementation chosen (so far, in this article, we have discussed OTP and SSO systems).

The problem with OTP systems is the communication channel between the user and the system. When using an email, we use a system that is accessed through a username and password, at least most of the time, since this is the most common configuration, which cancels out all the advantages of this passwordless system. 

**The weakest link in the chain of defense in cyber-attacks is the user,** and the most direct and simple way to attack is by email, so it is not surprising that it [is the major vector of attack on companies](https://www.ibm.com/downloads/cas/M1X3B7QG "https://www.ibm.com/downloads/cas/M1X3B7QG").

You may think receiving the OTP code via SMS is the solution, but you're mistaken. Mobile applications with malware, duplicate SIM cards, or insecure networks are some of the possible attack vectors for SMS. **The privacy and security of your messages are not guaranteed.**

Authentication systems based on SSO (Single Sign-On) are not exempt from attacks. On the contrary, they are often the main target as they hold valuable information. As we have introduced above, SSOs are usually controlled by large companies, usually in the technology sector, which offer their services free of charge. 

In return, they collect large amounts of information from their users, from which they extract patterns of consumption, personality, or behavior, among many others, which are used to display tailored advertising or to market all this knowledge in all kinds of areas, even in a subject as serious as **modifying people's behavior.**

> The Times reported that in 2014 contractors and employees of Cambridge Analytica, eager to sell psychological profiles of American voters to political campaigns, acquired the private Facebook data of tens of millions of users — the largest known leak in Facebook history. ([New York Times 2018](https://www.nytimes.com/2018/03/17/us/politics/cambridge-analytica-trump-campaign.html))

You might think, “that’s it; there’s no safe authentication method.”

Guess again!

## Self-Sovereign Identity (SSI)

Self-Sovereign Identity, or SSI, is a new digital identity model that aims to give users back control of their data so they can choose what data they share and who they share it with. SSI also has different implementations, but they all share this philosophy.

From the user's point of view, they scan a QR code to authenticate themselves online, so it’s safe to assume that SSI belongs to the Passwordless category, sharing all its advantages and adding more privacy and control over data.

It works through the exchange of digital credentials, cryptographically signed, between the user and the system, through public key schemes (PKIs), distributing the public keys through DLT or Blockchain technology.

The use of DLTs makes SSI more resilient to attacks, as there is no single centralized point of failure that maintains the information. In addition, traceability of changes and data integrity are guaranteed with this technology.

This structure allows the inclusion of new participants in the network transparently and securely for the rest of the nodes, together with the fact that citizens keep the sensitive information in their digital wallets, and the cryptographic keys are shared through public networks. 

This allows governments not to depend on any company and being able to adopt SSI for their processes of issuing credentials, permits, licenses, certificates, or any procedure that requires strong identification.

## Why SSI? Give it a try with Gataca Studio. 

SSI is the latest version of digital identity and, as in any evolutionary process, it builds on past mistakes and problems to develop new models. As a Passwordless system, SSI continues to offer all the advantages of ease of use, security, and cost reduction but with a more robust and secure design.

Gataca Studio is a low-code decentralized identity verification platform designed for businesses that wish to implement full-stack SSI tech with little integration effort.

  
![](/static/images/picture-1.png)

**Get started with Gataca Studio** - If you're curious to see the benefits of our technology on your workflows today, [get started for free here](https://studio.gataca.io/login).

**Chat with us -** We’d love to chat with you. Let us know your perspective and comments on this topic or anything Digital Identity-related. Join our [Telegram ](https://t.me/digitalidentityinsights)group.

**Stay in the loop -** Keep yourself updated on GATACA developments and how digital identities will transform our digital lives by subscribing to our newsletter [here](https://4728390.hs-sites.com/subscription).