---
sidebar_position: 1
---

# Exporting a Logbook as ADIF

Every HAMRS logbook can be exported as an ADIF file. ADIF (Amateur Data Interchange Format) is the plain-text format that nearly every logging program and awards site understands, so a .adi file from HAMRS can be uploaded to POTA, SOTA, LoTW, QRZ, or eQSL, or opened in another logger.

Each export covers one logbook. If you keep separate logbooks for different activations or operators, export each one on its own.

:::info
The export is a copy. Your QSOs stay in HAMRS exactly as they were.
:::

## Exporting a logbook

### 1. Open the logbook

From the logbook list, tap or click the logbook you want to export so its QSOs are on screen.

### 2. Open the logbook settings

Click the **gear** icon for the logbook. This opens the logbook settings, where you can rename the logbook, change its details, and export it.

### 3. Choose Export .ADI

Click **Export .ADI**. HAMRS writes every QSO in the logbook to a single .adi file named after the logbook.

### 4. Save or share the file

What happens next depends on the platform you are on:

| Platform | Where the file goes |
| --- | --- |
| **iOS and iPadOS** | The share sheet opens. Choose **Save to Files** to put the .adi file in iCloud Drive or On My iPhone, or pick an app such as Mail, Messages, or AirDrop to send it somewhere directly. |
| **Android** | The file is saved to your **Downloads** folder. Open the Files app to find it, or share it from the notification that appears. |
| **macOS and Windows** | A save dialog opens. Pick a folder and click **Save**. |
| **Web logger** | Your browser downloads the file the same way it downloads any other file, usually into your **Downloads** folder. |

:::tip
If you plan to upload the file to a site like POTA or LoTW, save it somewhere you can find again from a web browser, such as your desktop or a cloud drive folder.
:::

## What the file contains

The .adi file holds one record per QSO. Each record carries the standard ADIF fields HAMRS tracks for a contact:

- `CALL`, `QSO_DATE`, `TIME_ON`
- `BAND`, `FREQ`, `MODE`
- `RST_SENT`, `RST_RCVD`
- `STATION_CALLSIGN` and `OPERATOR` from the operator profile that logged the contact
- `MY_GRIDSQUARE` and `GRIDSQUARE` when a grid is known
- `NAME`, `QTH`, `STATE`, `COUNTRY`, and `COMMENT` when you filled them in

Fields you left blank in HAMRS are left out of the record rather than written as empty values.

### POTA and SOTA fields

When a logbook uses the POTA or SOTA template, HAMRS writes the special-interest-group fields that those programs expect:

| Field | What HAMRS writes |
| --- | --- |
| `MY_SIG` | `POTA` or `SOTA`, identifying the program you were activating. |
| `MY_SIG_INFO` | Your park reference (for example `US-1234`) or your summit reference (for example `W7W/KG-123`). |
| `SIG` | `POTA` or `SOTA` when the other station was also in a park or on a summit. |
| `SIG_INFO` | The other station's park or summit reference, for park-to-park and summit-to-summit contacts. |

These are the fields the POTA and SOTA upload tools read. If a third-party site rejects your file or logs an activation under the wrong reference, open the .adi file in a text editor and check these four fields first. See [Troubleshooting Exports and Imports](./troubleshooting.md) for more.

:::note
An ADIF file carries QSOs only. Operator profiles, logbook templates, and app settings are not part of the file. To move everything at once, see [Moving to a New Device](./moving-to-a-new-device.md).
:::
