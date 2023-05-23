declare var require: any
declare var process: any
import express, {Express, Request, Response} from 'express'
import cors from 'cors'
require('dotenv').config()

const app: Express = express()
const port: number = process.env.PORT

app.use(cors({origin: 'localhost:3000'}))
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`)
});