
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sessions', function(table){
    table.increments('id').primary();
    table.string('student').references('users.id').notNullable();
    table.string('mentor').references('users.id').notNullable();
    table.integer('rating');
    table.string('comment');
    table.enu('type', ['teach', 'review']).notNullable();
    table.integer('start_date');
    table.integer('end_date');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sessions');
};
