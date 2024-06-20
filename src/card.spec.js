import { Suit } from "./suit.js"
import { Card } from "./card.js"

describe('Card', () => {
  describe('when creating', () => {
    it('should have all necessary attributes', () => {
      const expectedValue = 7
      const expectedSuit = Suit.CLUBS
      const expectedPoints = 7

      const card = new Card(expectedValue, expectedSuit, expectedPoints)

      expect(card.value).toEqual(expectedValue)
      expect(card.suit).toEqual(expectedSuit)
      expect(card.point).toEqual(expectedPoints)
    })
  })
})