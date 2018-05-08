const { EventEmitter } = require('events')
const sharp = require('sharp')

// Event emitter only stops the program from terminating before the async function has been run

const finishEventEmitter = new EventEmitter()
finishEventEmitter.on('finish', () => { process.exit() })

run()

async function run() {
    try {
        console.time('sharp')

        await sharp('./image.svg')
            .resize(192, 192)
            .background({r: 0, g: 0, b: 0, alpha: 0})
            .embed()
            .png()
            .toBuffer()

        console.timeEnd('sharp')
    } catch (err) {
        console.error(err)
    } finally {
        finishEventEmitter.emit('finish')
    }
}