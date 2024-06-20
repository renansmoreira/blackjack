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
}

export { Player }
