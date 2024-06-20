import { Card } from './card.js'
import { Suit } from "./suit.js"

class Deck {
  cards = []

  constructor() {
    const cards = [
      new Card('A', Suit.CLUBS, 11),
      new Card('A', Suit.DIAMONDS, 11),
      new Card('A', Suit.HEARTS, 11),
      new Card('A', Suit.SPADES, 11),
    ]

    for (let number = 2; number < 11; number++) {
      cards.push(new Card(number, Suit.CLUBS, number))
      cards.push(new Card(number, Suit.DIAMONDS, number))
      cards.push(new Card(number, Suit.HEARTS, number))
      cards.push(new Card(number, Suit.SPADES, number))
    }

    this.cards = [
      ...cards,

      new Card('J', Suit.CLUBS, 10),
      new Card('J', Suit.DIAMONDS, 10),
      new Card('J', Suit.HEARTS, 10),
      new Card('J', Suit.SPADES, 10),

      new Card('Q', Suit.CLUBS, 10),
      new Card('Q', Suit.DIAMONDS, 10),
      new Card('Q', Suit.HEARTS, 10),
      new Card('Q', Suit.SPADES, 10),

      new Card('K', Suit.CLUBS, 10),
      new Card('K', Suit.DIAMONDS, 10),
      new Card('K', Suit.HEARTS, 10),
      new Card('K', Suit.SPADES, 10),
    ]
  }

  draw() {
    return this.cards.shift()
  }
}

export { Deck }