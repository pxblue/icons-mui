# Changelog

## v2.2.2

### Fixed

-   Crooked vector path in departments icon
-   Aspect ratio in the Eaton logos

## v2.2.1

### Fixed

-   Missing icon in the index file

## v2.2.0

### Added

-   three Eaton logo variants.
-   lighting icons for Dimmer, Light Switch, Outlet, Light Bulb, and Ceiling Light.
-   general icons for Account Settings, Lock Reset, and Internet, Glass Divider.
-   electrical icons for Capacitor Symbol, Diode, Switchgear, Transformer, Current AC, Current DC, Power AC, Power DC, Power Apparent AC, Voltage AC, Voltage DC, AC, DC, Line to Line, and Line to Neutral.
-   PPE icons for Hearing Protection, Safety Boot, Safety Glasses, and Distance Apart.
-   device icons for AMI Gateway, IPPE Vibrate, IPPE Vibrate Off, IPPE Vibrate Outlined, and Device Activating.

### Changed

-   Modified the icon builder to generate icons with a customized view box

## v2.1.1

-   Fixed a few alignment and color issues
-   Renamed RoadVariant to RoadAlt for consistency

## v2.1.0

-   Added type definitions for use in TypeScript projects

## v2.0.2

-   Added new icons for Department, Departments, Building, Factory, Map Markers, Piggy Bank

### v2.0.1

This version has updated the import path for default imports of individual icons (named imports are unaffected). Individual icons can now be imported from the package root instead of from the /icons subdirectory:

```tsx
// new import syntax
import IconName from '@pxblue/icons-mui/IconName';
```
