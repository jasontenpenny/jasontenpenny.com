---
title: Why I ditched Proton for Fastmail
date: 2024-02-19 13:22:00
tags: [email service, privacy]
category: General
redirect_from: [/blog/general/2024/02/19/why-i-ditched-proton-for-fastmail.html, /posts/why-i-ditched-proton-for-fastmail/]
---

Countless words have been written about the importance of privacy in today's world. While many people might not realize privacy's importance, I do, and I have invested time and money in utilizing privacy-focused products. I don't want to rehash all the privacy arguments, we'll just take its importance as a given for the purpose of this article. Instead, what I'd like to do is relay my personal experience around Proton and why I decided to move away from it for my personal email, calendar, and storage needs.
<!-- more -->

I want to start off by saying that Proton is a great company, and despite moving away from them as my primary ecosystem, I am still retaining my account (albeit at a lower subscription level) so that I am contributing to their mission. I appreciate their commitment to knowing as little as possible about how you use their service, and what for. I think they have set the bar for developing privacy-first services. That being said, I think their implementation is still lacking in some key areas, and for me, this was what drove me away.

I've been avoiding Google for years. And about a year and a half ago, I decided to move away from using Microsoft's Outlook email service as my primary email service. I had a couple of reasons for doing so. One was that I have some custom domains that I wanted to use on my primary mailbox, and Microsoft is taking away the ability to link a custom domain to personal Microsoft accounts. Second, I'm not really in Microsoft's ecosystem, so I wanted to stop paying for my Microsoft 365 Personal subscription. For me personally, I don't need the full Microsoft Office suite on my personal account (I get it through my work account), and I am suspicious of how much they use my data for analytics, training AI, and things like that. So at that point I made a move to Proton, since it was a service entirely built around the concepts of privacy. I knew there were some usability hurdles right away, but I decided to try to overcome or work around them. Eventually, though, it became too much and I started looking for an alternative. Fastmail was that alternative.

## Lack of real contacts support

Perhaps the most frustrating of the limitations Proton has is their lack of contacts support. Yes, they have a rudimentary contact list that gets automatically populated with addresses you send emails to, but it cannot replace your normal contact list. There are a couple of reasons for this. First, since everything is end-to-end encrypted and they don't have a CALDAV or similar implementation, there is no way to make the contacts available on your devices for other apps. The most obvious use case for this is text messages. There is no way to link the Proton contact list to your text messages. So this means you'd have to maintain two separate contact lists. And this pushes you toward not using Proton's contact list at all.

But the drawback of not using Proton's list is that you then don't have access to any contact information when using their web interfaces. This means that if you were needing to send an email to someone you don't contact often, or you wanted to share something out of their Drive storage system, you'd have to go reference your other contact list for the information. Granted, most of the time you're likely to be using one of your devices anyway, so this might not be _that_ big of a deal. But for me, it was a frustrating point that contributed to the overall decision.

## Issues with calendar

Another pain point I experienced had to do with calendars. Proton's calendar app has come along way (granted it's still fairly new), but it's still not great. While I could make do with the mobile apps, I would appreciate some additions like widgets to let me see my upcoming calendar appointments at a glance. Overall it's workable on mobile.

The real challenge came on the desktop. Like the contacts issue, there's no way to access the Proton calendar from your desktop, other than using the web apps. This means that I could not set up a calendar app that consolidated my work and personal calendars in one view. I did work around this by publishing my Proton calendar as an iCal link, and then subscribing to it on my laptop. But this iCal subscription is read only, so I would have to open the web version of calendar to make any edits to my events. It isn't an optimal setup.

## Improvements that would help

There are definitely ways that Proton could improve these issues. They are already making strides toward some of it by introducing a desktop app for Mail and Calendar (currently in beta). This definitely makes it easier to access your calendar, especially once they turn on offline access. But that still doesn't solve the issues with calendar.

One way they could improve things on the desktop side of things is to build out additional features to the Proton Bridge product. For review, this is an app that runs on your PC, and it runs a local IMAP server so that you can load your Proton email in a 3rd party email client. If they were to add CALDAV and CARDDAV support so that it could also load your calendar and contacts into the 3rd party client, that would basically solve the issues at the desktop level.

There would still be issues on the mobile side of things, but some of those are going to be limited by the mobile operating systems and how they lock certain things down. They don't have the ability to create a Bridge-like product for mobile. One possible improvement could be to add a feature like Microsoft's Outlook app has where it syncs the contacts into the mobile device's contact list.

## What Fastmail offers

The biggest selling point for Fastmail when comparing against Proton was the fact that they support the normal protocol standards of IMAP, CALDAV, and CARDDAV. This allows me to use my preferred clients on all my devices. The drawback, though, is that they don't do end-to-end encryption. So because they're using standard protocols, they don't have the ability to provide the level of privacy that Proton does. For me, I was less concerned about this. I am not doing sensitive work that requires the levels of privacy that dictate E2E encryption. I am willing to settle for pretty decent privacy (not to be confused with the encryption mechanism called PGP, or pretty good privacy).

Fastmail is also much more generous with their domains and email addresses. They don't have a hard limit on domains or email addresses, whereas Proton does have some limitations there. Granted, these limitations are not something I was running up against, but it was something I noticed in the selling point.

Another nice plus for me is Fastmail's integration with 1Password. I have been a 1Password user for many years, and this integration makes it very easy to generate random email addresses (masked email addresses, in Fastmail's terminology) when needed for web forms. Fastmail supports an unlimited number of these, and 1Password lets Fastmail generate one and then documents it right along with a generated password when creating online accounts. Proton has this kind of functionality with their newly released Proton Pass product, but I had never started using that since I've had 1Password for so long.

Fastmail has also created some nice ways to interact with their spam filter. Handling spam could be the subject of a longer discussion, but for now I'll just briefly touch on it. Most mail services only improve their spam filters when you report things as spam or not spam. Just moving an item into or out of the spam folder doesn't actually report it to companies. This means that typically you would have to go into the mail service's dedicated app or webmail in order to report messages. Fastmail has an awesome feature where you can tell the spam filter to use certain folders to make improvements to its algorithms. This means that you can set up a filter to send false positives to. It will analyze those and not mark them as spam in the future. Similarly, you can set up a folder where you send spam that it did not catch, and it will learn those for the future. This means that you can effectively report spam from whatever mail client you decide to use.

I'll also say that Fastmail is a little friendlier for managing multiple accounts. If I wanted to bring other of my family members into Proton (while sharing domains), there's really only one viable subscription option, and that's $20/month when signing up for 2 years. Fastmail has more flexibility where each account can have a different level of service, allowing for mix and match. The result is that you could theoretically fit a few more people into the same cost, although the service isn't quite the same. Fastmail doesn't provide VPN services, and they don't have the same document storage functionality that Proton Drive has, which is all bundled into Proton's subscription cost.

## Conclusion

Like I said at the top, Proton is a fantastic company, and they definitely make a service that is exactly what certain journalists and people who have very stringent privacy and security requirements need. I don't want to discount the viability of their products for those people and their use case. In fact, it could be argued that that is more what it's designed for, and I was using something that was a little bit overkill.

Fastmail, for me at least, finds a happier medium of privacy/security and usability. Their service is private in the sense that they do not sell my data or mine it for ads. As more and more large tech companies become enamored with the promise of AI, there will be more tendency to allow their service to analyze your data in order to create better use cases and results for their AI products. Fastmail is committed to not doing this. They probably wouldn't fight quite as hard against government requests for data, but I'm a little less worried about this particular issue currently.

I fully expect that Proton will continue making improvements to their service, and it's definitely possible that they resolve some of these frustrations in the future. But as things stand today, it was enough to make me move to something a little more versatile.
