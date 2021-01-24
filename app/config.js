module.exports = {
    connection: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT || 3306,
        database: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        debug: process.env.DATABASE_DEBUG ? ['ComQueryPacket'] : false
    },
    pool: {
        min: (process.env.DATABASE_POOL_MIN) ? parseInt(process.env.DATABASE_POOL_MIN) : 2,
        max: (process.env.DATABASE_POOL_MAX) ? parseInt(process.env.DATABASE_POOL_MAX) : 2
    }
}