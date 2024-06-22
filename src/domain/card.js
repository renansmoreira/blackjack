import { Face } from "./face.js"

class Card {
  value = ''
  suit = ''
  // TODO: Remove this attribute, it should not be part of card responsibility
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

  isVisible() {
    return this.face === Face.UP
  }
}

export { Card }
