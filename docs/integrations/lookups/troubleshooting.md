---
sidebar_position: 2
---

# Troubleshooting Lookups

Most lookup problems come down to one of four things: no provider chosen, a QRZ account that can't return data, a callsign that isn't in the database, or no internet connection. Work through the problem that matches what you're seeing.

**The web logger shows `Client Not Initialized` when you type a callsign**

This means the web logger started up before a lookup provider was chosen, so it has no client to send the lookup to.

- Click **Config** in the top navigation bar, open the **Integrations** tab, and choose a provider in the **Callsign Lookup** section. If you pick QRZ, enter your username and password and click **Submit**.
- Refresh the browser. The lookup client is created when the page loads, so a refresh is what clears the error.
- If it comes back, confirm the provider is still selected after the refresh. If the setting didn't stick, choose it again and refresh once more.

**Lookups return nothing, or only the callsign comes back**

- **Your QRZ XML subscription has lapsed.** Sign in at [qrz.com](https://www.qrz.com) and check your subscription status. Without an active XML subscription, QRZ returns very little data to HAMRS. Renew it, then try another lookup. You shouldn't need to change anything in HAMRS.
- **Your QRZ password is wrong or has changed.** Open **Config > Integrations**, re-enter your QRZ username and password, and click **Submit**. If you recently changed your password on qrz.com, HAMRS is still trying the old one.
- **The callsign has no QRZ page.** QRZ only knows about callsigns that have a page on qrz.com. New licensees and some international operators won't be there yet. Try the same callsign on qrz.com directly; if it isn't there either, HAMRS can't fill it in.
- **The callsign isn't in HamDB.** HamDB covers US callsigns well but international coverage is partial. If you work a lot of DX, switch to QRZ.
- **You're offline.** Lookups need an internet connection. In the field with no signal, HAMRS logs the QSO as usual and leaves the lookup fields blank. You can fill them in later when you're back online by editing the QSO.

**Lookups are slow**

- A lookup is a round trip to HamDB or QRZ, so it depends on your connection. On a weak cell signal it can take several seconds. The QSO still logs; the fields fill in when the answer arrives.
- QRZ can be slow at peak times, especially during big contests. There's nothing to fix on the HAMRS side.
- If you're logging a pileup and lookups are getting in the way, you can keep typing. HAMRS doesn't block the form while a lookup is in flight.

**Lookups worked yesterday and stopped today**

- Check that you're online.
- If you use QRZ, sign in at qrz.com in a browser to confirm your account is in good standing and your password still works.
- Quit and relaunch HAMRS, or refresh the web logger, so it starts a fresh session with the provider.

:::tip
Not sure which QRZ credential you've entered? The [Which credential is which](./callsign-lookups#which-credential-is-which) table explains what the QRZ username and password, the QRZ Logbook API key, and the hamrs.app API key each do.
:::
