---
sidebar_position: 4
---

# Troubleshooting Exports and Imports

Most export and import problems come down to one of three things: the wrong logbook, a QSO missing a required field, or a file the device cannot read. Work through the section that matches what you are seeing.

## Exports

**The exported file seems to be missing QSOs**

- **Check the logbook filter.** If the logbook view is filtered or searched, the QSOs on screen are a subset. Clear the filter and compare the full QSO count to the number of records in the file.
- **Check that each QSO has a callsign and a time.** A contact saved without a callsign or without a date and time cannot be written as a valid ADIF record and is left out. Scroll the logbook for entries with a blank callsign and fill them in or delete them, then export again.
- **Confirm you exported the right logbook.** Export is per logbook. If you have several logbooks with similar names, open the one you meant and check the QSO count before exporting.
- **Count the records.** Open the .adi file in a text editor and search for `<EOR>` or `<eor>`. Each one closes a record, so the number of matches is the number of QSOs in the file.

**A third-party logger or awards site rejects the file**

- **Open the file in a text editor.** A .adi file is plain text. Use TextEdit, Notepad, or any code editor. Each QSO is a run of `<FIELD:length>value` entries ending in `<EOR>`.
- **Look for blank required fields.** Most sites need `CALL`, `QSO_DATE`, `TIME_ON`, `BAND`, and `MODE` on every record. Find the record the site complained about and check that each of these is present and has a value.
- **Check for a QSO with no band or mode.** A contact logged before you set the band or mode on the logbook can be saved without them. Fix the QSO in HAMRS and export again rather than editing the file by hand.
- **Check the POTA and SOTA fields.** If POTA or SOTA says the activation is missing or under the wrong park, check `MY_SIG` and `MY_SIG_INFO` in the file. They should read `POTA` or `SOTA` and your reference. If `MY_SIG_INFO` is blank, the logbook was created without a reference. Edit the logbook settings to add it and export again.
- **Check the frequency is in megahertz.** ADIF expects `FREQ` in MHz, such as `14.285`. If another program wrote the file, it may have used kHz or Hz.

**The export button does nothing or the file never appears**

- On iOS, the share sheet may be behind another window. Dismiss any open dialogs and try again.
- On Android, check the Downloads folder in the Files app and the notification shade. The file is saved silently.
- On macOS and Windows, look for the save dialog behind the HAMRS window.
- In the web logger, check your browser's download list. Some browsers block downloads from a site until you allow them.

## Imports

**Import appears to do nothing**

- **Check the file extension.** HAMRS looks for `.adi` (and `.adif`) files. A file saved as `.txt` or `.adi.txt` may not show in the file picker or may be ignored. Rename it so it ends in `.adi`.
- **Check the file size.** A zero-byte file means the export or download did not finish. Export it again from the source.
- **Check that the file is really ADIF.** Open it in a text editor. You should see `<EOH>` near the top and `<EOR>` after each record. If it is a CSV, a Cabrillo log, or a spreadsheet, convert it to ADIF with the program that wrote it first.
- **Give it a moment.** Large files take a few seconds. Leave the logbook open and watch the QSO count.
- **Web logger storage.** The web logger stores your data in the browser. If the browser is in private or incognito mode, or site data is blocked for hamrs.app, the import cannot be saved. Use a normal window and make sure the browser is allowed to store data for the site.

**The import finished but the QSO count is lower than expected**

- **Duplicates were skipped.** Records that match an existing QSO on callsign, date, time, band, and mode are not imported a second time. This is expected when re-importing a file.
- **Records were missing required fields.** A record without `CALL`, `QSO_DATE`, or `TIME_ON` is skipped. Open the file in a text editor and look for records with those fields missing.
- **The wrong logbook was open.** Imports go into the open logbook. Check your other logbooks before importing again.

**The imported QSOs show the wrong callsign or profile**

Imported QSOs are tagged with the operator profile that was active during the import. Switch to the right profile and import into a fresh logbook, then delete the one with the wrong profile.

**The imported QSOs show the wrong time**

ADIF times are UTC. If the times look shifted by your local offset, the program that wrote the file saved local time instead. Fix the file at the source if you can, or edit the QSOs in HAMRS afterwards.

## Still stuck?

Ask in the [HAMRS Discord](https://discord.gg/nngWMtXTqH). Describe the platform, the HAMRS version shown under **Config**, and attach the .adi file if you are comfortable sharing it. The first few lines of the file and the record that fails are usually enough to spot the problem.
