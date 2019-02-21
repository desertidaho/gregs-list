export default class House {
  constructor(data) {
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.levels = data.levels
    this.price = data.price
    this.description = data.description
  }

  getHouseTemplate() {
    return `
        <div class="card col-2 mx-2 bg-light shadow-sm mt-4">
            <img class="card-img-top img-fluid px-0" src="${this.imgUrl}">
            <div class="card-body text-left">
                <h5 class="card-title">Year: ${this.year}</h5>
                <p class="card-text">Bedrooms: ${this.bedrooms}</p> 
                <p class="card-text">Bathrooms: ${this.bathrooms}</p> 
                <p class="card-text">Description: ${this.description}</p> 
                <p class="card-text">Levels: ${this.levels}</p> 
                <p>$${this.price}</p>
                <button class="btn-outline-danger py-1 shadow" id="delete-btn" onclick="app.controllers.houseController.deleteHouse('${this._id}')">Delete</button>
            </div>
        </div>`
  }
}