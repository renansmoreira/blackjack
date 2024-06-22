import { Face } from "./face.js"

class Card {
  value = ''
  suit = ''
  face = Face.DOWN

  constructor(value, suit) {
    this.value = value
    this.suit = suit
  }

  turnUp() {
    this.face = Face.UP
  }

  isVisible() {
    return this.face === Face.UP
  }
}

export { Card }
