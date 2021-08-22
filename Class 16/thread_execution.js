const {Worker} = require('worker_threads')

function char_plus_one(){
  return new Promise((res, rej)  => {
    const w = new Worker('.parent.js', {workerData})
    w.on('message', res)
    w.on('error', rej)

  })
}

async function run(){
  console.log(await char_plus_one())
}

run()
// users --> create a user, get all the users