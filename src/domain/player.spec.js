import { createFacedUpCard } from "../test-helpers/utils.js"
import { Card } from "./card.js"
import { CardValue } from "./cardValue.js"
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
      const card = new Card(CardValue.A, Suit.CLUBS)
      const player = new Player(name)

      player.collectCard(card)

      expect(player.hand.cards).toEqual([card])
    })
  })

  describe('isBusted', () => {
    it('should indicate if the player is busted', () => {
      const player = new Player(name)
      player.collectCard(createFacedUpCard('10', Suit.CLUBS))
      player.collectCard(createFacedUpCard('10', Suit.DIAMONDS))
      player.collectCard(createFacedUpCard('10', Suit.SPADES))

      const result = player.isBusted()

      expect(result).toBeTruthy()
    })
  })

  describe('hasBlackJack', () => {
    it('should indicate if the player has a blackjack', () => {
      const player = new Player(name)
      player.collectCard(createFacedUpCard('A', Suit.CLUBS))
      player.collectCard(createFacedUpCard('10', Suit.DIAMONDS))

      const result = player.hasBlackJack()

      expect(result).toBeTruthy()
    })
  })

  describe('points', () => {
    it('should display player points', () => {
      const expectedPoints = 8
      const player = new Player(name)
      player.collectCard(createFacedUpCard('5', Suit.CLUBS))
      player.collectCard(createFacedUpCard('3', Suit.DIAMONDS))

      const result = player.points()

      expect(result).toEqual(expectedPoints)
    })
  })
})
