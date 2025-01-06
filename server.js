import express from 'express'
import postRouter from './routes/post.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
import notFound from './middleware/notFound.js'

const port = process.env.PORT || 8000

const app = express()

// Body parser middleware
app.use(express.json())

// allow to send form data
app.use(express.urlencoded({ extended: false }))

// logger middleware
app.use(logger)

// Routes
app.use('/api/post', postRouter)


// Error handler
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})