import React, { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import axios from "axios"

export default function AddNewEventForm(props) {
  const [eventName, setEventName] = useState("")
  const [eventDetails, setEventDetails] = useState("")

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          required
          id="eventName"
          label="Event Name"
        />
        <div>
          <TextField
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            required
            multiline
            rows={4}
            id="eventName"
            label="Event Details"
          />
        </div>
        <div style={{ alignSelf: "flex-end" }}>
          <Button onClick={props.stateChanger}>Cancel</Button>
          <Button
            onClick={() => {
              axios
                .post(
                  "http://localhost:4000/api/calendarEvents",
                  eventName,
                  eventDetails,
                  props.startDate
                )
                .then((response) => {
                  console.log(response.status)
                  console.log(response.data.token)
                })
              props.stateChanger()
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </Box>
  )
}
