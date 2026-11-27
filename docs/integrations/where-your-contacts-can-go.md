---
sidebar_position: 0
title: Where Your Contacts Can Go
---

# Where Your Contacts Can Go

Contacts leave HAMRS in one of two ways:

- **Direct upload.** HAMRS sends QSOs to your QRZ Logbook itself.
- **ADIF file.** [Export the logbook as ADIF](/docs/logbooks/adif-export-import#exporting-a-logbook) and give the `.adi` file to the destination. Exporting doesn't change anything in HAMRS.

| Destination | How |
| --- | --- |
| **QRZ Logbook** | Direct upload. Needs a paid QRZ.com XML subscription. See [Uploading Logbooks to QRZ](/docs/integrations/qrz/uploading-logbooks). |
| **Logbook of The World** | ADIF file, signed and uploaded with TQSL. See [below](#logbook-of-the-world). |
| **POTA** | ADIF file, uploaded from the **My Log Uploads** page of [pota.app](https://pota.app). See [POTA's instructions](https://docs.pota.app/docs/activator_reference/submitting_logs.html). |
| **N3FJP Amateur Contact Log** | ADIF file. See [below](#desktop-loggers). |
| **Log4OM** | ADIF file. See [below](#desktop-loggers). |

## Logbook of The World

HAMRS does not upload to LoTW. [Export the logbook as ADIF](/docs/logbooks/adif-export-import#exporting-a-logbook), then sign and upload the file with ARRL's TQSL program:

1. In TQSL, open the **Log Operations** tab and choose **Sign a log and upload it automatically to LoTW**.
2. Pick the `.adi` file.
3. Select the **Station Location** for where you operated.

A Station Location includes a grid square, so a portable activation needs a Station Location with the grid you operated from, not your home one.

ARRL's own pages cover the rest:

- [Getting started with LoTW](https://lotw.arrl.org/lotw-help/getting-started/)
- [Installing TQSL](https://lotw.arrl.org/lotw-help/installation/)
- [Signing and uploading a log](https://lotw.arrl.org/lotw-help/sgnupload/)
- [Station Locations](https://lotw.arrl.org/lotw-help/stnloc/)

## Desktop loggers

[N3FJP's Amateur Contact Log](https://www.n3fjp.com/aclog.html) and [Log4OM](https://www.log4om.com) both import ADIF files. Export the logbook from HAMRS, then use the ADIF import in that program. Their own documentation covers where the import lives and its options.
