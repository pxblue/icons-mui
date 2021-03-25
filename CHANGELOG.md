# Changelog

## v2.3.2

### Added

-   Brand logos: Amazon, Amazon Alexa, Apple, and Google.
-   Industrial icons: Pressure and Pressure Alt.
-   System icon: Face ID.

## v2.2.2

### Fixed

-   Crooked vector path in departments icon.
-   Aspect ratio in the Eaton logos.

## v2.2.1

### Fixed

-   Missing icon in the index file.

## v2.2.0

### Added

-   Three Eaton logo variants.
-   Lighting icons for Dimmer, Light Switch, Outlet, Light Bulb, and Ceiling Light.
-   General icons for Account Settings, Lock Reset, and Internet, Glass Divider.
-   Electrical icons for Capacitor Symbol, Diode, Switchgear, Transformer, Current AC, Current DC, Power AC, Power DC, Power Apparent AC, Voltage AC, Voltage DC, AC, DC, Line to Line, and Line to Neutral.
-   PPE icons for Hearing Protection, Safety Boot, Safety Glasses, and Distance Apart.
-   Device icons for AMI Gateway, IPPE Vibrate, IPPE Vibrate Off, IPPE Vibrate Outlined, and Device Activating.

### Changed

-   Modified the icon builder to generate icons with a customized view box.

## v2.1.1

###  Changed 

-   Renamed RoadVariant to RoadAlt for consistency.

### Fixed 

-   Various alignment and color issues.

## v2.1.0

### Added

-   Type definitions for use in TypeScript projects.

## v2.0.2

### Added 

-   New icons for Department, Departments, Building, Factory, Map Markers, Piggy Bank.

### v2.0.1

## Changed

-   This version has updated the import path for default imports of individual icons (named imports are unaffected). Individual icons can now be imported from the package root instead of from the /icons subdirectory:

```tsx
// new import syntax
import IconName from '@pxblue/icons-mui/IconName';
```
