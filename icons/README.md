# PX Blue Icons for Material-UI
This library contains componentized svg icons from [@pxblue/icons](https://github.com/pxblue/icons) for use in React applications using Material UI. The icons are made available in the same way that Material UI exposes the [Material Icons](https://material-ui.com/style/icons/#svg-material-icons). 

## Installation
To install the PX Blue mui icons from NPM as a dependency for your project, you can run one of the following commands in your project root:
```
npm install --save @pxblue/icons-mui
or
yarn add @pxblue/icons-mui
```

>**NOTE (Peer Dependencies):** Using this package requires you to have @material-ui/core and @material-ui/icons defined as dependencies in your project's package.json file.

## Usage

### Angular
This package is intended for use only in React applications. For a way to link svg icons for use in Angular applications, see [@pxblue/icons](https://github.com/pxblue/icons).


### React
Once you have installed the npm module, you can import the icon components into your application as follows:
```
import myIcon from '@pxblue/icons-mui/MyIcon;
...
<myIcon></myIcon>
```
If you are importing multiple icons, you can save some space by using named imports from the package root:
```
import {FirstIcon, SecondIcon, ThirdIcon} from '@pxblue/icons-mui';
```

### Applying Different Colors
To change the color of the icon you are using, simply set the CSS color property. This property is inheritable, so if the property is not set on your icon, it will be inherited from the parent container.
```
<FirstIcon style={{color: 'red'}}></FirstIcon>
```

## Available Icons
See the [Iconography](https://pxblue.github.io/style/iconography) on pxblue.github.io for a list of currently available icons.


>**NOTE**: When using this package, icon names are in TitleCase (e.g., bypass_battery --> BypassBattery).