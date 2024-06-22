const calculateCardPoints = (card, currentPoints) => {
  if (card.point === 11 && currentPoints + card.point > 21) {
    return 1
  }

  return card.point
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
