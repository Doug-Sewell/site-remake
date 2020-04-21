import React from 'react';
import classes from './introduction.module.css'

const introduction = props => {
    let htmlString = props.intro.map(paragraph => {
        return (<p>{paragraph}</p>)
    });

    return (
        <div>
            <div className={classes.introContainer}>
                <div className={classes.introBorder}>
                    <div className={classes.headerContainer}>
                        <h1>Doug Sewell<br />Web Developer</h1>
                        <img src={props.photo} />
                    </div>
                    {htmlString}
                </div>
            </div>
        </div>
    );
}

export default introduction;