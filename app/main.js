// @ts-nocheck
import HouseController from "./components/houseController.js"

class App {
  contstructor() {
    this.controllers = {
      houseController: new HouseController()
    }
  }
}


window.app = new App()