---
sidebar_position: 5
---

# Where Your Location Comes From

Every QSO records where *you* were, not just where the other station was. HAMRS writes your location to the `MY_GRIDSQUARE` field in ADIF, and uses it to place your pin on the [QSO Map](./qso-map.md). Where that grid comes from depends on the template.

## By template

| Template | Your grid comes from | Written to ADIF |
| --- | --- | --- |
| **POTA** | The park in **My Park**. HAMRS looks up the park's grid from its reference. | `MY_GRIDSQUARE` = the park's grid, plus `MY_SIG` = `POTA` and `MY_SIG_INFO` = the park reference. |
| **SOTA** | The summit in **My Summit**. HAMRS looks up the summit's grid from its reference. | `MY_GRIDSQUARE` = the summit's grid, plus `MY_SIG` = `SOTA` and `MY_SIG_INFO` = the summit reference. |
| **WWFF** | The reference in **My Reference**, where the reference has a known location. Otherwise My Grid or the device's location, as for Generic. | `MY_GRIDSQUARE`, plus `MY_SIG` = `WWFF` and `MY_SIG_INFO` = the reference. |
| **Field Day** | **My Grid** on the logbook, then your operator profile, then the device's location. | `MY_GRIDSQUARE` |
| **Generic** | **My Grid** on the logbook, then your operator profile, then the device's location. | `MY_GRIDSQUARE` |

If none of the sources has a value, `MY_GRIDSQUARE` is left out of the file and your pin falls back as described on the [QSO Map](./qso-map.md#where-your-own-pin-comes-from) page.

## Why POTA and SOTA use the reference

A park or summit activation is, by definition, at a known place. Taking the grid from the reference means every QSO in the logbook has the right grid even if you never set My Grid, and even if the device has no idea where it is. It also means a stale home grid in your profile can't leak into a portable log.

:::info
On a POTA or SOTA logbook the reference wins over My Grid. If you need a different grid on a POTA log, for example because the park spans several grids and you want the one you were actually in, use the Generic template for that logbook and set My Grid yourself. You'll lose the `MY_SIG` and `MY_SIG_INFO` fields in the export, so this is rarely worth it for a POTA upload.
:::

## Why LoTW cares

LoTW matches each QSO you upload against a **Station Location** in TQSL, and a station location includes a grid square. When the `MY_GRIDSQUARE` in your file doesn't match the grid of the station location you sign with, TQSL warns you about the mismatch and can refuse to sign the file.

For a portable log this means:

- **Create a TQSL station location for the park or summit** with its grid, and sign the export with that location. The grid HAMRS wrote from the reference will match.
- **Don't sign a POTA or SOTA export with your home station location.** The grids will differ and TQSL will complain.
- **For Generic logs**, make sure My Grid on the logbook matches the station location you plan to sign with.

Getting the grid right matters to the other station too. Their grid-based awards, such as VUCC and the ARRL Grid Chase, only count a confirmation if your side of the QSO carries the correct grid.

:::tip
Use six-character grids wherever you can. LoTW accepts four, but six places you properly and matches what most other logging programs expect.
:::

## Checking the export

Open an exported ADIF file in a text editor and look at the first record. You should see `MY_GRIDSQUARE` with the grid you expect, and on a POTA or SOTA log, `MY_SIG` and `MY_SIG_INFO` with the program and reference. If `MY_GRIDSQUARE` is missing, go back to the logbook and set the park or summit reference, or My Grid, then export again.

Questions about location handling? Ask on [Discord](https://discord.gg/nngWMtXTqH).
