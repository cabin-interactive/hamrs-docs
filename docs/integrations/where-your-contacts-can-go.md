---
sidebar_position: 0
title: Where Your Contacts Can Go
---

# Where Your Contacts Can Go

HAMRS is built for logging in the field. Once the activation is over, you will usually want those contacts somewhere else too: an awards program, a QSL service, or the desktop logger that holds your main station log.

There are two ways contacts leave HAMRS:

- **Direct upload.** HAMRS sends the QSOs itself from inside the app. Today this works for the QRZ Logbook.
- **File based.** You [export the logbook as an ADIF file](/docs/logbooks/exporting-adif) and hand that file to the destination. This works with every site and program that reads ADIF, which is nearly all of them.

:::info
The export is a copy. Uploading a file somewhere else does not change or remove anything in HAMRS.
:::

## Destinations

| Destination | Method | How to get your contacts there |
| --- | --- | --- |
| **QRZ Logbook** | Direct upload | Needs a paid QRZ.com XML subscription. See [Uploading Logbooks to QRZ](/docs/integrations/qrz/uploading-logbooks). |
| **Logbook of The World (LoTW)** | ADIF file, signed with TQSL | See [Uploading to LoTW](/docs/integrations/lotw/uploading-to-lotw). |
| **N3FJP Amateur Contact Log** | ADIF file | See [Importing into Desktop Loggers](/docs/integrations/desktop-loggers/importing-into-desktop-loggers). |
| **Log4OM** | ADIF file | See [Importing into Desktop Loggers](/docs/integrations/desktop-loggers/importing-into-desktop-loggers). |
| **eQSL** | ADIF file | Upload the file at [eQSL.cc](https://www.eqsl.cc) under **Upload ADIF**. |
| **Club Log** | ADIF file | Upload the file at [Club Log](https://clublog.org) under **Upload Log**. |
| **POTA** | ADIF file | Submit the file at [pota.app](https://pota.app). HAMRS writes the `MY_SIG_INFO` park reference POTA needs when the logbook uses the POTA template. |
| **SOTA** | ADIF file | Upload the file at [SOTAdata](https://www.sotadata.org.uk). HAMRS writes the summit reference in `MY_SIG_INFO` when the logbook uses the SOTA template. |

:::tip
You can send the same ADIF file to as many destinations as you like. Export once, then upload to POTA, LoTW, and QRZ from the same file.
:::

## Which fields travel with the file

Every destination reads the core fields: callsign, date, time, band, mode, and your station callsign. Beyond that, each one picks the fields it cares about and ignores the rest:

- **POTA and SOTA** read the `MY_SIG`, `MY_SIG_INFO`, `SIG`, and `SIG_INFO` fields.
- **LoTW** ignores park and summit fields entirely. Your location comes from the TQSL station location you sign with, not from the file.
- **Desktop loggers** keep nearly everything, including names, grids, and comments.

See [Exporting a Logbook as ADIF](/docs/logbooks/exporting-adif#what-the-file-contains) for the full list of fields HAMRS writes.
