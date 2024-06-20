class Player {
  name = ''
  hand = []

  constructor(name) {
    this.name = name
  }

  collectCard(card) {
    this.hand.push(card)
  }
}

export { Player }