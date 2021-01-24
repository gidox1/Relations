exports.seed = function(knex, Promise) {
    return deleteTables()
      .then(function() {
        return knex('tags').insert([
          {
            id: 1,
            name: 'brother'
          },
          {
            id: 2,
            name: 'sister'
          },
          {
            id: 3,
            name: 'mother'
          },
          {
            id: 4,
            name: 'father'
          },
          {
            id: 5,
            name: 'son'
          },
          {
            id: 6,
            name: 'daughter'
          },
      ])
      })

    function deleteTables() {
      return knex('tags').del()
    }
  };
  