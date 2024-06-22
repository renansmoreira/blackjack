import { Card } from "../domain/card"

export const createFacedUpCard = (value, suit) => {
  const card = new Card(value, suit)
  card.turnUp()

  return card
}
