# Somfy RTS
Control your Somfy RTS devices with Homey.

## What's new

#### v3.1.0
[Structural] New structure for the application.

[Structural] Removed deprecated devices and re-pair of those devices to new devices.

[Enhancement] Somfy motors for vertical blinds now supported.

[Bug fix] Fixes to the signal definition which caused problems when pairing some devices.

[Bug fix] Signal length is now set at 2, as per the standard for Somfy's remotes.

[Cosmetic] Fixed this readme

#### v3.0.5
[Bug fix] Fixed the My button. You should now be able to set your blinds to the My position again!

#### v3.0.3
[Structural] Added a way to re-pair deprecated somfy devices through the pairing wizard (this is for devices added before november 2016).

#### v3.0.0
[Structural] Rewrite to SDK2 using Homey-RFDriver.

[Enhancement] Added ability to add blinds that have the tilt capability. (For the tilt capability the blinds should support the Somfy RTS extended signal format so this might not work with older models).

[Enhancement] Added My position flow card.

[Enhancement] Added tilt flow card.

[Bug fix] Minor bugfixes.

#### v2.1.12
[Structural] Changed the 3 shorter signal options to 1/2/4 repetitions for testing purposes.

#### v2.1.11
[Structural] Changed the 3 shorter signal options to 2/3/4 repetitions for further testing.

#### v2.1.10
[Structural] Added 3 shorter signal options for testing purposes. Notice that most likely 2 of the 3 added singal durations will be removed once the right "short signal" is determined.

#### v2.1.0
[Structural] Added logging and error reporting

#### v2.0.0
[Warning] The old drivers will be active alongside the new drivers for now but will be deprecated in the future which will mean you will need to re-pair devices to use the new drivers.

[Warning] To take advantage of the new drivers please re-pair your somfy devices.

[Structural] Complete rewrite of the app based on the 433 generator. Note that this rewrite only improves app stability but does not guarantee signal improvements.
