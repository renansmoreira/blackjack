import { Deck } from "./deck.js"
import { Dealer } from "./dealer.js"
import { Player } from "./player.js"
import { Face } from "./face.js"
import { Card } from "./card.js"
import { Suit } from "./suit.js"
import { RoundResult } from "./roundResult.js"
import { CardValue } from "./cardValue.js"

describe('Dealer', () => {
  describe('when constructing', () => {
    it('should create with the necessary info', () => {
      const expectedDeck = new Deck()

      const dealer = new Dealer(expectedDeck)

      expect(dealer.deck).toEqual(expectedDeck)
      expect(dealer.hand.cards).toHaveLength(0)
    })
  })

  describe('startGame', () => {
    let deck;
    let player;

    beforeEach(() => {
      deck = new Deck()
      player = new Player()
    })

    it('should deal two cards to the player', () => {
      const expectedResult = RoundResult.CONTINUE
      const dealer = new Dealer(deck)

      const result = dealer.startGame(player)

      expect(player.hand.cards).toHaveLength(2)
      expect(player.hand.cards[0].face).toEqual(Face.UP)
      expect(player.hand.cards[1].face).toEqual(Face.UP)
      expect(result).toEqual(expectedResult)
    })

    it('should deal two card to himself', () => {
      const expectedResult = RoundResult.CONTINUE
      const dealer = new Dealer(deck)

      const result = dealer.startGame(player)

      expect(dealer.hand.cards).toHaveLength(2)
      expect(dealer.hand.cards[0].face).toEqual(Face.UP)
      expect(result).toEqual(expectedResult)
    })

    it('should keep one of the dealer cards faced down (the hold)', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(dealer.hand.cards[1].face).toEqual(Face.DOWN)
    })

    it('should check for player blackjack', () => {
      const expectedResult = RoundResult.PLAYER_WINS
      deck.cards = [
        new Card(CardValue.TEN, Suit.CLUBS),
        new Card(CardValue.A, Suit.HEARTS),
        new Card(CardValue.TWO, Suit.SPADES),
        new Card(CardValue.TWO, Suit.DIAMONDS),
      ]
      const dealer = new Dealer(deck)

      const result = dealer.startGame(player)

      expect(result).toEqual(expectedResult)
    })
  })

  describe('hit', () => {
    let deck
    let player

    beforeEach(() => {
      deck = new Deck()
      player = new Player('Player 1')
    })

    it('should hit for the player', () => {
      const deck = new Deck()
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      dealer.hit(player)

      expect(player.hand.cards).toHaveLength(3)
    })

    it('should continue if the player has not a blackjack and is not busted', () => {
      deck.cards = [
        new Card(CardValue.FIVE, Suit.CLUBS),
        new Card(CardValue.FIVE, Suit.HEARTS),
        new Card(CardValue.TWO, Suit.SPADES),
        new Card(CardValue.TWO, Suit.DIAMONDS),
        new Card(CardValue.TEN, Suit.SPADES),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.hit(player)

      expect(result).toEqual(RoundResult.CONTINUE)
    })

    it('should check if the player is busted', () => {
      deck.cards = [
        new Card(CardValue.TEN, Suit.CLUBS),
        new Card(CardValue.TEN, Suit.HEARTS),
        new Card(CardValue.TWO, Suit.SPADES),
        new Card(CardValue.TWO, Suit.DIAMONDS),
        new Card(CardValue.TEN, Suit.SPADES),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.hit(player)

      expect(result).toEqual(RoundResult.DEALER_WINS)
    })

    it('should check if the player has a blackjack', () => {
      deck.cards = [
        new Card(CardValue.TEN, Suit.CLUBS),
        new Card(CardValue.EIGHT, Suit.HEARTS),
        new Card(CardValue.TWO, Suit.SPADES),
        new Card(CardValue.TWO, Suit.DIAMONDS),
        new Card(CardValue.THREE, Suit.SPADES),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.hit(player)

      expect(result).toEqual(RoundResult.PLAYER_WINS)
    })

    it('should allow the player to hit if the game needs to continue', () => {
      deck.cards = [
        new Card(CardValue.FIVE, Suit.CLUBS),
        new Card(CardValue.FIVE, Suit.HEARTS),
        new Card(CardValue.TWO, Suit.SPADES),
        new Card(CardValue.TWO, Suit.DIAMONDS),
        new Card(CardValue.THREE, Suit.SPADES),
        new Card(CardValue.THREE, Suit.HEARTS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)
      dealer.hit(player)

      const result = dealer.hit(player)

      expect(player.hand.cards).toHaveLength(4)
      expect(result).toEqual(RoundResult.CONTINUE)
    })

    it('should declare dealer victory if the deck is empty', () => {
      deck.cards = [
        new Card(CardValue.TWO, Suit.CLUBS),
        new Card(CardValue.TWO, Suit.HEARTS),
        new Card(CardValue.FIVE, Suit.SPADES),
        new Card(CardValue.FIVE, Suit.DIAMONDS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.hit(player)

      expect(result).toEqual(RoundResult.DEALER_WINS)
    })

    it('should declare player victory if the deck is empty', () => {
      deck.cards = [
        new Card(CardValue.FIVE, Suit.CLUBS),
        new Card(CardValue.FIVE, Suit.HEARTS),
        new Card(CardValue.TWO, Suit.SPADES),
        new Card(CardValue.TWO, Suit.DIAMONDS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.hit(player)

      expect(result).toEqual(RoundResult.PLAYER_WINS)
    })
  })

  describe('stand', () => {
    let deck
    let player

    beforeEach(() => {
      deck = new Deck()
      player = new Player('Player 1')
    })

    it('should reveal the dealer\'s hold', () => {
      const dealer = new Dealer(deck)
      dealer.startGame(player)
      dealer.hit(player)

      dealer.stand(player)

      expect(dealer.hand.cards[1].face).toEqual(Face.UP)
    })

    it('should draw more cards for the dealer', () => {
      deck.cards = [
        new Card(CardValue.FIVE, Suit.CLUBS),
        new Card(CardValue.FIVE, Suit.HEARTS),
        new Card(CardValue.TEN, Suit.SPADES),
        new Card(CardValue.TWO, Suit.DIAMONDS),
        new Card(CardValue.FOUR, Suit.SPADES),
        new Card(CardValue.FIVE, Suit.HEARTS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      dealer.stand(player)

      expect(dealer.hand.cards).toHaveLength(4)
    })

    it('should not draw more cards for the dealer', () => {
      deck.cards = [
        new Card(CardValue.FIVE, Suit.CLUBS),
        new Card(CardValue.FIVE, Suit.HEARTS),
        new Card(CardValue.TEN, Suit.SPADES),
        new Card(CardValue.EIGHT, Suit.DIAMONDS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      dealer.stand(player)

      expect(dealer.hand.cards).toHaveLength(2)
    })

    it('should not draw more cards for the dealer if the deck is exhausted', () => {
      deck.cards = [
        new Card(CardValue.FIVE, Suit.CLUBS),
        new Card(CardValue.FIVE, Suit.HEARTS),
        new Card(CardValue.TWO, Suit.SPADES),
        new Card(CardValue.THREE, Suit.DIAMONDS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      dealer.stand(player)

      expect(dealer.hand.cards).toHaveLength(2)
    })

    it('should check if the dealer is busted', () => {
      const expectedResult = RoundResult.PLAYER_WINS
      deck.cards = [
        new Card(CardValue.FIVE, Suit.CLUBS),
        new Card(CardValue.FIVE, Suit.HEARTS),
        new Card(CardValue.TEN, Suit.SPADES),
        new Card(CardValue.SIX, Suit.DIAMONDS),
        new Card(CardValue.TEN, Suit.CLUBS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.stand(player)

      expect(result).toEqual(expectedResult)
    })

    it('should check that the player wins the game', () => {
      const expectedResult = RoundResult.PLAYER_WINS
      deck.cards = [
        new Card(CardValue.TEN, Suit.CLUBS),
        new Card(CardValue.TEN, Suit.HEARTS),
        new Card(CardValue.TEN, Suit.SPADES),
        new Card(CardValue.SEVEN, Suit.DIAMONDS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.stand(player)

      expect(result).toEqual(expectedResult)
    })

    it('should check that the dealer wins the game', () => {
      const expectedResult = RoundResult.DEALER_WINS
      deck.cards = [
        new Card(CardValue.TEN, Suit.SPADES),
        new Card(CardValue.SEVEN, Suit.DIAMONDS),
        new Card(CardValue.TEN, Suit.CLUBS),
        new Card(CardValue.TEN, Suit.HEARTS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.stand(player)

      expect(result).toEqual(expectedResult)
    })

    it('should check for draw', () => {
    const expectedResult = RoundResult.DRAW
      deck.cards = [
        new Card(CardValue.SEVEN, Suit.SPADES),
        new Card(CardValue.SEVEN, Suit.DIAMONDS),
        new Card(CardValue.SEVEN, Suit.CLUBS),
        new Card(CardValue.SEVEN, Suit.HEARTS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.stand(player)

      expect(result).toEqual(expectedResult)
    })
  })
})
