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
}

export { Hand }
