---
title: Securing Mobile Devices in a Complicated Domestic Situation
date: 2024-08-17 18:50:00
tags: [security, privacy, mobile device security, Apple devices]
category: General
redirect_from: /posts/device-security-domestic-situation/
---

I recently was approached by a friend who was trying to help someone in a complicated domestic situation, and my friend asked what advice I could give regarding securing their device and communications. While I am by no means an expert at the level to make any kind of guarantees around my recommendations, I did provide a short list of things that can help in a situation like this, and I wanted to turn those into a post so that others can benefit.
<!-- more -->

While none of the recommendations in this article will prevent or mitigate a domestic violence situation, part of the reason I was asked (and why I'm writing it up) is because it can help facilitate private conversations with a trusted 3rd party as the person in the situation seeks help.

> Nothing in this article should be taken as legal advice. If you are in the midst of a domestic abuse situation or something similar, please seek help from qualified professionals who deal with these types of situations regularly.
{: .prompt-warning }

Most of the recommendations I make are good device hygiene for any user, but some of them are more specific to insulating your device usage from a domestic partner.

It should also be stated that my recommendations come from the perspective of an Apple user, so that might skew the list slightly. Most of the suggestions have a similar setting on Android, I just don't have access to an Android device to explain how to do it.

## Recommendations

Without further ado, let's talk about what you can do to protect your devices.

### Set up a device passcode

This is one of those items that is good practice for anyone who owns a device. In today's world, we perform so much business on our phones and tablets, and leaving those devices unlocked is just asking for someone to access the device and steal the information.

So if nothing else on this list is done, make sure you have a passcode on the device. And if there's a chance your partner knows your current passcode, change it!

When choosing a passcode, don't use anything predictable. So no birthdays, no anniversaries, etc. My suggestion would be to make up a word and then use the number that corresponds with each letter, like on a T9 keyboard. For example, you could use the word _hungry_, and that would become 486479.

**Instructions:**

1. Open the **Settings** app
1. Tap on **Face ID & Passcode** (it might say **Touch ID & Passcode** for older devices)
1. Tap the **Turn Passcode On** button

### Use Biometrics instead of a passcode

Taking this a step further, I would highly encourage the use of biometric methods (Face ID or Touch ID) instead of relying on the passcode. You still need to have a passcode, and in fact you can't turn on biometrics without first setting up a passcode.

Again, this is something that I'd recommend for anyone, but I think it's particularly useful in a domestic situation. Without biometrics, your device is only as secure as the secrecy of your passcode. If you can avoid typing that in too many times in front of your partner, there's much less chance that they figure out what your password is and gain access to your device.

This setting is a toggle located in the same place in the iPhone/iPad settings as the passcode settings above.

An additional setting I would recommend in relation to Face ID specifically is to enable the setting to **Require Attention for Face ID**. This setting requires that your eyes be open and looking at the device in order to authenticate you. This could help prevent your partner from holding your phone up to your face and gaining access without your will. All you'd have to do is keep your eyes shut.

### Make sure you're using a unique Apple ID

In 2024, most people are probably already using their own accounts, but in this context it bears emphasis. If you are using the same Apple ID as your partner, they have the ability to force a reset/recovery of the device passcode. At that point, just about all the other changes I'm recommending are rendered useless. Additionally, if you're using iMessage, all your text messages are easily accessible by anyone using the same Apple ID.

So the bottom line is that it will be impossible to ensure the security and privacy of your devices if you are sharing an Apple ID. If you're currently sharing an Apple ID, then you should _immediately_ set up a new account and move all your communications over to it. Unfortunately there's not a way to transfer existing information to a new Apple ID.

The same would likely apply to an Android device, as there is a Google account that is involved at some level. I'm not 100% sure what capabilities that account has, but I would guess it can be used to recover access to a device.

### Make sure your Apple ID password is not known

If you didn't just set up a new Apple ID because you were previously sharing, I would recommend thinking through whether it's possible that your partner knows the current password of your Apple ID. If they do, then they might be able to get into your Apple ID account access certain information using the web portal. And they could potentially lock you out of your account by changing your password.

**Instructions to change:**

1. Open the **Settings** app
1. Tap on your name at the top
1. Tap on **Sign-In and Security**
1. Tap the **Change Password** option

### Use an encrypted messaging app

Steer clear of SMS messaging, as that communication is unencrypted. Furthermore, I know that at one point, the account owners of cell plans could get access to certain amounts of information about SMS messages sent/received on the account. Different carriers likely had different capabilities, and this honestly might not even be possible any more due to changes in privacy laws, but it's not worth risking it.

iMessage is encrypted, though there are some caveats that I'll touch on in a later section. Other recommended apps are [Signal](https://signal.org) and [WhatsApp](https://www.whatsapp.com). These apps encrypt everything and send it across data signals as opposed to SMS, so it's much more secure and private. Even if your partner is very technically savvy and is doing something like packet inspection on the internet traffic, they wouldn't be able to read messages. They might know that Signal or WhatsApp is in use, but they'll have no idea who the contacts are or what is said.

If you do use iMessage, I would recommend disabling the fallback to SMS. When this option is on (which I believe is the default), the device will send a text over SMS if it can't reach the internet at the time.

**Instructions to disable SMS Fallback:**

1. Open the **Settings** app
1. Tap **Messages**
1. Toggle the **Send as SMS** setting

### Add biometrics to your messaging apps

As an extra security precaution, both Signal and WhatsApp will allow you to add a biometric requirement in order to actually view the contents of the app. This can help specifically protect your messages in the event that your partner gets ahold of your unlocked phone. The Apple Messages app (for iMessage) doesn't currently have this capability, but there are going to be some enhancements coming with iOS/iPadOS 18 this fall.

**Instructions for Signal:**  

1. Open the **Signal** app
1. Tap your avatar at the top left corner and select **Settings**
1. Tap **Privacy**
1. In the _App Security_ section, enable both the **Hide Screen in App Switcher** and **Screen Lock** settings
1. Specify a value for the **Screen Lock Timeout**

**Instructions for WhatsApp:**

1. Open the **WhatsApp** app
1. Tap the **Settings** icon in the bottom right corner
1. Tap **Privacy**
1. Tap **App Lock**
1. Toggle **Require Face ID** on (might say Touch ID on older devices)
1. Specify how soon the app should lock

### Enable disappearing messages

This is an optional step you can take in addition to adding biometrics. If you have doubts that these device security measures will prevent your partner from gaining access to your device, you can take the added precaution of having all your messages be purged after a period of time.

Like the biometric option, this is not available for iCloud. You can manually delete messages, but there's nothing automated.

Below are instructions for both Signal and WhatsApp. As of this writing, Signal has a lot more flexibility in how long to keep messages.

**Per-Chat Instructions for both Signal and WhatsApp:**

1. Open the app
1. Open a chat
1. Tap on the contact's name at the top
1. Tap **Disappearing Messages** and pick a time limit

**Default Instructions for Signal:**  
> This doesn't apply to existing chats, but will take effect for all new chats

1. Open **Signal**
1. Tap your avatar at the top left corner and select **Settings**
1. Tap **Privacy**
1. Tap **Disappearing Messages** and pick a time limit

**Default Instructions for WhatsApp:**

1. Open **WhatsApp**
1. Tap the **Settings** icon in the bottom right corner
1. Tap **Privacy**
1. Tap **Default message timer** and pick a time limit

### Enable Advanced Data Protection for iCloud

By default, Apple only encrypts certain kinds of information in your iCloud storage. One of the things not encrypted by default are the iPhone backups. And one of the things included in iPhone backups is the encryption key for iMessage. This means that there is a way for your partner to take a backup of your phone and extract the key necessary to decrypt your iMessages. Now this is admittedly not a straightforward process. They would need physical access to your unlocked device (which means they've already gotten past the other defenses you've set up above), or they would need access to your Apple ID and password. And then they'd also need a certain amount of technical know-how to extract and utilize the encryption key.

In most cases, I kind of doubt a partner would go through that much trouble, but there are exceptions to every rule. When Advanced Data Protection is enabled, Apple changes the way the encryption keys are stored, and then the iCloud backups are encrypted as well, greatly reducing the possibility of this kind of compromise.

I am always a fan of encrypting data, so I recommend that everyone turn this feature on. In addition to what I've mentioned above, it also encrypts all your iCloud Drive data, so all your documents are better protected as well.

Here are a couple of links related to this feature:

- [Advanced Data Protection for iCloud - Apple Support](https://support.apple.com/guide/security/advanced-data-protection-for-icloud-sec973254c5f/web) - provides some technical info on how this feature works
- [iCloud Data Security Overview - Apple Support](https://support.apple.com/en-us/102651) - among other things, shows the differences in what is encrypted by default and with this feature enabled

**Instructions:**  
I can't provide exact instructions on this one, as it depends on if you already have Two-factor authentication (2FA) enabled, have a recovery method set up, and possibly a couple of other things. But here's how you start:

1. Open the **Settings** app
1. Tap on your name at the top
1. Tap on **iCloud**
1. Near the bottom, tap on **Advanced Data Protection**

There should be a guide that helps you set this up.

### Check what permissions have been granted

Apple has recently added the ability to perform a review of what permissions you've granted to people, related to your iCloud data. This tool can help you identify who has access to your location data, your activity data, photos, and shared notes. It also gives you an easy way to revoke that access if needed.

**Instructions:**

1. Open the **Settings** app
1. Tap on **Privacy & Security**
1. Near the bottom, select **Safety Check**

In here you can view different things and make changes as necessary. Apple has smartly designed this feature with domestic abuse-type situations in mind. There is no save button, because everything saves as you go. And in the event that you get interrupted, the _Quick Exit_ button at the top right completely closes the Settings app and dumps you back on your home screen.

## Closing Thoughts

These are just a few things that can help you lock down access to your mobile devices. And that's all this is doing. I haven't even mentioned anything about online account security and hygiene. Once your device is secure, you should start looking at this, ensuring that you're using unique and complex passwords for each account. Utilize a password manager (even if it's the one built into your iPhone) to keep track of all these passwords so that you aren't writing them down anywhere. Be safe!
