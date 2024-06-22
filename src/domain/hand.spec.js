import { createFacedUpCard } from "../test-helpers/utils.js"
import { Card } from "./card.js"
import { Face } from "./face.js"
import { Hand } from "./hand.js"
import { Suit } from "./suit.js"

describe('Hand', () => {
  describe('add', () => {
    let card;
    let anotherCard

    beforeEach(() => {
      card = new Card('10', Suit.DIAMONDS)
      anotherCard = new Card('2', Suit.HEARTS)
    })

    it('should add one card', () => {
      const hand = new Hand()

      hand.add(card)

      expect(hand.cards).toEqual([card])
    })

    it('should add multiple cards', () => {
      const hand = new Hand()
      hand.add(card)

      hand.add(anotherCard)

      expect(hand.cards).toEqual([card, anotherCard])
    })

    it('should update the points', () => {
      card.turnUp()
      anotherCard.turnUp()
      const hand = new Hand()
      hand.add(card)

      hand.add(anotherCard)

      expect(hand.points).toEqual(12)
    })

    it('should handle invalid cards', () => {
      const invalidCard = createFacedUpCard('JOKER', Suit.CLUBS)
      card.turnUp()
      const hand = new Hand()
      hand.add(card)

      hand.add(invalidCard)

      expect(hand.points).toEqual(10)
    })

    it('should not update the points for cards faced down', () => {
      card.turnUp()
      const hand = new Hand()
      hand.add(card)

      hand.add(anotherCard)

      expect(hand.points).toEqual(10)
    })

    describe('when scoring for Ace cards', () => {
      it.each`
      expectedPoints | cards
      ${11}          | ${[createFacedUpCard('A', Suit.CLUBS)]}
      ${20}          | ${[createFacedUpCard('9', Suit.CLUBS), createFacedUpCard('A', Suit.HEARTS)]}
      ${24}          | ${[createFacedUpCard('3', Suit.CLUBS), createFacedUpCard('A', Suit.HEARTS), createFacedUpCard('10', Suit.DIAMONDS)]}
      `('should score with maximum value', ({ expectedPoints, cards }) => {
        const hand = new Hand()
        cards.forEach(card => hand.add(card))

        const result = hand.points

        expect(result).toEqual(expectedPoints)
      })

      it.each`
      expectedPoints | cards
      ${12}          | ${[createFacedUpCard('A', Suit.CLUBS), createFacedUpCard('A', Suit.HEARTS)]}
      ${14}          | ${[createFacedUpCard('3', Suit.CLUBS), createFacedUpCard('10', Suit.DIAMONDS), createFacedUpCard('A', Suit.HEARTS)]}
      `('should score with minimum value', ({ expectedPoints, cards }) => {
        const hand = new Hand()
        cards.forEach(card => hand.add(card))

        const result = hand.points

        expect(result).toEqual(expectedPoints)
      })
    })
  })

  describe('revealHold', () => {
    it('should reveal a card faced down', () => {
      const hand = new Hand()
      hand.add(new Card('A', Suit.CLUBS))

      hand.revealHold()

      expect(hand.cards[0].face).toEqual(Face.UP)
    })

    it('should add the card value to the score', () => {
      const hand = new Hand()
      hand.add(createFacedUpCard('2', Suit.DIAMONDS))
      hand.add(new Card('A', Suit.CLUBS))

      hand.revealHold()

      expect(hand.points).toEqual(13)
    })

    it('should not change a card already faced up', () => {
      const hand = new Hand()
      hand.add(createFacedUpCard('2', Suit.DIAMONDS))
      hand.add(new Card('A', Suit.CLUBS))
      hand.revealHold()

      hand.revealHold()

      expect(hand.cards[0].face).toEqual(Face.UP)
    })

    it('should not change the score for a card already faced up', () => {
      const hand = new Hand()
      hand.add(createFacedUpCard('2', Suit.DIAMONDS))
      hand.add(new Card('A', Suit.CLUBS))
      hand.revealHold()

      hand.revealHold()

      expect(hand.points).toEqual(13)
    })
  })

  describe('isBusted', () => {
    it('should check if the hand is busted', () => {
      const hand = new Hand()
      hand.add(createFacedUpCard('10', Suit.CLUBS))
      hand.add(createFacedUpCard('10', Suit.DIAMONDS))
      hand.add(createFacedUpCard('10', Suit.SPADES))

      const result = hand.isBusted()

      expect(result).toBeTruthy()
    })
  })

  describe('isBlackJack', () => {
    it('should check if the hand contains blackjack', () => {
      const hand = new Hand()
      hand.add(createFacedUpCard('A', Suit.CLUBS))
      hand.add(createFacedUpCard('10', Suit.DIAMONDS))

      const result = hand.isBlackJack()

      expect(result).toBeTruthy()
    })
  })
})
