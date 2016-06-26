exports.up = function(knex, Promise) {
  return knex.schema.createTable('topics', function(table){
    table.increments('id').primary();
    table.string('title').unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('topics');
};
