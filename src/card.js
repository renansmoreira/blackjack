import { Face } from "./face.js"

class Card {
  value = ''
  suit = ''
  point = 0
  face = Face.DOWN

  constructor(value, suit, point) {
    this.value = value
    this.suit = suit
    this.point = point
  }

  turnUp() {
    this.face = Face.UP
  }
}

export { Card }
