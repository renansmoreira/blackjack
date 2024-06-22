import { CardValue } from "./cardValue.js"

const pointsMap = new Map([
  [CardValue.A, 11],
  [CardValue.TWO, 2],
  [CardValue.THREE, 3],
  [CardValue.FOUR, 4],
  [CardValue.FIVE, 5],
  [CardValue.SIX, 6],
  [CardValue.SEVEN, 7],
  [CardValue.EIGHT, 8],
  [CardValue.NINE, 9],
  [CardValue.TEN, 10],
  [CardValue.J, 10],
  [CardValue.Q, 10],
  [CardValue.K, 10],
])

const calculateCardPoints = (card, currentPoints) => {
  if (!pointsMap.has(card.value)) {
    return 0
  }

  const point = pointsMap.get(card.value)

  if (card.value === CardValue.A && currentPoints + point > 21) {
    return 1
  }

  return point
}

class Hand {
  cards = []
  points = 0

  // TODO: Add validation to reject the card for busted hands
  add(card) {
    this.cards.push(card)

    if (card.isVisible()) {
      this.points += calculateCardPoints(card, this.points)
    }
  }

  revealHold() {
    const card = this.cards[this.cards.length - 1]

    if (!card.isVisible()) {
      card.turnUp()
      this.points += calculateCardPoints(card, this.points)
    }
  }

  isBusted() {
    return this.points > 21
  }

  isBlackJack() {
    return this.points === 21
  }
}

export { Hand }
