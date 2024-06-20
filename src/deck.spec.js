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
          "point": 11,
          "suit": Suit.CLUBS,
          "value": "A",
          "face": Face.DOWN,
        },
        {
          "point": 11,
          "suit": Suit.DIAMONDS,
          "face": Face.DOWN,
          "value": "A",
        },
        {
          "point": 11,
          "suit": Suit.HEARTS,
          "value": "A",
          "face": Face.DOWN,
        },
        {
          "point": 11,
          "suit": Suit.SPADES,
          "value": "A",
          "face": Face.DOWN,
        },
        {
          "point": 2,
          "suit": Suit.CLUBS,
          "value": 2,
          "face": Face.DOWN,
        },
        {
          "point": 2,
          "suit": Suit.DIAMONDS,
          "value": 2,
          "face": Face.DOWN,
        },
        {
          "point": 2,
          "suit": Suit.HEARTS,
          "value": 2,
          "face": Face.DOWN,
        },
        {
          "point": 2,
          "suit": Suit.SPADES,
          "value": 2,
          "face": Face.DOWN,
        },
        {
          "point": 3,
          "suit": Suit.CLUBS,
          "value": 3,
          "face": Face.DOWN,
        },
        {
          "point": 3,
          "suit": Suit.DIAMONDS,
          "value": 3,
          "face": Face.DOWN,
        },
        {
          "point": 3,
          "suit": Suit.HEARTS,
          "value": 3,
          "face": Face.DOWN,
        },
        {
          "point": 3,
          "suit": Suit.SPADES,
          "value": 3,
          "face": Face.DOWN,
        },
        {
          "point": 4,
          "suit": Suit.CLUBS,
          "value": 4,
          "face": Face.DOWN,
        },
        {
          "point": 4,
          "suit": Suit.DIAMONDS,
          "value": 4,
          "face": Face.DOWN,
        },
        {
          "point": 4,
          "suit": Suit.HEARTS,
          "value": 4,
          "face": Face.DOWN,
        },
        {
          "point": 4,
          "suit": Suit.SPADES,
          "value": 4,
          "face": Face.DOWN,
        },
        {
          "point": 5,
          "suit": Suit.CLUBS,
          "value": 5,
          "face": Face.DOWN,
        },
        {
          "point": 5,
          "suit": Suit.DIAMONDS,
          "value": 5,
          "face": Face.DOWN,
        },
        {
          "point": 5,
          "suit": Suit.HEARTS,
          "value": 5,
          "face": Face.DOWN,
        },
        {
          "point": 5,
          "suit": Suit.SPADES,
          "value": 5,
          "face": Face.DOWN,
        },
        {
          "point": 6,
          "suit": Suit.CLUBS,
          "value": 6,
          "face": Face.DOWN,
        },
        {
          "point": 6,
          "suit": Suit.DIAMONDS,
          "value": 6,
          "face": Face.DOWN,
        },
        {
          "point": 6,
          "suit": Suit.HEARTS,
          "value": 6,
          "face": Face.DOWN,
        },
        {
          "point": 6,
          "suit": Suit.SPADES,
          "value": 6,
          "face": Face.DOWN,
        },
        {
          "point": 7,
          "suit": Suit.CLUBS,
          "value": 7,
          "face": Face.DOWN,
        },
        {
          "point": 7,
          "suit": Suit.DIAMONDS,
          "value": 7,
          "face": Face.DOWN,
        },
        {
          "point": 7,
          "suit": Suit.HEARTS,
          "value": 7,
          "face": Face.DOWN,
        },
        {
          "point": 7,
          "suit": Suit.SPADES,
          "value": 7,
          "face": Face.DOWN,
        },
        {
          "point": 8,
          "suit": Suit.CLUBS,
          "value": 8,
          "face": Face.DOWN,
        },
        {
          "point": 8,
          "suit": Suit.DIAMONDS,
          "value": 8,
          "face": Face.DOWN,
        },
        {
          "point": 8,
          "suit": Suit.HEARTS,
          "value": 8,
          "face": Face.DOWN,
        },
        {
          "point": 8,
          "suit": Suit.SPADES,
          "value": 8,
          "face": Face.DOWN,
        },
        {
          "point": 9,
          "suit": Suit.CLUBS,
          "value": 9,
          "face": Face.DOWN,
        },
        {
          "point": 9,
          "suit": Suit.DIAMONDS,
          "value": 9,
          "face": Face.DOWN,
        },
        {
          "point": 9,
          "suit": Suit.HEARTS,
          "value": 9,
          "face": Face.DOWN,
        },
        {
          "point": 9,
          "suit": Suit.SPADES,
          "value": 9,
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.CLUBS,
          "value": 10,
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.DIAMONDS,
          "value": 10,
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.HEARTS,
          "value": 10,
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.SPADES,
          "value": 10,
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.CLUBS,
          "value": "J",
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.DIAMONDS,
          "value": "J",
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.HEARTS,
          "value": "J",
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.SPADES,
          "value": "J",
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.CLUBS,
          "value": "Q",
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.DIAMONDS,
          "value": "Q",
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.HEARTS,
          "value": "Q",
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.SPADES,
          "value": "Q",
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.CLUBS,
          "value": "K",
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.DIAMONDS,
          "value": "K",
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.HEARTS,
          "value": "K",
          "face": Face.DOWN,
        },
        {
          "point": 10,
          "suit": Suit.SPADES,
          "value": "K",
          "face": Face.DOWN,
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
        "face": Face.DOWN,
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
