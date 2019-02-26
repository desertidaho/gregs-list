import Car from "../../models/car.js";
//PRIVATE

let _myServer = axios.create({
  baseURL: '//localhost:3000/api'
})

let _state = {
  cars: []
}

let _subscribers = {
  cars: []
}

function setState(prop, data) {
  _state[prop] = data
  _subscribers[prop].forEach(fn => fn());
}


//PUBLIC
export default class CarService {

  addSubscriber(prop, fn) {
    _subscribers[prop].push(fn)
  }

  get Cars() {
    return _state.cars.map(c => new Car(c))
  }

  //Initialize or Get all Current Cars
  getMyCars() {
    _myServer.get('cars')
      .then(res => {
        let carData = res.data.map(c => new Car(c))
        setState('cars', carData)
      })
  }

  addCar(rawCar) {
    let newCar = new Car(rawCar)
    _myServer.post('cars', newCar)
      .then(res => {
        this.getMyCars()
      })
  }

  deleteCar(id) {
    _myServer.delete('cars/' + id)
      .then(res => {
        this.getMyCars()
      })
  }

  bid(carToFindId) {
    let car = _state.cars.find(c => c._id == carToFindId)
    car.price = parseInt(car.price)
    car.price++
    _myServer.put('cars/' + car._id, car)
      .then(res => {
        this.getMyCars()
      })
  }

}