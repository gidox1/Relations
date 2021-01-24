'use strict';
require('../models/family')

const bookshelf = require('../bookshelf');

let Tags = bookshelf.Model.extend({
    tableName: 'tags',
    hasTimestamps: true,
    family() {
        return this.hasMany('Family');
    },
})

module.exports = bookshelf.model('Tags', Tags);