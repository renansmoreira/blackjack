const pointsMap = new Map([
  ['A', 11],
  ['2', 2],
  ['3', 3],
  ['4', 4],
  ['5', 5],
  ['6', 6],
  ['7', 7],
  ['8', 8],
  ['9', 9],
  ['10', 10],
  ['J', 10],
  ['Q', 10],
  ['K', 10],
  ['A', 11],
])

const calculateCardPoints = (card, currentPoints) => {
  if (!pointsMap.has(card.value)) {
    return 0
  }

  const point = pointsMap.get(card.value)

  if (point === 11 && currentPoints + point > 21) {
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
