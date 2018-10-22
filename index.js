const { EventEmitter } = require('events')
const sharp = require('sharp')

// Event emitter only stops the program from terminating before the async function has been run

const finishEventEmitter = new EventEmitter()
finishEventEmitter.on('finish', () => { process.exit() })

run()

async function run() {
    try {
        await sharp('./image.svg', { density: 300 })
            .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
            .png()
            .toFile('out.png')
    } catch (err) {
        console.error(err)
    } finally {
        finishEventEmitter.emit('finish')
    }
}