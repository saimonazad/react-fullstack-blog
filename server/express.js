import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compress'
import cors from 'cors'
import helmet from 'helmet'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser);
app.use(helmet())
app.use(compress())
app.use(cors())

export default app