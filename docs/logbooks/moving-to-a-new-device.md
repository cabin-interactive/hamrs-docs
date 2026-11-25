---
sidebar_position: 3
---

# Moving to a New Device

There are two ways to get your HAMRS data onto a new phone, tablet, or computer. Which one you use depends on whether you have a hamrs.app subscription.

| | With a subscription | Without a subscription |
| --- | --- | --- |
| **How** | HAMRS Sync pulls everything down automatically. | Export each logbook as an ADIF file, move the files, import them. |
| **Logbooks and QSOs** | Yes | Yes, one logbook at a time |
| **Operator profiles** | Yes | No, recreate them on the new device |
| **Logbook templates and settings** | Yes | No, set them again on the new device |

## With a subscription: use Sync

If you subscribe to hamrs.app, you do not need to export anything. Install HAMRS on the new device and paste in your API Key.

### 1. Make sure the old device has synced

Open HAMRS on the old device while it is online and check that the **HAMRS Sync** badge under **Config > Integrations** says **Connected** with a recent **Last Synced** time. Anything logged since that time has not reached your account yet.

### 2. Install HAMRS on the new device

Download HAMRS from the App Store, Google Play, or hamrs.app, and open it.

### 3. Use the Already have data? link

On the **First Time Setup** screen, look for the **Already have data?** notice and follow its link to the **Sync Page**. Paste your API Key there. HAMRS downloads your profiles and logbooks before you create anything new, so you will not end up with a duplicate profile to clean up.

The key comes from your hamrs.app Dashboard. [Setting Up Sync](/docs/sync/setting-up-sync) walks through finding it and what the status badges mean.

:::tip
If you already went through First Time Setup and created a profile, you can still turn on Sync under **Config > Integrations**. Your account data is merged in; you may just have an extra profile to delete afterwards.
:::

## Without a subscription: export and import

Without Sync, you move your QSOs by hand as .adi files. Plan on a few minutes per logbook.

### 1. Export each logbook on the old device

Follow [Exporting a Logbook as ADIF](./exporting-adif.md) for every logbook you want to keep. Give each file a name you will recognize, such as the park reference and date for an activation.

### 2. Move the files to the new device

Any method that moves a file works. The common ones:

- **iCloud Drive, Dropbox, Google Drive, or OneDrive**: on the old device, save or upload the .adi files into a folder in the cloud drive. On the new device, open the same cloud drive app and the files are there.
- **AirDrop** (Apple devices): from the share sheet or Finder on the old device, AirDrop the files straight to the new iPhone, iPad, or Mac. On iOS they are saved to Files; on macOS they land in Downloads.
- **Email or messaging**: attach the files to a message to yourself and save the attachments on the new device.
- **USB or a shared folder**: between two computers, copy the files like any other document.

### 3. Set up the new device

Open HAMRS on the new device and complete First Time Setup. Create your operator profile with the same callsign you used before.

### 4. Create a logbook and import

For each .adi file, create a new logbook, pick the matching template (General, POTA, SOTA, and so on), open it, and follow [Importing an ADIF File](./importing-adif.md). Repeat until every file is in.

:::note What does not travel in an ADIF file
An ADIF file holds QSOs and nothing else. These stay behind on the old device and need to be set up again:

- **Operator profiles**: callsign, name, grid, and the other details on each profile.
- **Logbook templates**: the template is a property of the logbook, not the file, so choose it when you create each new logbook.
- **App settings**: rig control, QRZ credentials, display preferences, and other options under **Config**.
:::

### 5. Check the result

Open a couple of the imported logbooks and compare the QSO count with the old device. If a logbook came in short, see [Troubleshooting Exports and Imports](./troubleshooting.md).

Keep the .adi files once you are done. They are a free backup of your QSOs.
