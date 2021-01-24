exports.up = function(knex, Promise) {
    return knex.schema.table('family', function(table) {
        table.integer('family_id').unsigned().notNullable()
        table.foreign('user_id', 'id').references("users");      
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('family', function(table) {
        table.integer('family_id');
    });
};
