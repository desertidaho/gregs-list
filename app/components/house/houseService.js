import House from "../../models/house.js"

//Private

let _api = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api'
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
    _api.get('houses')
      .then(res => {
        let data = res.data.data.map(h => new House(h))
        setState('houses', data)
      })
  }

  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _api.post('houses', newHouse)
      .then(res => {
        this.getApiHouses()
      })
  }

  deleteHouse(id) {
    _api.delete('houses/' + id)
      .then(res => {
        this.getApiHouses()
      })
  }



}