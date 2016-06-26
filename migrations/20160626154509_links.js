exports.up = function(knex, Promise) {
	return knex.schema.createTable('links', function(table) {
		table.increments('id').primary();
		table.integer('user_id').references('users.id').notNullable();
		table.string('source').notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('links');
};
