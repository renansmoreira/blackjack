import { Suit } from "./suit.js"
import { Card } from "./card.js"
import { Face } from "./face.js"

describe('Card', () => {
  describe('when creating', () => {
    it('should have all necessary attributes', () => {
      const expectedValue = '7'
      const expectedSuit = Suit.CLUBS
      const expectedPoints = 7

      const card = new Card(expectedValue, expectedSuit, expectedPoints)

      expect(card.value).toEqual(expectedValue)
      expect(card.suit).toEqual(expectedSuit)
      expect(card.point).toEqual(expectedPoints)
      expect(card.face).toEqual(Face.DOWN)
    })
  })

  describe('turnUp', () => {
    it('should turn the card up', () => {
      const card = new Card('A', Suit.CLUBS, 11)

      card.turnUp()

      expect(card.face).toEqual(Face.UP)
    })
  })

  describe('isVisible', () => {
    let card;

    beforeEach(() => {
      card = new Card('K', Suit.SPADES, 10)
    })

    it('should check that the card if turned up', () => {
      card.turnUp()

      const result = card.isVisible()

      expect(result).toBeTruthy()
    })

    it('should check that the card if turned down', () => {
      const result = card.isVisible()

      expect(result).toBeFalsy()
    })
  })
})
