const {workerData, parentPort} = require('worker_threads')
let str = "sdfghjkkjgfdsdfgkjsdfghjkkjgfdsdfgkjsdfghjkkjgfdsdfgkjsdfghjkkjgfdsdfgkjsdfghjkkjgfdsdfgkj"
parentPort.postMessage({str: workerData})
