import express from 'express'
import { v4 as uuidv4 } from 'uuid';

import { Game } from './service/game.js';

const app = express()
const port = 3000

// TODO: Refactor to allow the same API to run multiple games
const game = new Game(uuidv4())

app.get('/', (_, res) => {
  res.status(200).end()
})

app.post('/start', (_, res) => {
  game.start()
  res.json(game)
})

app.post('/hit', (_, res) => {
  game.hit()
  res.json(game)
})

app.post('/stand', (_, res) => {
  game.stand()
  res.json(game)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
