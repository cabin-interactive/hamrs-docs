---
sidebar_position: 3
---

# The QSO Map

The QSO Map plots the contacts in a logbook.

## Why a contact isn't on the map

A QSO is plotted only when it has a valid grid square in **Their Grid**. The grid usually comes from a callsign lookup, and you can also type it in. A QSO without one is still logged and exported. It just has no marker.

Lookups leave the grid empty when:

- The device was offline and the lookup service needs a connection.
- You use QRZ with a free account. QRZ does not provide grid squares to free accounts.

To fill in grids afterwards, open the logbook and choose **Actions > Lookup QSOs**.

## Your own location

The map draws a line to each contact from **My Grid**, which is in the logger toolbar with My State and My County.

- On mobile and in the web logger, the location button beside My Grid fills it in from the device's location.
- On a POTA logbook, entering **My Park** fills in My Grid from the park.

My Grid is exported as `MY_GRIDSQUARE`.

## Why the map is centred on Kansas

When it opens, the map centres on the My Grid of the logbook's QSOs. If none of them has one, it uses the device's location. If that isn't available either, it stays on its default view of the central United States.

Set My Grid, or allow HAMRS to use the device's location, and the map centres on you.
