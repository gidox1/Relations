'use strict';

require('../models/family');
const bookshelf = require('../bookshelf');

let Users = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    family() {
        return this.hasMany('Family');
    }
})

module.exports = bookshelf.model('Users', Users);