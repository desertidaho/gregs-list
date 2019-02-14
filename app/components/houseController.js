import HouseService from "./houseService.js"

//Private
let _hs = new HouseService

function draw() {
  console.log('bingo')
  let houses = _hs.Houses
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

  addHouse(event) {
    event.preventDefault()
    let form = event.target
    let newHouse = {
      title: form.title.value,
      location: form.location.value,
      description: form.description.value,
      price: form.price.value,
      img: form.img.value
    }
    _hs.addHouse(newHouse)
    form.reset()
  }

}