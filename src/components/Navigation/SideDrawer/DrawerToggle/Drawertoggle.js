import React from 'react';

import classes from './DrawerToggle.module.css';

//named as DrawerToggle.js -- mind the case

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;