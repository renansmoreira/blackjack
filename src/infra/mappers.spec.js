import { jest } from '@jest/globals'
import { Card } from "../domain/card"
import { Hand } from "../domain/hand"
import { Player } from "../domain/player"
import { Suit } from "../domain/suit"
import { Mappers } from "./mappers"
import { Game } from '../service/game'
import { createFacedUpCard } from '../test-helpers/utils'

describe('mappers', () => {
  describe('mapCard', () => {
    it('should map a card', () => {
      const card = new Card('10', Suit.CLUBS, 10)
      const expectedResult = {
        isVisible: false,
        value: '10',
        suit: Suit.CLUBS,
      }

      const result = new Mappers().mapCard(card)

      expect(result).toEqual(expectedResult)
    })

    it('should map a visible card', () => {
      const card = createFacedUpCard('10', Suit.CLUBS, 10)
      const expectedResult = {
        isVisible: true,
        value: '10',
        suit: Suit.CLUBS,
      }

      const result = new Mappers().mapCard(card)

      expect(result).toEqual(expectedResult)
    })
  })

  describe('mapHand', () => {
    it('should map a hand points', () => {
      const expectedCardCount = 2
      const expectedPoints = 17
      const hand = new Hand()
      hand.add(createFacedUpCard('10', Suit.CLUBS, 10))
      hand.add(createFacedUpCard('7', Suit.DIAMONDS, 7))
      const mappers = new Mappers()

      const result = mappers.mapHand(hand)

      expect(result.cards).toHaveLength(expectedCardCount)
      expect(result.points).toEqual(expectedPoints)
    })

    it('should map all the cards', () => {
      const hand = new Hand()
      hand.add(new Card('10', Suit.CLUBS, 10))
      hand.add(new Card('7', Suit.DIAMONDS, 7))
      const mappers = new Mappers()
      mappers.mapCard = jest.fn()

      mappers.mapHand(hand)

      expect(mappers.mapCard).toHaveBeenCalledTimes(2)
      expect(mappers.mapCard).toHaveBeenNthCalledWith(1, hand.cards[0])
      expect(mappers.mapCard).toHaveBeenNthCalledWith(2, hand.cards[1])
    })
  })

  describe('mapPlayer', () => {
    it('should map the player name', () => {
      const player = new Player('John Doe')
      const mappers = new Mappers()
      mappers.mapHand = jest.fn()

      const result = mappers.mapPlayer(player)

      expect(result.name).toEqual(player.name)
    })

    it('should map the player hand', () => {
      const player = new Player()
      const mappers = new Mappers()
      mappers.mapHand = jest.fn()

      mappers.mapPlayer(player)

      expect(mappers.mapHand).toHaveBeenCalledTimes(1)
      expect(mappers.mapHand).toHaveBeenCalledWith(player.hand)
    })
  })

  describe('mapGame', () => {
    const game = new Game('random-id')
    const mappers = new Mappers()
    mappers.mapPlayer = jest.fn()

    afterEach(() => {
      jest.resetAllMocks()
    })

    it('should map the game info', () => {
      const result = mappers.mapGame(game)

      expect(result.id).toEqual(game.id)
      expect(result.state).toEqual(game.state)
    })

    it('should map the dealer info', () => {
      mappers.mapGame(game)

      expect(mappers.mapPlayer).toHaveBeenCalledTimes(2)
      expect(mappers.mapPlayer).toHaveBeenNthCalledWith(1, game.dealer)
    })

    it('should map the player info', () => {
      mappers.mapGame(game)

      expect(mappers.mapPlayer).toHaveBeenCalledTimes(2)
      expect(mappers.mapPlayer).toHaveBeenNthCalledWith(2, game.player)
    })
  })
})
