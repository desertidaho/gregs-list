let id = 1

export default class House {
  constructor(data) {
    this.id = id
    this.title = data.title
    this.location = data.location
    this.description = data.description
    this.price = data.price
    this.img = data.img
    id++
  }

  getTemplate() {
    return `
        <div class="card col-3 mx-3 text-center bg-light shadow-sm mt-4">
             ${this.img}
            <div class="card-body text-left">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.location}</p> 
                <p class="card-text">${this.description}</p> 
                <p>${this.price}</p>
                <button class="btn-outline-primary py-1 shadow-sm" id="delete-btn" onclick="app.controllers.houseController.deleteHouse(${this.id})">Delete</button>
                <button class="btn-outline-success py-1 shadow-sm"
                id="view-btn"
                onclick="app.controllers.jobController.viewHouse(${this.id})">View</button>
            </div>
        </div>`
  }
}