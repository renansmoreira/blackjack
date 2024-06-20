import { Hand } from "./hand.js"

class Player {
  name = ''
  hand = new Hand()

  constructor(name) {
    this.name = name
  }

  collectCard(card) {
    this.hand.add(card)
  }

  isBusted() {
    return this.hand.isBusted()
  }

  hasBlackJack() {
    return this.hand.isBlackJack()
  }
}

export { Player }
