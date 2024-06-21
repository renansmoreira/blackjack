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
          point: 11,
          suit: "CLUBS",
          value: "A",
        },
        {
          face: "DOWN",
          point: 11,
          suit: "DIAMONDS",
          value: "A",
        },
        {
          face: "DOWN",
          point: 11,
          suit: "HEARTS",
          value: "A",
        },
        {
          face: "DOWN",
          point: 11,
          suit: "SPADES",
          value: "A",
        },
        {
          face: "DOWN",
          point: 2,
          suit: "CLUBS",
          value: "2",
        },
        {
          face: "DOWN",
          point: 2,
          suit: "DIAMONDS",
          value: "2",
        },
        {
          face: "DOWN",
          point: 2,
          suit: "HEARTS",
          value: "2",
        },
        {
          face: "DOWN",
          point: 2,
          suit: "SPADES",
          value: "2",
        },
        {
          face: "DOWN",
          point: 3,
          suit: "CLUBS",
          value: "3",
        },
        {
          face: "DOWN",
          point: 3,
          suit: "DIAMONDS",
          value: "3",
        },
        {
          face: "DOWN",
          point: 3,
          suit: "HEARTS",
          value: "3",
        },
        {
          face: "DOWN",
          point: 3,
          suit: "SPADES",
          value: "3",
        },
        {
          face: "DOWN",
          point: 4,
          suit: "CLUBS",
          value: "4",
        },
        {
          face: "DOWN",
          point: 4,
          suit: "DIAMONDS",
          value: "4",
        },
        {
          face: "DOWN",
          point: 4,
          suit: "HEARTS",
          value: "4",
        },
        {
          face: "DOWN",
          point: 4,
          suit: "SPADES",
          value: "4",
        },
        {
          face: "DOWN",
          point: 5,
          suit: "CLUBS",
          value: "5",
        },
        {
          face: "DOWN",
          point: 5,
          suit: "DIAMONDS",
          value: "5",
        },
        {
          face: "DOWN",
          point: 5,
          suit: "HEARTS",
          value: "5",
        },
        {
          face: "DOWN",
          point: 5,
          suit: "SPADES",
          value: "5",
        },
        {
          face: "DOWN",
          point: 6,
          suit: "CLUBS",
          value: "6",
        },
        {
          face: "DOWN",
          point: 6,
          suit: "DIAMONDS",
          value: "6",
        },
        {
          face: "DOWN",
          point: 6,
          suit: "HEARTS",
          value: "6",
        },
        {
          face: "DOWN",
          point: 6,
          suit: "SPADES",
          value: "6",
        },
        {
          face: "DOWN",
          point: 7,
          suit: "CLUBS",
          value: "7",
        },
        {
          face: "DOWN",
          point: 7,
          suit: "DIAMONDS",
          value: "7",
        },
        {
          face: "DOWN",
          point: 7,
          suit: "HEARTS",
          value: "7",
        },
        {
          face: "DOWN",
          point: 7,
          suit: "SPADES",
          value: "7",
        },
        {
          face: "DOWN",
          point: 8,
          suit: "CLUBS",
          value: "8",
        },
        {
          face: "DOWN",
          point: 8,
          suit: "DIAMONDS",
          value: "8",
        },
        {
          face: "DOWN",
          point: 8,
          suit: "HEARTS",
          value: "8",
        },
        {
          face: "DOWN",
          point: 8,
          suit: "SPADES",
          value: "8",
        },
        {
          face: "DOWN",
          point: 9,
          suit: "CLUBS",
          value: "9",
        },
        {
          face: "DOWN",
          point: 9,
          suit: "DIAMONDS",
          value: "9",
        },
        {
          face: "DOWN",
          point: 9,
          suit: "HEARTS",
          value: "9",
        },
        {
          face: "DOWN",
          point: 9,
          suit: "SPADES",
          value: "9",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "CLUBS",
          value: "10",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "DIAMONDS",
          value: "10",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "HEARTS",
          value: "10",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "SPADES",
          value: "10",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "CLUBS",
          value: "J",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "DIAMONDS",
          value: "J",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "HEARTS",
          value: "J",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "SPADES",
          value: "J",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "CLUBS",
          value: "Q",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "DIAMONDS",
          value: "Q",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "HEARTS",
          value: "Q",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "SPADES",
          value: "Q",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "CLUBS",
          value: "K",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "DIAMONDS",
          value: "K",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "HEARTS",
          value: "K",
        },
        {
          face: "DOWN",
          point: 10,
          suit: "SPADES",
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
