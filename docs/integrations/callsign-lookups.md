---
sidebar_position: 1
---

# Callsign Lookups

When you enter a callsign in the logger, HAMRS can look it up and fill in the station's name, QTH, state, county, country, and grid square.

## Lookup services

| Service | What it needs |
| --- | --- |
| **HamDB.org** | Nothing. No account required. |
| **QRZ.com** | Your QRZ.com username and password. QRZ does not provide grid squares to free accounts. |
| **HamQTH.com** | Your HamQTH username and password. |
| **Internal (Offline)** | Nothing. Uses the operator database stored on the device, so it makes no network requests. |

HamDB, QRZ, and HamQTH need an internet connection. **Config > Offline data** shows how many operators the on-device database holds.

## Choosing a service

Open the quick settings panel (the sliders icon in the top navigation bar) and pick a service from **Lookup Service**. The **Lookup Callsigns** toggle above it turns lookups on and off.

The choice is saved to your active operator profile. You can also set it as **Default Lookup Service** when you edit the profile under **Profiles > Manage Profiles**.

## Entering QRZ or HamQTH credentials

Edit your operator profile and enter your username and password under **QRZ Lookups** or **HamQTH Lookups**. HAMRS tests the login as you type and shows the result next to the heading.

## Which credential is which

| Credential | Where it goes in HAMRS | What it's for |
| --- | --- | --- |
| **QRZ.com username and password** | Operator profile, under **QRZ Lookups** | Callsign lookups |
| **QRZ Logbook API key** | **Config > Integrations** | [Uploading QSOs to your QRZ Logbook](/docs/integrations/qrz/configuring-api-key) |
| **hamrs.app API Key** | **Config > Integrations**, under **HAMRS Sync** | [HAMRS Sync](/docs/sync/setting-up-sync) |

The two QRZ credentials are not interchangeable. The API key does not turn on lookups, and the username and password do not upload QSOs.

## Troubleshooting

**`Client not initialized`**

No lookup service is loaded. Pick one from **Lookup Service** in the quick settings panel, then reload the web logger.

**Nothing is filled in**

- Check that **Lookup Callsigns** is on in the quick settings panel.
- HamDB, QRZ, and HamQTH lookups don't run while the device is offline. Switch to **Internal (Offline)** when you have no connection.

**QRZ fills in a name but no grid**

QRZ does not provide grid squares to free accounts, and HAMRS shows a warning on the profile when that applies. Use HamDB if you want grids for the QSO Map.

**Filling in QSOs after the fact**

Open the logbook and choose **Actions > Lookup QSOs**. Leave **Skip previously looked up QSOs** ticked to look up only the contacts that are still missing details.
