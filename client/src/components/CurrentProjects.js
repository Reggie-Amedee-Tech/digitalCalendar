import React, { useEffect } from 'react'
import { getAllCalendarEvents } from '../features/calendarEvents/calendarEventSlice';
import {useSelector, useDispatch} from 'react-redux'
import classes from '../assets/CalendarEvents.module.css'


const CalendarEvents = () => {

  const loading = useSelector(state => state.getAllEvents.loading)
  const actualCalendarEvents = useSelector(state => state.getAllEvents.calendarEvents)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCalendarEvents())

  }, [])


  return (
    <div className={classes.Div}>
      {loading ? <div className={classes.Container}>
        <h1>Loading...</h1>
      </div> : <div className={classes.Container}>
        <h1>Projects</h1>
        {actualCalendarEvents.map(event => {
          let arr = []
          let date = event.eventDate.slice(0, 10)
          let year = event.eventDate.slice(0, 4)
          for (let i = 0; i < date.length; i++) {
            if (i > 4) {
              arr.push(date[i])
            }
          }
          const Date = arr.toString().replace(/,/g, "") + "-" + year
          return <div className={classes.EventLine}>
            <h2>{event.eventName}</h2>
            <h4>{Date}</h4>
          </div>
        })}
        </div>}
    </div>
  )
}

export default CalendarEvents