---
sidebar_position: 1
---

# Callsign Lookups

When you type a callsign into the logger, HAMRS can look it up and fill in the rest of the contact for you. A successful lookup fills in the operator's **name**, **QTH** (city), **state**, **country**, and **grid square**, so you only have to type the callsign and the signal reports.

Lookups come from one of two providers. You pick the provider in Config, and HAMRS uses it on every device where it's set.

:::info
Lookups need an internet connection. If you're logging in the field with no signal, HAMRS still logs the QSO normally, it just won't fill in the extra fields. See [Troubleshooting Lookups](./troubleshooting) for more.
:::

## The two providers

### HamDB

[HamDB](https://hamdb.org) is free and needs no account. It covers US callsigns from the FCC database along with some international callsigns. If most of your contacts are stateside, HamDB is all you need, and it's the quickest way to get lookups working.

### QRZ.com

[QRZ.com](https://www.qrz.com) has the largest callsign database and covers operators worldwide. To use it for lookups in HAMRS you need two things:

1. A **QRZ XML Logbook Data subscription**. This is the paid tier that lets third-party apps like HAMRS pull callsign data.
2. Your **QRZ.com username and password**. These are the same ones you use to sign in at qrz.com.

:::note
If you sign in to QRZ from HAMRS without an XML subscription, lookups still run but QRZ returns limited data. You'll usually get the callsign and name and not much else. QRZ decides what to send back, not HAMRS.
:::

## Choosing a provider in HAMRS

### 1. Open Config

Click **Config** in the top navigation bar.

### 2. Go to the Integrations tab

### 3. Find the Callsign Lookup section

Pick **HamDB** or **QRZ** from the provider options.

### 4. If you chose QRZ, enter your username and password

Type your QRZ.com username and password into the fields that appear and click **Submit**. HAMRS signs in to QRZ and keeps the session going in the background. You shouldn't need to enter them again unless you change your QRZ password.

:::tip
On the web logger, refresh the browser after you save a provider so the lookup client picks up the new setting. If you skip this step you may see a `Client Not Initialized` error on your first lookup.
:::

### 5. Try it

Open a logbook and type a callsign you know into the callsign field. After a moment the name, location, and grid fields should fill in on their own.

## Which credential is which

Three different keys and logins show up in the Integrations tab, and support email tells us they get mixed up often. Here's what each one does.

| Credential | Where you get it | What it's for |
| --- | --- | --- |
| **QRZ username and password** | Your qrz.com account (XML subscription needed for full data) | Callsign lookups on this page |
| **QRZ Logbook API key** | QRZ.com > My Logbook > Settings | [Uploading QSOs to your QRZ Logbook](/docs/integrations/qrz/configuring-api-key) |
| **hamrs.app API key** | Your hamrs.app Dashboard | [HAMRS Sync](/docs/sync/setting-up-sync) across your devices |

The QRZ username and password and the QRZ Logbook API key both come from QRZ, but they do different jobs. Entering your Logbook API key will not turn on lookups, and signing in with your username and password will not upload QSOs. If you want both, set up both.
