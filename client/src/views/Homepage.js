import React from 'react';
import classes from '../assets/Homepage.module.css';
import Calendar from '../components/Calendar';
import CurrentProjects from '../components/CurrentProjects';

const Homepage = () => {
    return (
        <div className={classes.Div}>
            <div className={classes.Container}>
                <Calendar/>
                <CurrentProjects/>
            </div>
        </div>
    )
}

export default Homepage