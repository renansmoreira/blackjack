import { Card } from "../domain/card"

export const createFacedUpCard = (value, suit, points) => {
  const card = new Card(value, suit, points)
  card.turnUp()

  return card
}
