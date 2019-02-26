import Job from "../../models/job.js"

//Private
let _myServer = axios.create({
  baseURL: '//localhost:3000/api'
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

  getMyJobs() {
    _myServer.get('jobs')
      .then(res => {
        let data = res.data.data.map(j => new Job(j))
        setState('jobs', data)
      })
  }

  addJob(rawJob) {
    let newJob = new Job(rawJob)
    _myServer.post('jobs', newJob)
      .then(res => {
        this.getMyJobs()
      })
  }

  deleteJob(id) {
    _myServer.delete('jobs/' + id)
      .then(res => {
        this.getMyJobs()
      })
  }

}