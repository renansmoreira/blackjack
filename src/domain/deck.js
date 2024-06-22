import { Card } from './card.js'
import { CardValue } from './cardValue.js'
import { Suit } from "./suit.js"

const numberToCardValue = new Map([
  [2, CardValue.TWO],
  [3, CardValue.THREE],
  [4, CardValue.FOUR],
  [5, CardValue.FIVE],
  [6, CardValue.SIX],
  [7, CardValue.SEVEN],
  [8, CardValue.EIGHT],
  [9, CardValue.NINE],
  [10, CardValue.TEN],
])

const createForAllSuits = (value) => {
  return [
    new Card(value, Suit.CLUBS),
    new Card(value, Suit.DIAMONDS),
    new Card(value, Suit.HEARTS),
    new Card(value, Suit.SPADES),
  ]
}

class Deck {
  cards = []

  constructor(shuffleStrategy) {
    let numberCards = []

    for (let number = 2; number < 11; number++) {
      const value = numberToCardValue.get(number)
      numberCards.push(...createForAllSuits(value))
    }

    this.cards = [
      ...createForAllSuits(CardValue.A),
      ...numberCards,
      ...createForAllSuits(CardValue.J),
      ...createForAllSuits(CardValue.Q),
      ...createForAllSuits(CardValue.K),
    ]

    if (shuffleStrategy) {
      this.cards = shuffleStrategy.shuffle(this.cards)
    }
  }

  draw() {
    return this.cards.shift()
  }

  isExhausted() {
    return this.cards.length === 0
  }
}

export { Deck }
