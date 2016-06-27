exports.up = function(knex, Promise) {
	return knex.schema.table('users', function(table) {
		table.dropColumn('roles');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.table('users', function(table) {
		table.enu('roles', ['teacher', 'reviewer', 'none']).notNullable().defaultTo('none');
	});
};
