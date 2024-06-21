import { jest } from '@jest/globals'
import { Dealer } from '../domain/dealer.js'
import { Game } from './game.js'
import { Player } from '../domain/player.js'
import { RoundResult } from '../domain/roundResult.js'

describe('Game', () => {
  describe('when constructing', () => {
    it('should create with the necessary information', () => {
      const id = 'random-id'

      const game = new Game(id)

      expect(game.id).toEqual(id)
      expect(game.dealer).toBeInstanceOf(Dealer)
      expect(game.player).toBeInstanceOf(Player)
      expect(game.state).toEqual(RoundResult.CONTINUE)
    })
  })

  describe('start', () => {
    it('should ask the dealer to start the game', () => {
      const game = new Game('random-id')
      const dealerMock = {
        startGame: jest.fn()
      }
      game.dealer = dealerMock

      game.start()

      expect(dealerMock.startGame).toHaveBeenCalledTimes(1)
      expect(dealerMock.startGame).toHaveBeenCalledWith(game.player)
    })
  })

  describe('hit', () => {
    const game = new Game('random-id')

    it('should ask the dealer to hit for the player', () => {
      const dealerMock = {
        startGame: jest.fn(),
        hit: jest.fn()
      }
      game.dealer = dealerMock
      game.start()

      game.hit()

      expect(dealerMock.hit).toHaveBeenCalledTimes(1)
      expect(dealerMock.hit).toHaveBeenCalledWith(game.player)
    })

    it('should update the game state', () => {
      const expectedRoundResult = RoundResult.DEALER_WINS
      const dealerMock = {
        startGame: jest.fn(),
        hit: jest.fn().mockReturnValue(RoundResult.DEALER_WINS)
      }
      game.dealer = dealerMock
      game.start()

      game.hit()

      expect(game.state).toEqual(expectedRoundResult)
    })
  })

  describe('stand', () => {
    const game = new Game('random-id')

    it('should ask the dealer to stand for the player', () => {
      const dealerMock = {
        startGame: jest.fn(),
        stand: jest.fn()
      }
      game.dealer = dealerMock
      game.start()

      game.stand()

      expect(dealerMock.stand).toHaveBeenCalledTimes(1)
      expect(dealerMock.stand).toHaveBeenCalledWith(game.player)
    })

    it('should update the game state', () => {
      const expectedRoundResult = RoundResult.PLAYER_WINS
      const dealerMock = {
        startGame: jest.fn(),
        stand: jest.fn().mockReturnValue(expectedRoundResult)
      }
      game.dealer = dealerMock
      game.start()

      game.stand()

      expect(game.state).toEqual(expectedRoundResult)
    })
  })
})
