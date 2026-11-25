---
sidebar_position: 4
---

# Using the Map Offline

Plenty of parks and summits have no cell coverage. HAMRS keeps logging without a connection, but the QSO Map depends on callsign lookups, and lookups need the internet.

## What happens without data

- **Logging works as normal.** Every QSO you enter is saved to the device.
- **Lookups don't run.** Without a connection HAMRS can't fetch the other station's details, so the QSO gets no name, no QTH, and no grid.
- **No grid means no pin.** A contact with no grid or lat/long has nothing to place on the map, so the map shows your station alone, or only the contacts you typed a grid for.
- **Your own pin is fine** as long as the logbook has a location: a park or summit reference, My Grid, or the device's GPS. GPS works without data on most phones.

:::note
The QSOs are complete for logging purposes. Grid is not required for POTA, SOTA, or most awards, so you can export and upload an offline log without filling anything in.
:::

## When you're back online

Once the device has a connection again, HAMRS runs the lookups it couldn't run in the field. As each one completes, the grid is written to the QSO and its pin appears on the map. Give it a moment after you reconnect, then open the logbook again to see the map fill in.

If a contact still has no pin after you're back online:

- Open the QSO and check the Grid field. Some stations have no grid on file, so the lookup has nothing to return.
- Edit the QSO and re-enter the callsign to trigger a fresh lookup.
- Type the grid in by hand if you got it over the air.

:::tip Ask for the grid on the air
If the map matters to you in the field, ask each station for their grid square and type it into the Grid field as you log. The pin appears right away, with or without data, and the exported file has the grid even if the lookup never finds one.
:::

## Sync waits too

If you use HAMRS Sync, your field QSOs are pushed to your other devices the next time you're online, the same way lookups catch up. Nothing is lost while you're out of coverage.
