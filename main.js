const car = ['corola', 'camary']
// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/car', async (request, reply) => {
    return car
})

const port = process.env.$PORT || 3000;
const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.1';

// Run the server!
async function start() {
    try {
        await fastify.listen({ port: port, host: host })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()