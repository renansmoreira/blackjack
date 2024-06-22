import { Card } from './card.js'
import { Suit } from "./suit.js"

class Deck {
  cards = []

  constructor() {
    const cards = [
      new Card('A', Suit.CLUBS),
      new Card('A', Suit.DIAMONDS),
      new Card('A', Suit.HEARTS),
      new Card('A', Suit.SPADES),
    ]

    for (let number = 2; number < 11; number++) {
      cards.push(new Card(number.toString(), Suit.CLUBS, number))
      cards.push(new Card(number.toString(), Suit.DIAMONDS, number))
      cards.push(new Card(number.toString(), Suit.HEARTS, number))
      cards.push(new Card(number.toString(), Suit.SPADES, number))
    }

    this.cards = [
      ...cards,

      new Card('J', Suit.CLUBS),
      new Card('J', Suit.DIAMONDS),
      new Card('J', Suit.HEARTS),
      new Card('J', Suit.SPADES),

      new Card('Q', Suit.CLUBS),
      new Card('Q', Suit.DIAMONDS),
      new Card('Q', Suit.HEARTS),
      new Card('Q', Suit.SPADES),

      new Card('K', Suit.CLUBS),
      new Card('K', Suit.DIAMONDS),
      new Card('K', Suit.HEARTS),
      new Card('K', Suit.SPADES),
    ]
  }

  draw() {
    return this.cards.shift()
  }
}

export { Deck }
