import HouseController from "./components/houseController.js"

class App {
  contstructor() {
    this.controllers = {
      houseController: new HouseController()
      /*
      carController: new CarController()
      jobController: new JobController()
      freeController: new FreeController()
      */
    }
  }
}

// @ts-ignore
window.app = new App()