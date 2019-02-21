export default class Car {
  constructor(data) {
    this._id = data._id
    this.make = data.make
    this.model = data.model
    this.price = parseInt(data.price).toFixed(2)
    this.year = data.year
    this.imgUrl = data.imgUrl
    this.description = data.description || 'No Description Provided'
  }

  getTemplate() {
    return `
        <div class="card col-2 mx-2 bg-light shadow-sm mt-4">
            <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${this.year} ${this.make} - ${this.model}</h5>
                <p class="card-text">${this.description} -- $${this.price}</p>
                <button class="btn-outline-success py-1 shadow mr-3" onclick="app.controllers.carController.bid('${this._id}')">BID</button>
                <button class="btn-outline-danger py-1 shadow" onclick="app.controllers.carController.deleteCar('${this._id}')">Remove</button>
            </div>
        </div>`
  }
}