exports.up = function(knex, Promise) {
	return knex.schema.raw('ALTER TABLE sessions ALTER COLUMN start_date TYPE bigint;')
		.then(function () {
			return knex.schema.raw('ALTER TABLE sessions ALTER COLUMN end_date TYPE bigint;');
		})
		.catch(function(err) {
			console.log(`There was an error changing the session date column type to bigint: ${err}`);
		});
};

exports.down = function(knex, Promise) {
	return knex.schema.raw('ALTER TABLE sessions ALTER COLUMN start_date TYPE integer;')
		.then(function() {
			return knex.schema.raw('ALTER TABLE sessions ALTER COLUMN end_date TYPE integer;');
		})
		.catch(function(err) {
			console.log(`There was an error changing the session date column type back to integer: ${err}`);
		});
};
