import express from 'express'
import { v4 as uuidv4 } from 'uuid';

import { Game } from './game.js';

const app = express()
const port = 3000

// TODO: Refactor to allow the same API to run multiple games
const game = new Game(uuidv4())

app.get('/', (req, res) => {
  res.status(200).end()
})

app.post('/start', (req, res) => {
  res.json(game)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
