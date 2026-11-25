---
sidebar_position: 1
---

# Uploading to LoTW

Logbook of The World (LoTW) is ARRL's confirmation system for awards like DXCC and WAS. HAMRS does not upload to LoTW directly. Instead, you export an ADIF file, sign it with ARRL's **TQSL** program on your computer, and upload the signed file.

Signing is what makes LoTW different from other destinations. TQSL stamps every QSO with a **station location**: your callsign, grid square, state, county, and so on. LoTW uses that location, not anything in your ADIF file, to decide where you were when you made the contact.

:::info
You need a LoTW account and a callsign certificate before you can sign anything. If you are new to LoTW, start with ARRL's [Getting Started with LoTW](https://lotw.arrl.org/lotw-help/getting-started/) guide and come back here once TQSL is installed and your certificate is loaded.
:::

## Uploading a logbook

### 1. Export the logbook from HAMRS

Follow [Exporting a Logbook as ADIF](/docs/logbooks/exporting-adif) and save the .adi file somewhere you can reach from the computer that has TQSL installed.

### 2. Make sure you have a station location for where you operated

In TQSL, open **Station Location** > **Add Station Location** (or **Edit Station Location** to check an existing one). A station location holds the callsign, grid square, and any state, county, or other details for one place you operate from.

For a portable activation, create a station location for that spot with the grid square where the activation happened. Give it a name you will recognize, such as the park or summit reference.

:::tip
It is normal to end up with a long list of station locations if you activate often. LoTW credits your contacts to the grid and location on the station location you sign with, so a home location used for a park activation will report the wrong grid to everyone you worked.
:::

### 3. Sign and upload the file

In TQSL, choose **Log Operations** > **Sign a log and upload it automatically to LoTW**. Pick the .adi file you exported, then choose the station location that matches where the activation happened. TQSL signs the file and sends it to LoTW in one step.

If you would rather upload by hand, choose **Log Operations** > **Sign a log and save it for uploading later** instead. TQSL writes a .tq8 file, which you then upload at [lotw.arrl.org](https://lotw.arrl.org) under **Upload File**.

### 4. Check the result

Sign in at [lotw.arrl.org](https://lotw.arrl.org) and open **Your Account** > **Your Activity**. Your upload appears there within a few minutes, with the number of QSOs accepted. QSLs show up as the other stations upload their side.

## What LoTW reads from the file

LoTW uses the callsign, date, time, band, mode, and (when present) frequency and satellite fields from each QSO. The `STATION_CALLSIGN` in the file must match the callsign on the certificate you sign with.

:::note
LoTW ignores POTA and SOTA fields. The `MY_SIG`, `MY_SIG_INFO`, `SIG`, and `SIG_INFO` values HAMRS writes for park and summit activations are passed over without error. Your park contacts still count for LoTW awards as regular QSOs from the station location you signed with.
:::

## Duplicate QSOs

LoTW quietly accepts a QSO it has already seen, so uploading the same logbook twice does no harm. If you edit a contact in HAMRS after uploading, export and sign the logbook again. The corrected QSO replaces the old one as long as the callsign, date, time, band, and mode still match.

## Learn more

- [TQSL downloads](https://lotw.arrl.org/lotw-help/installation/) for Windows, macOS, and Linux.
- [LoTW help](https://lotw.arrl.org/lotw-help/) covers certificates, station locations, and error messages in detail.
