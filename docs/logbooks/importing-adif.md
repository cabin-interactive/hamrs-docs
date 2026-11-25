---
sidebar_position: 2
---

# Importing an ADIF File

HAMRS can read an ADIF file from another logger, from a previous HAMRS install, or from a site that lets you download your contacts. Imported QSOs land in the logbook you have open, alongside any contacts already in it.

:::info
Imports add QSOs to the **currently open logbook**. If you want the imported contacts kept separate, create a new logbook first and open it before you import.
:::

## Importing a file

### 1. Get the .adi file onto the device

HAMRS reads the file from local storage, so the .adi file needs to be somewhere the device can see it:

- **iOS and iPadOS**: save it to the Files app, either in iCloud Drive or On My iPhone.
- **Android**: save it to Downloads or any folder the Files app can browse.
- **macOS and Windows**: any folder on the computer.
- **Web logger**: any folder your browser can open from a file picker.

### 2. Open the logbook that should receive the QSOs

From the logbook list, tap or click the logbook. If you want a fresh logbook for the import, create one now and open it.

### 3. Open the logbook settings

Click the **gear** icon for the logbook.

### 4. Choose Import .ADI

Click **Import .ADI** and pick the .adi file in the file picker that opens.

### 5. Wait for the import to finish

HAMRS reads the file and adds the QSOs to the logbook. Small files finish right away. A file with thousands of contacts can take a few seconds, so leave the logbook open until the QSO count stops changing.

## What HAMRS reads from the file

HAMRS looks for the standard ADIF fields and maps them to the matching QSO fields in the logbook:

- `CALL`, `QSO_DATE`, `TIME_ON` (and `TIME_OFF` when present)
- `BAND`, `FREQ`, `MODE`, and `SUBMODE`
- `RST_SENT` and `RST_RCVD`
- `NAME`, `QTH`, `STATE`, `COUNTRY`, `GRIDSQUARE`, and `COMMENT`
- `MY_SIG`, `MY_SIG_INFO`, `SIG`, and `SIG_INFO` for POTA and SOTA contacts
- `STATION_CALLSIGN`, `OPERATOR`, and `MY_GRIDSQUARE`

Fields HAMRS does not have a place for are skipped. They are not kept and will not appear in a later export from HAMRS.

:::note
Only `CALL`, `QSO_DATE`, and `TIME_ON` are required for a record to import. A record missing one of those is skipped.
:::

## Duplicates

HAMRS treats a record as a duplicate of an existing QSO when the callsign, date, time, band, and mode all match a contact already in the open logbook. Duplicates are skipped so that importing the same file twice does not double your QSO count.

If you need two contacts that look identical to both appear, for example two QSOs with the same station in the same minute on the same band, edit one of them after the import.

:::tip
Importing into an empty logbook is the safest way to check a file. You can see exactly what came in, and if something is off you can delete the logbook and try again.
:::

## Which operator profile the QSOs get

Imported QSOs are tagged with the operator profile that is active when you import. If the .adi file carries a `STATION_CALLSIGN` that does not match your profile, the contacts still import, but they will show your active profile's callsign in HAMRS. Switch to the matching profile before importing if you keep more than one.
