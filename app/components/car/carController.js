import CarService from "./carServices.js";

//Private
let _cs = new CarService()

function draw() {
  let cars = _cs.Cars
  let template = ''
  cars.forEach(car => {
    template += car.getTemplate()
  });
  document.querySelector('#content-cards').innerHTML = template
  document.querySelector('#forms').innerHTML = `            
    <form onsubmit="app.controllers.carController.addCar(event)">
        <input type="text" name="make" placeholder="Make" required>
        <input type="text" name="model" placeholder="Model" required>
        <input type="decimal" name="year" placeholder="Year" required>
        <input type="text" name="description" placeholder="Description">
        <input type="number" name="price" placeholder="Price" required>
        <input type="url" name="imgUrl" placeholder="Image" required>
        <button class="btn-outline-dark shadow" type="submit">Submit</button>
    </form>`
}

//Public
export default class CarController {
  constructor() {
    _cs.addSubscriber('cars', draw)

  }

  //IN ANY FORM SUBMISSION DO NOT FORGET TO PREVENT THE DEFAULT ACTION
  addCar(event) {
    event.preventDefault();
    let form = event.target
    let newCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    _cs.addCar(newCar)
    //Clears the form
    form.reset()

  }
  deleteCar(id) {
    _cs.deleteCar(id)
  }
  bid(id) {
    _cs.bid(id)
  }

  getCars() {
    _cs.getMyCars()
  }

}