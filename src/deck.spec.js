import { Suit } from "./suit.js"
import { Deck } from "./deck.js"

describe('Deck', () => {
  describe('when creating', () => {
    it('should add all the cards', () => {
      const deck = new Deck()

      expect(deck.cards).toHaveLength(52)
      expect(deck.cards).toEqual([
        {
          "point": 11,
          "suit": Suit.CLUBS,
          "value": "A",
        },
        {
          "point": 11,
          "suit": Suit.DIAMONDS,
          "value": "A",
        },
        {
          "point": 11,
          "suit": Suit.HEARTS,
          "value": "A",
        },
        {
          "point": 11,
          "suit": Suit.SPADES,
          "value": "A",
        },
        {
          "point": 2,
          "suit": Suit.CLUBS,
          "value": 2,
        },
        {
          "point": 2,
          "suit": Suit.DIAMONDS,
          "value": 2,
        },
        {
          "point": 2,
          "suit": Suit.HEARTS,
          "value": 2,
        },
        {
          "point": 2,
          "suit": Suit.SPADES,
          "value": 2,
        },
        {
          "point": 3,
          "suit": Suit.CLUBS,
          "value": 3,
        },
        {
          "point": 3,
          "suit": Suit.DIAMONDS,
          "value": 3,
        },
        {
          "point": 3,
          "suit": Suit.HEARTS,
          "value": 3,
        },
        {
          "point": 3,
          "suit": Suit.SPADES,
          "value": 3,
        },
        {
          "point": 4,
          "suit": Suit.CLUBS,
          "value": 4,
        },
        {
          "point": 4,
          "suit": Suit.DIAMONDS,
          "value": 4,
        },
        {
          "point": 4,
          "suit": Suit.HEARTS,
          "value": 4,
        },
        {
          "point": 4,
          "suit": Suit.SPADES,
          "value": 4,
        },
        {
          "point": 5,
          "suit": Suit.CLUBS,
          "value": 5,
        },
        {
          "point": 5,
          "suit": Suit.DIAMONDS,
          "value": 5,
        },
        {
          "point": 5,
          "suit": Suit.HEARTS,
          "value": 5,
        },
        {
          "point": 5,
          "suit": Suit.SPADES,
          "value": 5,
        },
        {
          "point": 6,
          "suit": Suit.CLUBS,
          "value": 6,
        },
        {
          "point": 6,
          "suit": Suit.DIAMONDS,
          "value": 6,
        },
        {
          "point": 6,
          "suit": Suit.HEARTS,
          "value": 6,
        },
        {
          "point": 6,
          "suit": Suit.SPADES,
          "value": 6,
        },
        {
          "point": 7,
          "suit": Suit.CLUBS,
          "value": 7,
        },
        {
          "point": 7,
          "suit": Suit.DIAMONDS,
          "value": 7,
        },
        {
          "point": 7,
          "suit": Suit.HEARTS,
          "value": 7,
        },
        {
          "point": 7,
          "suit": Suit.SPADES,
          "value": 7,
        },
        {
          "point": 8,
          "suit": Suit.CLUBS,
          "value": 8,
        },
        {
          "point": 8,
          "suit": Suit.DIAMONDS,
          "value": 8,
        },
        {
          "point": 8,
          "suit": Suit.HEARTS,
          "value": 8,
        },
        {
          "point": 8,
          "suit": Suit.SPADES,
          "value": 8,
        },
        {
          "point": 9,
          "suit": Suit.CLUBS,
          "value": 9,
        },
        {
          "point": 9,
          "suit": Suit.DIAMONDS,
          "value": 9,
        },
        {
          "point": 9,
          "suit": Suit.HEARTS,
          "value": 9,
        },
        {
          "point": 9,
          "suit": Suit.SPADES,
          "value": 9,
        },
        {
          "point": 10,
          "suit": Suit.CLUBS,
          "value": 10,
        },
        {
          "point": 10,
          "suit": Suit.DIAMONDS,
          "value": 10,
        },
        {
          "point": 10,
          "suit": Suit.HEARTS,
          "value": 10,
        },
        {
          "point": 10,
          "suit": Suit.SPADES,
          "value": 10,
        },
        {
          "point": 10,
          "suit": Suit.CLUBS,
          "value": "J",
        },
        {
          "point": 10,
          "suit": Suit.DIAMONDS,
          "value": "J",
        },
        {
          "point": 10,
          "suit": Suit.HEARTS,
          "value": "J",
        },
        {
          "point": 10,
          "suit": Suit.SPADES,
          "value": "J",
        },
        {
          "point": 10,
          "suit": Suit.CLUBS,
          "value": "Q",
        },
        {
          "point": 10,
          "suit": Suit.DIAMONDS,
          "value": "Q",
        },
        {
          "point": 10,
          "suit": Suit.HEARTS,
          "value": "Q",
        },
        {
          "point": 10,
          "suit": Suit.SPADES,
          "value": "Q",
        },
        {
          "point": 10,
          "suit": Suit.CLUBS,
          "value": "K",
        },
        {
          "point": 10,
          "suit": Suit.DIAMONDS,
          "value": "K",
        },
        {
          "point": 10,
          "suit": Suit.HEARTS,
          "value": "K",
        },
        {
          "point": 10,
          "suit": Suit.SPADES,
          "value": "K",
        },
      ])
    })
  })

  describe('draw', () => {
    it('should draw a single card', () => {
      const deck = new Deck()

      const card = deck.draw()

      expect(card).toEqual({
        "point": 11,
        "suit": "CLUBS",
        "value": "A",
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
