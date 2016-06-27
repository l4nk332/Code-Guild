exports.up = function(knex, Promise) {
return knex.schema.table('sessions', function (table) {
  table.integer('topics_id').references('topics.id');
})
};

exports.down = function(knex, Promise) {
  return knex.schema.table('sessions', function (table) {
    table.dropColumn('topics_id');
  })
};
