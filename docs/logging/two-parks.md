---
sidebar_position: 2
---

# Activating Two Parks at Once

Some spots sit inside two POTA entities, such as a state park inside a national forest, or a trail that runs through a park. POTA lets you claim both activations from the same set of contacts, but it wants one upload per park, with that park's reference in the file.

A HAMRS logbook holds one park reference at a time. To get two files from one activation, log everything once, then duplicate the logbook and change the park on the copy.

### 1. Log the whole activation in one POTA logbook

Create a POTA logbook, enter the first park reference in **My Park**, and log every contact as you normally would. Don't split your QSOs between two logbooks while you're on the air.

### 2. Duplicate the logbook

When the activation is over, open your logbook list and choose **Duplicate** from the logbook's menu. HAMRS makes a copy with all the same QSOs.

### 3. Change the park reference on the copy

Open the copy's settings and change **My Park** to the second park reference. Give the copy a name that says which park it is for, so the two logbooks are easy to tell apart later.

### 4. Export both logbooks

Export each logbook to ADIF. You now have two files with the same contacts, differing only in the park reference.

### 5. Check the files before you upload

- You should have **one file per park**.
- Open each file and confirm `MY_SIG_INFO` holds the right park reference for that file. Every record should also have `MY_SIG` set to `POTA`.
- The QSO count in each file should match the number of contacts you made.

### 6. Upload each file to POTA

Upload each file separately on pota.app. Each one credits the park named in its `MY_SIG_INFO`.

:::tip Only upload one copy to QRZ and LoTW
The two logbooks hold the same QSOs. Upload only one of them to QRZ, LoTW, or any other service that counts confirmations, or you'll create duplicate records there. POTA is the only place that needs both files.
:::

:::note
If you use HAMRS Sync, the duplicate appears on your other devices as its own logbook, just like any other.
:::

The same steps work for the SOTA and WWFF templates when you need two references from one set of contacts.

Questions about two-park activations? Ask on [Discord](https://discord.gg/nngWMtXTqH).
