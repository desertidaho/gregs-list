import House from "../models/house.js"

//Private
let _state = {
  houses: [
    new House({
      title: 'California Dream',
      location: 'San Diego',
      description: 'The perfect home in the perfect US city.',
      price: 650000,
      img: 'assets/img/san-diego.jpg'
    }),
    new House({
      title: 'Idaho Dream',
      location: 'Boise',
      description: 'The perfect home in the perfect US city.',
      price: 350000,
      img: 'assets/img/boise.jpg'
    }),
    new House({
      title: 'Nevada Dream',
      location: 'Las Vegas',
      description: 'The perfect home in the perfect US city.',
      price: 450000,
      img: 'assets/img/las-vegas.jpg'
    }),
  ]
}

let _subscribers = {
  houses: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn())
}


//Public
export default class HouseServices {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get House() {
    return _state.houses
  }

  deleteHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _state.houses.push(newHouse)
    setState('houses', _state.houses)
  }

  viewHouse(id) {

    setState('houses', _state.houses)
  }

}