import { UI } from "../constants.js"

class ErrorMessage {
  display() {
    document.getElementById(UI.ERROR_CONTAINER_ID).style.display = 'block'
    document.getElementById(UI.ACTIONS_HIT_ID).disabled = true
    document.getElementById(UI.ACTIONS_STAND_ID).disabled = true
  }

  hide() {
    document.getElementById(UI.ERROR_CONTAINER_ID).style.display = 'none'
    document.getElementById(UI.ACTIONS_HIT_ID).disabled = false
    document.getElementById(UI.ACTIONS_STAND_ID).disabled = false
  }
}

export { ErrorMessage }
