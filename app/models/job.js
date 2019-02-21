export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  getJobTemplate() {
    return `
        <div class="card col-2 mx-2 text-center bg-light shadow-sm mt-4">
            <i class="fas fa-building fa-5x mt-3"></i>
            <div class="card-body text-left">
                <h5 class="card-title">Title: ${this.jobTitle}</h5>
                <p class="card-text">Company: ${this.company}</p> 
                <p class="card-text">Hours: ${this.hours}</p> 
                <p class="card-text">Rate: ${this.rate}</p> 
                <p class="card-text">Description: ${this.description}</p>
                <button class="btn-outline-danger py-1 shadow" id="delete-btn" onclick="app.controllers.jobController.deleteJob('${this._id}')">Delete</button>
            </div>
        </div>`
  }
}