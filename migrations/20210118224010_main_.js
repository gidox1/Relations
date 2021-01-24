
exports.up = function(knex) {
    return knex.schema
        .createTableIfNotExists('tags', function(table) {
            table.increments('id').primary();
            table.string('name').notNullable();
        })
        .createTableIfNotExists('users', function(table) {
            table.increments('id').primary();
            table.string('first_name').notNullable();
            table.string('last_name').notNullable();
            table.string('image_url').nullable();
            table.timestamps();
        })
        .createTableIfNotExists('family', function(table) {
            table.increments('id').primary();
            table.integer('user_id').unsigned().notNullable()
            table.foreign('user_id', 'id').references("users");            
            table.timestamps();
        })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('tags')
      .dropTableIfExists('users')
      .dropTableIfExists('family')
    };
  