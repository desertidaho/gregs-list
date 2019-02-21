import HouseController from "./components/house/houseController.js";
import CarController from "./components/car/carController.js";
import JobController from "./components/jobs/jobController.js";


class App {
  constructor() {
    this.controllers = {
      houseController: new HouseController(),
      carController: new CarController(),
      jobController: new JobController()
    }
  }
}


window['app'] = new App()