# Configuration

Rig control is accomplished within HAMRS by connecting to FLRIG

### Downloading FLRIG

FLRIG is a free, lightweight software that provides a simple interface to communicate with your radio.

You can download FLRIG from the following official sources:

• Windows, MacOS, and Linux: [Download FLRIG](http://www.w1hkj.com/files/flrig/)

Make sure to select the appropriate version for your operating system and follow the installation instructions provided.


### Configuring FLRIG

You'll need to [configure FLRIG](http://www.w1hkj.com/flrig-help/initial_setup.html) to connect to your radio.
You'll need the XMLRPC port:

![FLRIG Server](./img/flrig-server-window.png)

### Configuring HAMRS

Now that FLRIG is running and connected to your radio, we need to make sure HAMRS nows how to talk to it.

1. Open the **Config** menu
![FLRIG Server](./img/config-menu-item.png)
2. Go to the **Rig Control** tab
![FLRIG Server](./img/rig-control-tab.png)
3. Enter the hostname/ip address and XMLRPC port in HAMRs config - the default may be `localhost` or `127.0.0.1`
4. Click the **'Test Connection'** button.

### Common Troubleshooting
**Issue: Cannot Connect to FLRIG**

- Check if FLRIG is Running
- Ensure the FLRIG application is open and connected to your radio.
- Verify Host and Port
- Confirm that the host is localhost (or the correct IP address) and the port is 12345 (or your FLRIG configuration).
