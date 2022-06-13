require('dotenv').config()

import express from 'express'
import config from 'config'
import db from '../config/db'

const app = express()

app.use(express.json())

const port: number = config.get<number>('port')

import router from './router'
import Logger from '../config/logger'

import morganMiddleware from './middleware/morganMiddleware'

app.use(morganMiddleware)
app.use("/api/", router)

app.listen(port, async () => {
  await db();
  Logger.info(`A aplicacao esta na porta ${port}`)
})