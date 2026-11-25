---
sidebar_position: 3
---

# The QSO Map

The QSO Map shows your station and every contact in the logbook as pins on a map. The map can only place a pin where it has a location, so the two questions people ask most are "why isn't this contact on the map?" and "why is my station in Kansas?". Both come down to a missing location.

## What a contact's pin needs

Each QSO needs either a **grid square** or a **latitude and longitude** before it can appear on the map. HAMRS fills these in two ways:

- **From a callsign lookup.** When you enter a callsign, HAMRS looks it up and copies the station's grid into the QSO. Most pins come from here.
- **Typed in by you.** Fill in the **Grid** field on the QSO yourself. Four characters (such as `EM48`) places the pin in the right area. Six characters (such as `EM48sr`) places it within a few miles.

If a QSO has neither, it stays off the map. The contact is still logged and still exports. It just has no pin.

:::tip
If the lookup doesn't return a grid, ask the other station for theirs on the air and type it in. Operators who are portable or whose lookup entry is out of date often have no grid on file.
:::

## Where your own pin comes from

The map needs your location too, both to place your station pin and to decide where to centre when the logbook is empty. HAMRS looks in this order:

1. **The park or summit reference**, if the logbook uses the POTA or SOTA template. The reference gives HAMRS the park or summit's grid. See [Where Your Location Comes From](./location-by-template.md).
2. **My Grid**, from the logbook's settings or your operator profile.
3. **The device's location**, if the device has location services and you have allowed HAMRS to use them.
4. **The centre of the United States.** When none of the above is available, HAMRS has nothing to go on and centres the map on the geographic centre of the US, in Kansas.

So a map centred on Kansas is not a bug. It means My Grid is blank and the device could not provide a location. Setting My Grid fixes it.

## Setting My Grid

**In your operator profile.** Your profile holds your home grid. Open **Config**, choose your operator profile, and fill in the **Grid** field. Every new Generic or Field Day logbook that uses this profile starts with this grid.

**On a single logbook.** For a trip or a portable outing, open the logbook's settings and set **My Grid** there. The logbook's grid wins over the profile's grid, so your home grid stays untouched.

Use a six-character grid if you know it. It places your pin more accurately and is what LoTW expects.

:::info
On a POTA or SOTA logbook you don't need to set My Grid. The park or summit reference supplies the grid for you.
:::

## Troubleshooting

**The map is centred on Kansas**

- My Grid is blank on the logbook and on your operator profile, and HAMRS could not get a location from the device. Set My Grid as described above.
- On a phone or tablet, check that location access is allowed for HAMRS in the device's settings if you'd rather rely on the device's location.

**A contact has no pin**

- The QSO has no grid or lat/long. Open it and check the Grid field.
- The lookup didn't run or didn't return a grid. This is common when you're offline. See [Using the Map Offline](./map-offline.md).
- Type the grid in by hand if you have it.

**Your station pin is in the wrong place**

- My Grid on the logbook is left over from an earlier trip. Update it in the logbook's settings.
- On a POTA or SOTA logbook, check the park or summit reference for typos. The pin follows the reference.
- The device's location is stale or turned off. Set My Grid so the map doesn't depend on it.
