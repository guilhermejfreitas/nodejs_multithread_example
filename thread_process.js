const {threadId, parentPort} = require('node:worker_threads');

parentPort.once('message', (data) => {
    let count = 0;
    for (let i = 0; i < 1e9; i++){ count++ }
    parentPort.postMessage(`Im done, with ${count}. ${threadId} works!`);
});