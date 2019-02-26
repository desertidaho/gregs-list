import House from "../../models/house.js"

//Private
let _myServer = axios.create({
  baseURL: '//localhost:3000/api'
})

let _state = {
  houses: []
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

  getApiHouses() {
    _myServer.get('houses')
      .then(res => {
        let data = res.data.map(h => new House(h))
        setState('houses', data)
      })
  }

  addHouse(house) {
    let newHouse = new House(house)
    _myServer.post('houses', newHouse)
      .then(res => {
        this.getApiHouses()
      })
  }

  deleteHouse(id) {
    _myServer.delete('houses/' + id)
      .then(res => {
        this.getApiHouses()
      })
  }

}