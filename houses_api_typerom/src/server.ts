import express from 'express'

import './database/connection'
import routes from './routes'

const  app = express()

app.use(express.json())
app.use(routes)

app.listen('3338', () => {
    console.log('Server runing on localhost: 3338')
})