const {Worker} = require('node:worker_threads');

/*
    Executando o mesmo loop do broke_process porém em outra thread 
    o inverval não é afetado
*/

function createThread(){

    const worker = new Worker('./thread_process');
    const result = new Promise((resolve, reject) => {
        worker.once('message', (message) => {
            return resolve(message)
        });

        worker.once('error', reject);
    });

    worker.postMessage(null)

    return result;
}

const interval = setInterval(() => { console.log(`Running every second`)})

async function test(interval){
    console.log(await createThread());
    clearInterval(interval)
}

test(interval)