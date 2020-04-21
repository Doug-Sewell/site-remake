import React from 'react';
import classes from './navigation.module.css';
import Aux from '../../hoc/Aux';

const navigation = () => (
    <div className = {classes.NavBar}>
        <a href="#">Intro</a>
        <a href="#">Experience</a>
        <a href="#">Contact</a>
    </div>
);

export default navigation;