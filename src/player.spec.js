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
})

function createFacedUpCard(value, suit, points) {
  const card = new Card(value, suit, points)
  card.turnUp()

  return card
}
