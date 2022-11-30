import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import { pool } from './routes/db.js'

import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public')))

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "Hello world" as RESULT')
    console.log(result);
    res.json(result[0])
})


app.listen(3000)
console.log('Server is listening on port', 3000);