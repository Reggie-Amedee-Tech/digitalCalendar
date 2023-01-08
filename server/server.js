require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const userRoutes = require("./routes/userModels.routes")
const authRoutes = require("./routes/auth.routes")

// Database Connection
const connectDB = require("./config/db.config")
connectDB()

//Middlewares
app.use(express.json())
app.use(cors())

//Routes
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () =>
  console.log("Database successfully connected on port: " + PORT)
)
