import { GameNullObject } from "../service/game.js"

class MemoryDatabase {
  games = new Map()

  addGame(game) {
    this.games.set(game.id, game)
  }

  findGame(id) {
    if (this.games.has(id)) {
      return this.games.get(id)
    }

    return new GameNullObject()
  }
}

export { MemoryDatabase }
