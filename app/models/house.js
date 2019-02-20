export default class House {
  constructor(data) {
    this._id = data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
  }

  getHouseTemplate() {
    return `
        <div class="card col-3 mx-3 text-center bg-light shadow-sm mt-4">
            <img class="img-fluid" src="${this.imgUrl}">
            <div class="card-body text-left">
                <h5 class="card-title">${this.year}</h5>
                <p class="card-text">${this.bedrooms}</p> 
                <p class="card-text">${this.bathrooms}</p> 
                <p class="card-text">${this.description}</p> 
                <p>${this.price}</p>
                <button class="btn-outline-primary py-1 shadow-sm" id="delete-btn" onclick="app.controllers.houseController.deleteHouse(${this._id})">Delete</button>
                <button class="btn-outline-success py-1 shadow-sm"
                id="view-btn"
                onclick="app.controllers.jobController.viewHouse(${this._id})">View</button>
            </div>
        </div>`
  }
}