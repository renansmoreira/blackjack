import { jest } from '@jest/globals'
import { Coordinator } from "./coordinator"
import { UI } from './constants'

describe('Coordinator', () => {
  const cardsMock = {
    update: jest.fn()
  }
  const scoreMock = {
    update: jest.fn()
  }
  const stateMock = {
    update: jest.fn()
  }

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('registerControls', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <button id="${UI.ACTIONS_HIT_ID}">Hit</button>
        <button id="${UI.ACTIONS_STAND_ID}">Stand</button>
        <button id="${UI.ACTIONS_RESTART_ID}">Restart</button>
      `
    })

    afterEach(() => {
      document.body.innerHTML = ''
      jest.resetAllMocks()
    })

    it('should register the hit control', () => {
      const coordinator = new Coordinator({})
      coordinator.hit = jest.fn()

      coordinator.registerControls()
      document.getElementById(UI.ACTIONS_HIT_ID).click()

      expect(coordinator.hit).toHaveBeenCalledTimes(1)
    })

    it('should register the stand control', () => {
      const coordinator = new Coordinator({})
      coordinator.stand = jest.fn()

      coordinator.registerControls()
      document.getElementById(UI.ACTIONS_STAND_ID).click()

      expect(coordinator.stand).toHaveBeenCalledTimes(1)
    })

    it('should register the restart control', () => {
      const coordinator = new Coordinator({})
      coordinator.restart = jest.fn()

      coordinator.registerControls()
      document.getElementById(UI.ACTIONS_RESTART_ID).click()

      expect(coordinator.restart).toHaveBeenCalledTimes(1)
    })
  })

  describe('hit', () => {
    const game = { id: 'fake-id' }

    afterEach(() => {
      jest.resetAllMocks()
    })

    it('should call the API with the hit action', async () => {
      const httpClientMock = {
        post: jest.fn().mockResolvedValue(game),
        put: jest.fn().mockResolvedValue(game),
      }
      const coordinator = new Coordinator(httpClientMock)
      coordinator.update = jest.fn()
      await coordinator.start()

      await coordinator.hit()

      expect(httpClientMock.put).toHaveBeenCalledTimes(1)
      expect(httpClientMock.put).toHaveBeenCalledWith(`/hit/${game.id}`)
    })

    it('should update the game', async () => {
      const httpClientStub = {
        post: jest.fn().mockResolvedValue(game),
        put: jest.fn().mockResolvedValue(game),
      }
      const updateMock = jest.fn()
      const coordinator = new Coordinator(httpClientStub)
      coordinator.update = updateMock
      await coordinator.start()

      await coordinator.hit()

      expect(updateMock).toHaveBeenCalledTimes(2)
      expect(updateMock).toHaveBeenNthCalledWith(2, game)
    })
  })

  describe('stand', () => {
    const game = { id: 'fake-id' }

    afterEach(() => {
      jest.resetAllMocks()
    })

    it('should call the API with the stand action', async () => {
      const httpClientMock = {
        post: jest.fn().mockResolvedValue(game),
        put: jest.fn().mockResolvedValue(game),
      }
      const coordinator = new Coordinator(httpClientMock)
      coordinator.update = jest.fn()
      await coordinator.start()

      await coordinator.stand()

      expect(httpClientMock.put).toHaveBeenCalledTimes(1)
      expect(httpClientMock.put).toHaveBeenCalledWith(`/stand/${game.id}`)
    })

    it('should update the game', async () => {
      const httpClientStub = {
        post: jest.fn().mockResolvedValue(game),
        put: jest.fn().mockResolvedValue(game),
      }
      const updateMock = jest.fn()
      const coordinator = new Coordinator(httpClientStub)
      coordinator.update = updateMock
      await coordinator.start()

      await coordinator.stand()

      expect(updateMock).toHaveBeenCalledTimes(2)
      expect(updateMock).toHaveBeenNthCalledWith(2, game)
    })
  })

  describe('restart', () => {
    afterEach(() => {
      jest.resetAllMocks()
    })

    it('should call the start action again', async () => {
      const httpClientStub = {
        post: jest.fn()
      }
      const startMock = jest.fn()
      const coordinator = new Coordinator(httpClientStub)
      coordinator.start = startMock

      await coordinator.restart()

      expect(startMock).toHaveBeenCalledTimes(1)
    })
  })

  describe('start', () => {
    it('should call the API to start the game', async () => {
      const httpClientMock = {
        post: jest.fn()
      }
      const coordinator = coordinatorFactory(httpClientMock, cardsMock, scoreMock, stateMock)

      await coordinator.start()

      expect(httpClientMock.post).toHaveBeenCalledTimes(1)
      expect(httpClientMock.post).toHaveBeenCalledWith('/start')
    })

    it('should update the states', async () => {
      const httpClientStub = {
        post: jest.fn()
      }
      const game = { id: 'fake-game-object' }
      httpClientStub.post.mockReturnValue(game)
      const coordinator = coordinatorFactory(httpClientStub, cardsMock, scoreMock, stateMock)

      await coordinator.start()

      expect(cardsMock.update).toHaveBeenCalledTimes(1)
      expect(cardsMock.update).toHaveBeenCalledWith(game)
      expect(scoreMock.update).toHaveBeenCalledTimes(1)
      expect(scoreMock.update).toHaveBeenCalledWith(game)
      expect(stateMock.update).toHaveBeenCalledTimes(1)
      expect(stateMock.update).toHaveBeenCalledWith(game)
    })
  })

  describe('update', () => {
    it('should update all game states', async () => {
      const httpClientStub = {
        post: jest.fn()
      }
      const game = { id: 'fake-game-object' }
      httpClientStub.post.mockReturnValue(game)
      const coordinator = coordinatorFactory(httpClientStub, cardsMock, scoreMock, stateMock)

      await coordinator.start()

      expect(cardsMock.update).toHaveBeenCalledTimes(1)
      expect(cardsMock.update).toHaveBeenCalledWith(game)
      expect(scoreMock.update).toHaveBeenCalledTimes(1)
      expect(scoreMock.update).toHaveBeenCalledWith(game)
      expect(stateMock.update).toHaveBeenCalledTimes(1)
      expect(stateMock.update).toHaveBeenCalledWith(game)
    })
  })
})

function coordinatorFactory(httpClient, cards, score, state) {
  const coordinator = new Coordinator(httpClient)
  coordinator.cards = cards
  coordinator.score = score
  coordinator.state = state

  return coordinator
}
