import House from "../models/house.js"

//Private
let _state = {
  houses: [
    new House({
      title: 'California Dream',
      location: 'San Diego',
      description: 'The perfect home in the perfect US city.',
      price: 650000,
      img: '<i class="fas fa-laptop img-fluid fa-5x mt-3"></i>'
    }),
    new House({
      title: 'Idaho Dream',
      location: 'Boise',
      description: 'The perfect home in the perfect US city.',
      price: 350000,
      img: '<i class="fas fa-laptop img-fluid fa-5x mt-3"></i>'
    }),
    new House({
      title: 'Nevada Dream',
      location: 'Las Vegas',
      description: 'The perfect home in the perfect US city.',
      price: 450000,
      img: '<i class="fas fa-laptop img-fluid fa-5x mt-3"></i>'
    })
  ]
}

let _subscribers = {
  houses: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}


//Public
export default class HouseService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get Houses() {
    return _state.houses
  }

  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _state.houses.push(newHouse)
    setState('houses', _state.houses)
  }

  deleteHouse(id) {
    for (let i = 0; i < _state.houses.length; i++) {
      let house = _state.houses[i];
      if (house.id == id) {
        _state.houses.splice(i, 1)
        break;
      }
    }
    setState('houses', _state.houses)
  }



}