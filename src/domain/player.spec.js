import { createFacedUpCard } from "../test-helpers/utils.js"
import { Card } from "./card.js"
import { Player } from "./player.js"
import { Suit } from "./suit.js"

describe('Player', () => {
  const name = 'Player 1'

  describe('when constructing', () => {
    it('should create with the necessary info', () => {
      const expectedName = 'John Doe'

      const player = new Player(expectedName)

      expect(player.name).toEqual(expectedName)
      expect(player.hand.cards).toHaveLength(0)
    })
  })

  describe('collectCard', () => {
    it('should add the new card to the hand', () => {
      const card = new Card('A', Suit.CLUBS, 11)
      const player = new Player(name)

      player.collectCard(card)

      expect(player.hand.cards).toEqual([card])
    })
  })

  describe('isBusted', () => {
    it('should indicate if the player is busted', () => {
      const player = new Player(name)
      player.collectCard(createFacedUpCard(10, Suit.CLUBS, 10))
      player.collectCard(createFacedUpCard(10, Suit.DIAMONDS, 10))
      player.collectCard(createFacedUpCard(10, Suit.SPADES, 10))

      const result = player.isBusted()

      expect(result).toBeTruthy()
    })
  })

  describe('hasBlackJack', () => {
    it('should indicate if the player has a blackjack', () => {
      const player = new Player(name)
      player.collectCard(createFacedUpCard('A', Suit.CLUBS, 11))
      player.collectCard(createFacedUpCard(10, Suit.DIAMONDS, 10))

      const result = player.hasBlackJack()

      expect(result).toBeTruthy()
    })
  })

  describe('points', () => {
    it('should display player points', () => {
      const expectedPoints = 8
      const player = new Player(name)
      player.collectCard(createFacedUpCard(5, Suit.CLUBS, 5))
      player.collectCard(createFacedUpCard(3, Suit.DIAMONDS, 3))

      const result = player.points()

      expect(result).toEqual(expectedPoints)
    })
  })
})
