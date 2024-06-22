import { UI } from "../constants.js"

const suitImageMap = new Map([
  ['CLUBS', 'clubs.png'],
  ['HEARTS', 'hearts.png'],
  ['DIAMONDS', 'diamonds.png'],
  ['SPADES', 'spades.png'],
])

const suitAltMap = new Map([
  ['CLUBS', 'Clubs suit'],
  ['HEARTS', 'Hearts suit'],
  ['DIAMONDS', 'Diamonds suit'],
  ['SPADES', 'Spades suit'],
])

const drawCard = (card) => {
  const valueText = document.createElement('span')
  valueText.innerText = card.isVisible ? card.value : '?'

  const suitImage = document.createElement('img')
  suitImage.src = card.isVisible ? `/assets/${suitImageMap.get(card.suit)}` : '/assets/question.png'
  suitImage.alt = card.isVisible ? suitAltMap.get(card.suit) : 'Unknown card suit'

  const container = document.createElement('div')
  container.classList.add('card')
  container.appendChild(valueText)
  container.appendChild(suitImage)

  return container
}

class Cards {
  update(game) {
    document.getElementById(UI.DEALER_CARDS_CONTAINER_ID).innerHTML = ''

    for (const card of game.dealer.hand.cards) {
      const newCardElement = drawCard(card)
      document.getElementById(UI.DEALER_CARDS_CONTAINER_ID).appendChild(newCardElement)
    }


    document.getElementById(UI.PLAYER_CARDS_CONTAINER_ID).innerHTML = ''

    for (const card of game.player.hand.cards) {
      const newCardElement = drawCard(card)
      document.getElementById(UI.PLAYER_CARDS_CONTAINER_ID).appendChild(newCardElement)
    }
  }
}

export { Cards }
