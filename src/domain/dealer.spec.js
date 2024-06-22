import { Deck } from "./deck.js"
import { Dealer } from "./dealer.js"
import { Player } from "./player.js"
import { Face } from "./face.js"
import { Card } from "./card.js"
import { Suit } from "./suit.js"
import { RoundResult } from "./roundResult.js"

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
    const deck = new Deck()
    const player = new Player()

    it('should deal two cards to the player', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(player.hand.cards).toHaveLength(2)
      expect(player.hand.cards[0].face).toEqual(Face.UP)
      expect(player.hand.cards[1].face).toEqual(Face.UP)
    })

    it('should deal two card to himself', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(dealer.hand.cards).toHaveLength(2)
      expect(dealer.hand.cards[0].face).toEqual(Face.UP)
    })

    it('should keep one of the dealer cards faced down (the hold)', () => {
      const dealer = new Dealer(deck)

      dealer.startGame(player)

      expect(dealer.hand.cards[1].face).toEqual(Face.DOWN)
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
        new Card('5', Suit.CLUBS),
        new Card('5', Suit.HEARTS),
        new Card('2', Suit.SPADES),
        new Card('2', Suit.DIAMONDS),
        new Card('10', Suit.SPADES),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.hit(player)

      expect(result).toEqual(RoundResult.CONTINUE)
    })

    it('should check if the player is busted', () => {
      deck.cards = [
        new Card('10', Suit.CLUBS),
        new Card('10', Suit.HEARTS),
        new Card('2', Suit.SPADES),
        new Card('2', Suit.DIAMONDS),
        new Card('10', Suit.SPADES),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.hit(player)

      expect(result).toEqual(RoundResult.DEALER_WINS)
    })

    it('should check if the player has a blackjack', () => {
      deck.cards = [
        new Card('10', Suit.CLUBS),
        new Card('8', Suit.HEARTS),
        new Card('2', Suit.SPADES),
        new Card('2', Suit.DIAMONDS),
        new Card('3', Suit.SPADES),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.hit(player)

      expect(result).toEqual(RoundResult.PLAYER_WINS)
    })

    it('should allow the player to hit if the game needs to continue', () => {
      deck.cards = [
        new Card('5', Suit.CLUBS),
        new Card('5', Suit.HEARTS),
        new Card('2', Suit.SPADES),
        new Card('2', Suit.DIAMONDS),
        new Card('3', Suit.SPADES),
        new Card('3', Suit.HEARTS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)
      dealer.hit(player)

      const result = dealer.hit(player)

      expect(player.hand.cards).toHaveLength(4)
      expect(result).toEqual(RoundResult.CONTINUE)
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
        new Card('5', Suit.CLUBS),
        new Card('5', Suit.HEARTS),
        new Card('10', Suit.SPADES),
        new Card('2', Suit.DIAMONDS),
        new Card('4', Suit.SPADES),
        new Card('5', Suit.HEARTS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      dealer.stand(player)

      expect(dealer.hand.cards).toHaveLength(4)
    })

    it('should not draw more cards for the dealer', () => {
      deck.cards = [
        new Card('5', Suit.CLUBS),
        new Card('5', Suit.HEARTS),
        new Card('10', Suit.SPADES),
        new Card('8', Suit.DIAMONDS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      dealer.stand(player)

      expect(dealer.hand.cards).toHaveLength(2)
    })

    it('should check if the dealer is busted', () => {
      const expectedResult = RoundResult.PLAYER_WINS
      deck.cards = [
        new Card('5', Suit.CLUBS),
        new Card('5', Suit.HEARTS),
        new Card('10', Suit.SPADES),
        new Card('6', Suit.DIAMONDS),
        new Card('10', Suit.CLUBS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.stand(player)

      expect(result).toEqual(expectedResult)
    })

    it('should check that the player wins the game', () => {
      const expectedResult = RoundResult.PLAYER_WINS
      deck.cards = [
        new Card('10', Suit.CLUBS),
        new Card('10', Suit.HEARTS),
        new Card('10', Suit.SPADES),
        new Card('7', Suit.DIAMONDS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.stand(player)

      expect(result).toEqual(expectedResult)
    })

    it('should check that the dealer wins the game', () => {
      const expectedResult = RoundResult.DEALER_WINS
      deck.cards = [
        new Card('10', Suit.SPADES),
        new Card('7', Suit.DIAMONDS),
        new Card('10', Suit.CLUBS),
        new Card('10', Suit.HEARTS),
      ]
      const dealer = new Dealer(deck)
      dealer.startGame(player)

      const result = dealer.stand(player)

      expect(result).toEqual(expectedResult)
    })
  })
})
