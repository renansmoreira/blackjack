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

    it('should allow to create with a shuffler', () => {
      const id = 'random-id'
      const shuffleStrategy = {
        shuffle: jest.fn()
      }

      new Game(id, shuffleStrategy)

      expect(shuffleStrategy.shuffle).toHaveBeenCalledTimes(1)
    })
  })

  describe('start', () => {
    it('should ask the dealer to start the game', () => {
      const game = new Game('random-id')
      const dealerMock = {
        startGame: jest.fn().mockReturnValue(RoundResult.CONTINUE)
      }
      game.dealer = dealerMock

      game.start()

      expect(dealerMock.startGame).toHaveBeenCalledTimes(1)
      expect(dealerMock.startGame).toHaveBeenCalledWith(game.player)
    })

    it('should store the game state', () => {
      const game = new Game('random-id')
      const expectedGameState = RoundResult.PLAYER_WINS
      const dealerMock = {
        startGame: jest.fn().mockReturnValue(expectedGameState)
      }
      game.dealer = dealerMock

      game.start()

      expect(game.state).toEqual(expectedGameState)
    })
  })

  describe('hit', () => {
    let game;

    beforeEach(() => {
      game = new Game('random-id')
    })

    it('should ask the dealer to hit for the player', () => {
      const dealerMock = {
        startGame: jest.fn().mockReturnValue(RoundResult.CONTINUE),
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
        startGame: jest.fn().mockReturnValue(RoundResult.CONTINUE),
        hit: jest.fn().mockReturnValue(RoundResult.DEALER_WINS)
      }
      game.dealer = dealerMock
      game.start()

      game.hit()

      expect(game.state).toEqual(expectedRoundResult)
    })

    it.each([RoundResult.DEALER_WINS, RoundResult.PLAYER_WINS])('should NOT hit for a game on %s state', ({ state }) => {
      const dealerMock = {
        hit: jest.fn()
      }
      game.dealer = dealerMock
      game.state = state

      game.hit()

      expect(dealerMock.hit).toHaveBeenCalledTimes(0)
    })
  })

  describe('stand', () => {
    let game;

    beforeEach(() => {
      game = new Game('random-id')
    })

    it('should ask the dealer to stand for the player', () => {
      const dealerMock = {
        startGame: jest.fn().mockReturnValue(RoundResult.CONTINUE),
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
        startGame: jest.fn().mockReturnValue(RoundResult.CONTINUE),
        stand: jest.fn().mockReturnValue(expectedRoundResult)
      }
      game.dealer = dealerMock
      game.start()

      game.stand()

      expect(game.state).toEqual(expectedRoundResult)
    })

    it.each([RoundResult.DEALER_WINS, RoundResult.PLAYER_WINS])('should NOT stand for a game on %s state', ({ state }) => {
      const dealerMock = {
        stand: jest.fn()
      }
      game.dealer = dealerMock
      game.state = state

      game.stand()

      expect(dealerMock.stand).toHaveBeenCalledTimes(0)
    })
  })
})
