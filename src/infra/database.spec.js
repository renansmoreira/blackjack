import { Game, GameNullObject } from "../service/game"
import { MemoryDatabase } from "./database"

describe('MemoryDatabase', () => {
  describe('addGame', () => {
    it('should add a new game', () => {
      const database = new MemoryDatabase()
      const game = new Game()

      database.addGame(game)

      expect(database.games.size).toEqual(1)
      expect(database.games.get(game.id)).toEqual(game)
    })
  })

  describe('findGame', () => {
    let database;

    beforeEach(() => {
      database = new MemoryDatabase()
    })

    it('should find a game', () => {
      const game = new Game()
      database.addGame(game)

      const result = database.findGame(game.id)

      expect(result).toEqual(game)
    })

    it('should not find a invalid game', () => {
      const game = new Game()
      database.addGame(game)

      const result = database.findGame('invalid-id')

      expect(result).toBeInstanceOf(GameNullObject)
    })
  })
})
