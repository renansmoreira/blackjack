import { Deck } from "./deck.js"
import { Dealer } from "./dealer.js"
import { Player } from "./player.js"

describe('Dealer', () => {
  describe('when constructing', () => {
    it('should create with the necessary info', () => {
      const expectedDeck = new Deck()

      const dealer = new Dealer(expectedDeck)

      expect(dealer.deck).toEqual(expectedDeck)
      expect(dealer.hand).toHaveLength(0)
    })
  })

  describe('when starting the game', () => {
    const deck = new Deck()
    const player = new Player()

    it('should deal one card to the player', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(player.hand).toHaveLength(1)
    })

    it('should deal on card to himself', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(dealer.hand).toHaveLength(1)
    })
  })
})
