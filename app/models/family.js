'use strict';

require('../models/tag')
require('../models/user')

const bookshelf = require('../bookshelf');

let Family = bookshelf.Model.extend({
    tableName: 'family',
    hasTimestamps: true,
    tag() {
        return this.belongsTo('Tags');
    },
    user() {
        return this.belongsTo('Users');
    },
})


module.exports = bookshelf.model('Family', Family);