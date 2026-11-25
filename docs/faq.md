---
title: FAQ
sidebar_position: 99
---

# FAQ

Answers to the questions we get asked most about subscriptions, the apps themselves, and where to go for help. If your question isn't here, the [HAMRS Discord](https://discord.gg/nngWMtXTqH) is the fastest place to ask it.

## Subscriptions

### What does the hamrs.app subscription include?

A hamrs.app subscription unlocks the features that need HAMRS servers to work:

- **HAMRS Sync** keeps your logbooks, QSOs, and operator profiles identical across every device. See [Setting Up Sync](/docs/sync/setting-up-sync).
- **QRZ Logbook upload** sends your QSOs to your QRZ.com logbook from inside HAMRS. QRZ also requires its own paid XML subscription for this. See [Uploading Logbooks to QRZ](/docs/integrations/qrz/uploading-logbooks).
- **Remote rig control**, when it ships. Controlling a rig on your local network through FLRIG does not need a subscription today. See [Rig Control](/docs/rig-control/getting-started).

### What works without a subscription?

Logging. Every HAMRS app logs contacts, manages logbooks and operator profiles, and exports your data without a subscription. Your logs are stored on the device you log them on, and you can keep using HAMRS this way for as long as you like.

### Does one subscription cover every platform?

Yes. One hamrs.app subscription covers HAMRS on desktop, mobile, and the web logger. You use the same account and the same Sync API Key on every device. There is nothing extra to buy per platform.

### Where do I manage or cancel my subscription?

Sign in to [hamrs.app](https://hamrs.app) and open **Manage your subscription**. Changes take effect across all of your devices.

:::info Subscribed through an app store?
If you bought your subscription inside the iOS or Android app rather than on hamrs.app, it may be billed by Apple or Google instead. In that case, you manage or cancel it in your App Store or Google Play subscription settings, and hamrs.app will reflect the change. If you're not sure which applies to you, check where the receipt came from, or ask on Discord.
:::

### What happens if my subscription lapses?

Sync pauses until you renew, and your data stays on each device in the meantime. Nothing is deleted. The [Sync troubleshooting section](/docs/sync/setting-up-sync#troubleshooting) explains the error you'll see and how to clear it.

## Apps and versions

### Where do I download HAMRS?

Every app is linked from [hamrs.app](https://hamrs.app). Download from there rather than from third-party sites so you always get the current build.

### How do I find which version I have installed?

Knowing your version is the first thing we'll ask for when you report a problem.

- **Desktop (Windows, macOS, Linux):** open **Config** from the top navigation bar. The version number is shown there. On macOS you can also pick **About HAMRS** from the HAMRS menu.
- **iOS and Android:** open **Config** from the top navigation bar. The version number is shown there. Your device's App Store or Google Play listing also shows the installed version.
- **Web logger:** the web logger is always the current version. You don't need to update it.

:::tip
If you can't find the version in the app, a screenshot of the Config screen is just as useful. Include it when you ask for help.
:::

### How do updates arrive?

- **Desktop (Windows, macOS, Linux):** HAMRS checks for updates when it starts and lets you know when a new version is available. If you'd rather not wait, download the latest build from [hamrs.app](https://hamrs.app) and install it over the top of your current version. Your logs are kept.
- **iOS and Android:** updates come through the App Store or Google Play like any other app. Turn on automatic updates on your device to stay current.
- **Web logger:** reload the page. There's nothing to install.

## Getting help

### Where do I get help quickly?

Join the [HAMRS Discord](https://discord.gg/nngWMtXTqH). It's the fastest way to reach the HAMRS team and other operators, and most questions are answered there within a few hours.

When you ask, include:

1. **Your platform**: Windows, macOS, Linux, iOS, Android, or the web logger.
2. **Your version number**: see [How do I find which version I have installed?](#how-do-i-find-which-version-i-have-installed)
3. **A screenshot of the error** or of the screen where things went wrong. A picture saves a lot of back and forth.

If you can, also say what you were doing when the problem happened and whether you can make it happen again.

### Can I email instead?

Yes. Email support is available from the contact details on [hamrs.app](https://hamrs.app) if you'd rather not use Discord. Replies take longer than Discord, so include the same three things: platform, version, and a screenshot.

## Data and privacy

### Where are my logs stored?

On your device. Every HAMRS app keeps your logbooks in local storage on the computer, phone, or tablet you log on. That's why HAMRS keeps working with no internet connection.

If you subscribe to Sync, a copy is also kept on HAMRS servers so your other devices can pull it down. Without Sync, your data never leaves the device unless you export it or upload it to QRZ yourself.

### What happens to my data if I stop subscribing?

It stays on your devices. Sync pauses, but your logbooks remain where they are and you can keep logging and exporting. See [Setting Up Sync](/docs/sync/setting-up-sync) for the details.

### How do I back up my logs?

Export your logbook as ADIF from inside HAMRS and keep the file somewhere safe. If you use Sync, every device you've set up is already a copy, and a fresh install can pull your data back down with your API Key.
