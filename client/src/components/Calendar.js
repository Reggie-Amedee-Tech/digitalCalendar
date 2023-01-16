import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../assets/Calendar.css"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import AddNewEventForm from "./crud/AddNewEventForm"
import { Typography } from "@mui/material"

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [showForm, setShowForm] = useState(false)
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="calendarDiv">
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          console.log(date)
          setStartDate(date)
        }}
        inline
      />
      <Button className="button" onClick={handleClickOpen}>
        Add Event
      </Button>

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Typography>
            Creating New Event for {startDate.toDateString()}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <AddNewEventForm startDate={startDate} stateChanger={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Calendar
