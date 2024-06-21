import express from 'express'
import { v4 as uuidv4 } from 'uuid';

import { Game, GameNullObject } from './service/game.js';
import { MemoryDatabase } from './infra/database.js';

const app = express()
const port = 3000

const database = new MemoryDatabase()

app.get('/', (_, res) => {
  res.status(200).end()
})

app.post('/start', (_, res) => {
  const game = new Game(uuidv4())
  game.start()

  database.addGame(game)

  res.json(game)
})

app.post('/hit/:id', (req, res) => {
  const game = database.findGame(req.params.id)

  if (game instanceof GameNullObject) {
    res.status(404).send()
    return
  }

  game.hit()
  res.json(game)
})

app.post('/stand/:id', (req, res) => {
  const game = database.findGame(req.params.id)

  if (game instanceof GameNullObject) {
    res.status(404).send()
    return
  }

  game.stand()
  res.json(game)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
