import HouseService from "./houseService.js";

//Private
let _hs = new HouseService()

function draw() {
  let houses = _hs.Houses
  let template = ''
  houses.forEach(house => {
    template += house.getHouseTemplate()
  });
  document.querySelector('#content-cards').innerHTML = template
  //draw form
  document.querySelector('#forms').innerHTML = `
        <form onsubmit="app.controllers.houseController.addHouse(event)">
          <input required type="number" class="house-form" name="year" placeholder="  Year...">
          <input required type="number" class="house-form" name="bedroom" placeholder="  Bedroom...">
          <input required type="number" class="house-form" name="bathroom" placeholder="  Bathroom...">
          <input required type="number" class="house-form" name="price" placeholder="  Price...">
          <input required type="url" class="house-form" name="img" placeholder="  Image...">
          <button class="btn-outline-dark house-form shadow-sm" type="submit">Add House</button>
        </form>
  `
}

//Public
export default class HouseController {
  constructor() {
    _hs.addSubscriber('houses', draw)
    _hs.getApiHouses()
  }

  deleteHouse(id) {
    _hs.deleteHouse(id)
  }

  addHouse(event) {
    event.preventDefault()
    let form = event.target
    let newHouse = {
      year: form.year.value,
      bedroom: form.bedroom.value,
      bathroom: form.bathroom.value,
      price: form.price.value,
      imgUrl: form.imgUrl.value
    }
    _hs.addHouse(newHouse)
    form.reset()
  }

}