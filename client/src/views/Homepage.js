import React from 'react';
import classes from '../assets/Homepage.module.css';
import Calendar from '../components/Calendar';
import CalendarEvents from '../components/CalendarEvents';

const Homepage = () => {
    return (
        <div className={classes.Div}>
            <div className={classes.Container}>
                <Calendar/>
                <CalendarEvents/>
            </div>
        </div>
    )
}

export default Homepage