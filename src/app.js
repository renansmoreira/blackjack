import express from 'express'
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

import { Game, GameNullObject } from './service/game.js';
import { MemoryDatabase } from './infra/database.js';
import { Mappers } from './infra/mappers.js';
import { RandomShuffler } from './domain/shuffleStrategies.js';

const app = express()
app.use(express.static(path.join(path.resolve(), 'src', 'public')))
const port = 3000

const mappers = new Mappers()
const database = new MemoryDatabase()

app.post('/start', (_, res) => {
  const game = new Game(uuidv4(), new RandomShuffler())
  game.start()

  database.addGame(game)

  res.json(mappers.mapGame(game))
})

app.post('/hit/:id', (req, res) => {
  const game = database.findGame(req.params.id)

  if (game instanceof GameNullObject) {
    res.status(404).send()
    return
  }

  game.hit()
  res.json(mappers.mapGame(game))
})

app.post('/stand/:id', (req, res) => {
  const game = database.findGame(req.params.id)

  if (game instanceof GameNullObject) {
    res.status(404).send()
    return
  }

  game.stand()
  res.json(mappers.mapGame(game))
})

app.listen(port, () => {
  console.log(`Blackjack app listening on port ${port}`)
})
