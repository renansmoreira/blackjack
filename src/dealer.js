class Dealer {
  deck = {}
  hand = []

  constructor(deck) {
    this.deck = deck
  }

  startGame(player) {
    const playerCard = this.deck.draw()
    player.collectCard(playerCard)

    const card = this.deck.draw()
    this.hand.push(card)
  }
}

export { Dealer }
