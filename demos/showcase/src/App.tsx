import React from 'react';
import * as Icons from '@pxblue/icons-mui';
const meta = require('@pxblue/icons-mui/index.json');


const getMuiIconName = (filename: string) => {
  return filename
    .replace(/\.svg/, '')
    .replace(/(^.)|(_)(.)/g, (match, p1, p2, p3) => (p1 || p3).toUpperCase());
}

export const App = () => {
  return (
    <div>
      {meta.icons.map((icon: any) => {
        //@ts-ignore
        const Component = Icons[getMuiIconName(icon.filename)];
        return <Component />
      })}
    </div>
  );
}