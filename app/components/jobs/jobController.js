import JobService from "./jobService.js";

//Private
let _js = new JobService()

function draw() {
  let jobs = _js.Jobs
  let template = ''
  jobs.forEach(job => {
    template += job.getJobTemplate()
  });
  document.querySelector('#content-cards').innerHTML = template
  //draw form
  document.querySelector('#forms').innerHTML = `
        <form onsubmit="app.controllers.jobController.addJob(event)">
          <input required type="text" class="job-form" name="jobTitle" placeholder="  Job Title...">
          <input required type="text" class="job-form" name="company" placeholder="  Company...">
          <input required type="number" class="job-form" name="hours" placeholder="  Hours...">
          <input required type="number" class="job-form" name="rate" placeholder="  Hourly Rate...">
          <input required type="text" class="job-form" name="description" placeholder="  Description...">
          <button class="btn-outline-dark shadow"" type="submit">Add Job</button>
        </form>
  `
}

//Public
export default class JobController {
  constructor() {
    _js.addSubscriber('jobs', draw)
  }

  deleteJob(id) {
    _js.deleteJob(id)
  }

  addJob(event) {
    event.preventDefault()
    let form = event.target
    let newJob = {
      jobTitle: form.jobTitle.value,
      company: form.company.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value
    }
    _js.addJob(newJob)
    form.reset()
  }

  getJobs() {
    _js.getMyJobs()
  }

}