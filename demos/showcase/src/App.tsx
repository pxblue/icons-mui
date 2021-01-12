import React from 'react';
import * as Icons from '@pxblue/icons-mui';
const meta = require('@pxblue/icons-mui/index.json');

const getMuiIconName = (filename: string) => {
    return filename.replace(/\.svg/, '').replace(/(^.)|(_)(.)/g, (match, p1, p2, p3) => (p1 || p3).toUpperCase());
};
const sorted = meta.icons.sort((a: any, b: any) => (a.filename > b.filename ? 1 : -1));

export const App = () => {
    return (
        <div>
            {sorted.map((icon: any) => {
                //@ts-ignore
                const Component = Icons[getMuiIconName(icon.filename)];
                return (
                    <>
                        <Component />
                        {/* <h1>{icon.filename}</h1> */}
                    </>
                );
            })}
        </div>
    );
};
