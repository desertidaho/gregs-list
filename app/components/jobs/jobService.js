import Job from "../../models/job.js"

//Private

let _api = axios.create({
  baseURL: 'https://bcw-gregslist.herokuapp.com/api'
})

let _state = {
  jobs: []
}

let _subscribers = {
  jobs: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}


//Public
export default class JobService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get Jobs() {
    return _state.jobs
  }

  getApiJobs() {
    _api.get('jobs')
      .then(res => {
        let data = res.data.data.map(j => new Job(j))
        setState('jobs', data)
      })
  }

  addJob(rawJob) {
    let newJob = new Job(rawJob)
    _api.post('jobs', newJob)
      .then(res => {
        this.getApiJobs()
      })
  }

  deleteJob(id) {
    _api.delete('jobs/' + id)
      .then(res => {
        this.getApiJobs()
      })
  }



}