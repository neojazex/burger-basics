import React from 'react';
import { tsPropertySignature } from '@babel/types';
import classes from './Modal.module.css';

const modal = (props) => (
    <div className={classes.Modal}>
        {props.children}
    </div>
);

export default modal;