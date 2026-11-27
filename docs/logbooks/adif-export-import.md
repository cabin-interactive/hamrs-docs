---
sidebar_position: 1
---

# Exporting and Importing ADIF

HAMRS reads and writes ADIF files, the plain-text format that logging programs and awards sites exchange.

## Exporting a logbook

On the **Logbooks** page, open the logbook's menu and choose **Export ADIF**. Inside a logbook, the same option is under **Actions**.

HAMRS writes every QSO in the logbook to one `.adi` file named after the logbook.

| Platform | Where the file goes |
| --- | --- |
| **iOS** | The share sheet opens so you can save or send the file. |
| **Android** | The file is saved to `Documents/HAMRS`. HAMRS asks before replacing a file with the same name. |
| **Desktop and web logger** | The file is downloaded. |

If HAMRS can't convert some QSOs, it exports the rest and tells you how many were skipped.

**Export Cabrillo** in the same menus writes a `.cbr` file instead.

### POTA and SOTA fields

On a POTA logbook, My Park is written to `MY_SIG_INFO` and `MY_POTA_REF`, with `MY_SIG` set to `POTA`. Their Park is written to `SIG_INFO` and `POTA_REF`, with `SIG` set to `POTA`.

On a SOTA logbook, My Summit and Their Summit are written to `MY_SOTA_REF` and `SOTA_REF`.

## Importing a file

HAMRS accepts `.adi` and `.adif` files.

- **Into a new logbook:** on the **Logbooks** page, click **Import Logbook**. Choose the file, then give the logbook a title, a date, and a template.
- **Into an existing logbook:** open the logbook and choose **Actions > Import From ADIF**.

After you choose a file, the dialog shows:

- **Valid QSOs** and **Invalid QSOs**. A record is invalid when it has no callsign or no date.
- **Duplicate QSOs that will be skipped**, when importing into an existing logbook. A record is a duplicate only when every field matches a QSO already in the logbook.

When the logbook uses the POTA template, `MY_SIG_INFO` is read as My Park and `SIG_INFO` as Their Park.
