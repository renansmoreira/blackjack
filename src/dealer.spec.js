import { Deck } from "./deck.js"
import { Dealer } from "./dealer.js"
import { Player } from "./player.js"
import { Face } from "./face.js"

describe('Dealer', () => {
  describe('when constructing', () => {
    it('should create with the necessary info', () => {
      const expectedDeck = new Deck()

      const dealer = new Dealer(expectedDeck)

      expect(dealer.deck).toEqual(expectedDeck)
      expect(dealer.hand.cards).toHaveLength(0)
    })
  })

  describe('startGame', () => {
    const deck = new Deck()
    const player = new Player()

    it('should deal two cards to the player', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(player.hand.cards).toHaveLength(2)
      expect(player.hand.cards[0].face).toEqual(Face.UP)
      expect(player.hand.cards[1].face).toEqual(Face.UP)
    })

    it('should deal two card to himself', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(dealer.hand.cards).toHaveLength(2)
      expect(dealer.hand.cards[0].face).toEqual(Face.UP)
    })

    it('should keep one of the dealer cards faced down (the hold)', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(dealer.hand.cards[1].face).toEqual(Face.DOWN)
    })
  })
})
