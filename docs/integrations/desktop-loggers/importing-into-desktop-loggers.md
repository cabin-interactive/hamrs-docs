---
sidebar_position: 1
---

# Importing into Desktop Loggers

Many operators keep a main station log in a desktop program and use HAMRS only in the field. Getting a HAMRS logbook into that program is a two-step job: export the logbook as ADIF, then use the program's own ADIF import.

The first step is the same for every logger. Follow [Exporting a Logbook as ADIF](/docs/logbooks/exporting-adif) and save the .adi file somewhere you can reach from the computer running your logger. The rest of this page covers where the import lives in each program and what it reads from the file.

:::tip
Import each HAMRS logbook once. Most loggers warn about duplicates, but it is easier to keep the logbooks you have already imported in a folder of their own so you know what has been brought across.
:::

## N3FJP Amateur Contact Log

In Amateur Contact Log (ACL), choose **File** > **Import ADIF** and pick the .adi file from HAMRS. ACL reads the file and adds the records to the current log.

ACL reads these HAMRS fields:

- Callsign, date, time, band, frequency, and mode
- Signal reports sent and received
- Name, QTH, state, and country
- Grid square for the other station
- Comment

ACL also reads the `MY_SIG_INFO` park reference, which shows up in its POTA field when the logbook used the POTA template.

Other N3FJP programs such as the contest loggers have a similar **File** > **Import ADIF** option. N3FJP's own [support pages](https://www.n3fjp.com) cover each program's import settings and how it handles duplicates.

## Log4OM

In Log4OM, choose **File** > **Import ADIF**. Pick the .adi file from HAMRS, review the import options, and run the import. Log4OM shows a summary with the number of QSOs added and any records it skipped.

Log4OM reads these HAMRS fields:

- Callsign, date, time, band, frequency, and mode
- Signal reports sent and received
- Name, QTH, state, and country
- Grid squares for both stations
- `MY_SIG`, `MY_SIG_INFO`, `SIG`, and `SIG_INFO` for park and summit activations
- Comment

Log4OM has its own [user guide](https://www.log4om.com) with the import options, duplicate handling, and how to tag imported QSOs for later upload to LoTW, eQSL, and QRZ from inside Log4OM.

## Other loggers

Nearly every logging program has an ADIF import, usually under its **File** menu. HAMRS writes a standard ADIF file, so the same .adi file works wherever you take it. If a logger rejects the file or imports contacts with missing details, see [Troubleshooting Exports and Imports](/docs/logbooks/troubleshooting).
