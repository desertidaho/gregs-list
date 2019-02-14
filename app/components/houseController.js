import HouseServices from "./houseServices.js"

//Private
let _hs = new HouseServices

function draw() {
  let houses = _hs.House
  let template = ''
  houses.forEach(house => {
    template += house.getTemplate()
  });
  document.getElementById('house-cards').innerHTML = template
}

//Public
export default class HouseController {
  constructor() {
    _hs.addSubscriber('houses', draw)
    draw()
  }

  deleteHouse(id) {
    _hs.deleteHouse(id)
  }

  viewHouse() {

  }

}