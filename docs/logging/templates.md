---
sidebar_position: 1
---

# Templates

Every HAMRS logbook is built on a template. The template decides which extra fields show up on the log form, where your own location comes from, and which extra fields HAMRS writes to the ADIF file when you export.

You choose the template when you create the logbook.

:::note
The template is fixed once the logbook exists. If you picked the wrong one, create a new logbook with the right template and import your QSOs into it from an ADIF export of the old one. Everything else about a logbook, such as its name, your park or summit reference, and your operator profile, can be changed at any time from the logbook's settings.
:::

## The templates

| Template | Use it for | Extra fields on the log form | What it adds to ADIF |
| --- | --- | --- | --- |
| **POTA** | Parks on the Air activations and hunting | **My Park** on the logbook, and a **Park** field on each QSO for park-to-park contacts | `MY_SIG` = `POTA` and `MY_SIG_INFO` = your park reference on every QSO. When you fill in the other station's park, `SIG` = `POTA` and `SIG_INFO` = their park reference. |
| **SOTA** | Summits on the Air activations and chasing | **My Summit** on the logbook, and a **Summit** field on each QSO for summit-to-summit contacts | `MY_SIG` = `SOTA` and `MY_SIG_INFO` = your summit reference. When you fill in the other station's summit, `SIG` = `SOTA` and `SIG_INFO` = their summit reference. |
| **WWFF** | World Wide Flora and Fauna activations and hunting | **My Reference** on the logbook, and a **Reference** field on each QSO | `MY_SIG` = `WWFF` and `MY_SIG_INFO` = your reference. For the other station, `SIG` = `WWFF` and `SIG_INFO` = their reference. |
| **Field Day** | ARRL Field Day and Winter Field Day | **Class** and **Section** for each station you work, plus your own class and section on the logbook | `CONTEST_ID`, `CLASS` and `ARRL_SECT` for the station you worked, and your own class and section in the matching `MY_` fields. |
| **Generic** | Everything else: casual operating, nets, ragchews, portable operating that is not part of a program | None. You get the standard log form. | Nothing extra. The file holds the standard ADIF fields only. |

The standard fields are the same in every template: callsign, date and time, band, mode, frequency, signal reports, name, QTH, grid, state, country, and notes. The template only adds to that list.

## What the template changes

**The log form.** POTA and SOTA add a field for the other station's park or summit so park-to-park and summit-to-summit contacts are logged in one step. Field Day swaps signal reports for the class and section exchange.

**Your own location.** POTA and SOTA take your grid from the park or summit you enter. Generic and Field Day use **My Grid** from your operator profile or the device's location. See [Where Your Location Comes From](./location-by-template.md) for the details and why it matters for LoTW.

**The export.** Each program reads a specific set of ADIF fields. Using the matching template means the file you upload already has what the program is looking for, so a POTA export is accepted by pota.app and a SOTA export can go straight into the SOTA database.

## Picking a template

- Activating or hunting a park? **POTA**. Even if you only hunt, the Park field on each QSO records the activator's park for you.
- Activating or chasing a summit? **SOTA**.
- A WWFF reference that is not also a POTA park? **WWFF**.
- Field Day weekend? **Field Day**.
- Anything else? **Generic**.

:::tip One logbook per activation
Create a fresh POTA or SOTA logbook for each activation. Your park or summit reference lives on the logbook, so one logbook per outing keeps the reference right on every QSO and gives you one clean file to upload. If you end up at two parks at once, see [Activating Two Parks at Once](./two-parks.md).
:::

Looking for a template HAMRS does not have yet? Ask on [Discord](https://discord.gg/nngWMtXTqH).
