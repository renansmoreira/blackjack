import { Card } from "./card.js"
import { Player } from "./player.js"
import { Suit } from "./suit.js"

describe('Player', () => {
  describe('when constructing', () => {
    it('should create with the necessary info', () => {
      const expectedName = 'Player 1'

      const player = new Player(expectedName)

      expect(player.name).toEqual(expectedName)
      expect(player.hand.cards).toHaveLength(0)
    })
  })

  describe('collectCard', () => {
    const name = 'Player 1'

    it('should add the new card to the hand', () => {
      const card = new Card('A', Suit.CLUBS, 11)
      const player = new Player(name)

      player.collectCard(card)

      expect(player.hand.cards).toEqual([card])
    })
  })
})
