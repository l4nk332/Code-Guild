exports.up = function(knex, Promise) {
	return knex.schema.raw('ALTER TABLE users ALTER COLUMN password TYPE text;');
};

exports.down = function(knex, Promise) {
	return knex.schema.raw('ALTER TABLE users ALTER COLUMN password TYPE integer;');
};
