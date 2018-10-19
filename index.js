const { EventEmitter } = require('events')
const sharp = require('sharp')

// Event emitter only stops the program from terminating before the async function has been run

const finishEventEmitter = new EventEmitter()
finishEventEmitter.on('finish', () => { process.exit() })

run()

async function run() {
    try {
        await sharp('./image.svg')
            .resize(512, 512)
            .png()
            .toFile('out.png')
    } catch (err) {
        console.error(err)
    } finally {
        finishEventEmitter.emit('finish')
    }
}