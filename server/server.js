const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')

require("dotenv").config();

const PORT = process.env.PORT || 4000;

const connectDB = require('./config/db.config');
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors({credentials: true}));

require("./routes/calendar.routes")(app)
require("./routes/userModels.routes")(app)
app.listen(PORT, () => console.log("Database successfully connected on port: " + PORT))


