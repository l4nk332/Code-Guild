exports.up = function(knex, Promise) {
	return knex.schema.createTable('interests_excels', function(table) {
		table.increments('id').primary();
		table.integer('user_id').references('users.id').notNullable();
		table.integer('topic_id').references('topics.id').notNullable();
		table.enu('user_relationship', ['interest', 'excel']).notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('interests_excels');
};
