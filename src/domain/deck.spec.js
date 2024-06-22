import { Suit } from "./suit.js"
import { Deck } from "./deck.js"
import { Face } from "./face.js"

describe('Deck', () => {
  describe('when creating', () => {
    it('should add all the cards', () => {
      const deck = new Deck()

      expect(deck.cards).toHaveLength(52)
      expect(deck.cards).toEqual([
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "A",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "A",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "A",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "A",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "2",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "2",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "2",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "2",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "3",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "3",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "3",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "3",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "4",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "4",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "4",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "4",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "5",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "5",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "5",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "5",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "6",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "6",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "6",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "6",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "7",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "7",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "7",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "7",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "8",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "8",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "8",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "8",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "9",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "9",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "9",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "9",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "10",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "10",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "10",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "10",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "J",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "J",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "J",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "J",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "Q",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "Q",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "Q",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "Q",
        },
        {
          face: "DOWN",
          suit: Suit.CLUBS,
          value: "K",
        },
        {
          face: "DOWN",
          suit: Suit.DIAMONDS,
          value: "K",
        },
        {
          face: "DOWN",
          suit: Suit.HEARTS,
          value: "K",
        },
        {
          face: "DOWN",
          suit: Suit.SPADES,
          value: "K",
        },
      ])
    })
  })

  describe('draw', () => {
    it('should draw a single card', () => {
      const deck = new Deck()

      const card = deck.draw()

      expect(card).toEqual({
        suit: "CLUBS",
        value: "A",
        face: Face.DOWN,
      })
    })

    it('should remove the card from the deck', () => {
      const deck = new Deck()
      deck.draw()

      deck.draw()

      expect(deck.cards).toHaveLength(50)
      // TODO: Check for the specific card in the deck
    })
  })
})
