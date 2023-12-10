import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import colors from 'colors'

import errorHandler from './middleware/error.js'

import connectDB from './config/db.js'

// Load env vars
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()

// Route files
import shoes from './routes/shoe.js'

const app = express()

// Enable CORS (Cross-Origin Resource Sharing)
/*
  CORS is a web security mechanism that allows web applications to access resources hosted on other domains while protecting against unauthorized access and web-based attacks.
*/
app.use(cors())

// Body parser
app.use(express.json())

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount routers
app.use('/api/v1/shoes', shoes)

// Error Handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // Close server & exit process
  server.close(() => process.exit(1))
})
