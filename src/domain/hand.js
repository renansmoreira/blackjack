class Hand {
  cards = []
  points = 0

  // TODO: Add Ace check for 11 or 1 point
  add(card) {
    this.cards.push(card)

    if (card.isVisible()) {
      this.points += card.point
    }
  }

  revealHold() {
    const card = this.cards[this.cards.length - 1]

    if (!card.isVisible()) {
      card.turnUp()
      this.points += card.point
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
