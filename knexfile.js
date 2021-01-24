var config = require('./app/config');

var dbConfig = {
    client: 'mysql',
    connection: config.connection,
    pool: config.pool,
    migrations: {
        tableName: 'migrations'
    },
    debug: true
};

/**
 * Database settings.
 *
 * Setting the db settings in knexfile allows us to make use of the migrations.
 *
 * @type {Object} Database settings
 */
module.exports = dbConfig;
