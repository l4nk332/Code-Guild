exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments('id').primary();
    table.string('username').unique().notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable().unique();
    table.integer('password').notNullable();
    table.string('auth_acct').nullable();
    table.string('bio').nullable();
    table.enu('roles', ['teacher', 'reviewer', 'none']).notNullable().defaultTo('none')
    table.boolean('available').defaultTo(false);
    knex.schema.raw('ALTER TABLE users ADD COLUMN profile_photo BLOB SET DEFAULT null');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
