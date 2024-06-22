import { UI } from "../constants.js"
import { ErrorMessage } from "./errorMessage.js"

describe('Error', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="${UI.ACTIONS_HIT_ID}">Hit</button>
      <button id="${UI.ACTIONS_STAND_ID}">Stand</button>
      <div id="${UI.ERROR_CONTAINER_ID}"></div>
    `
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should display the error and disable the controls', () => {
    const errorMessage = new ErrorMessage()

    errorMessage.display()

    const container = document.getElementById(UI.ERROR_CONTAINER_ID)
    const hitButton = document.getElementById(UI.ACTIONS_HIT_ID)
    const standButton = document.getElementById(UI.ACTIONS_STAND_ID)
    expect(container.style.display).toEqual('block')
    expect(hitButton.disabled).toBeTruthy()
    expect(standButton.disabled).toBeTruthy()
  })

  it('should hide the error', () => {
    const errorMessage = new ErrorMessage()
    errorMessage.display()

    errorMessage.hide()

    const container = document.getElementById(UI.ERROR_CONTAINER_ID)
    const hitButton = document.getElementById(UI.ACTIONS_HIT_ID)
    const standButton = document.getElementById(UI.ACTIONS_STAND_ID)
    expect(container.style.display).toEqual('none')
    expect(hitButton.disabled).toBeFalsy()
    expect(standButton.disabled).toBeFalsy()
  })
})
