'use strict';

let config = require('./config');

let knex = require('knex')({
    client: 'mysql',
    connection: config.connection,
    ssl: true,
    migrations: {
        tableName: 'migrations'
    },
    pool: config.pool
});

module.exports = knex;
