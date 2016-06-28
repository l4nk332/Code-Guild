
exports.up = function(knex, Promise) {
  return knex.schema.raw("ALTER TABLE users ALTER COLUMN first_name DROP NOT NULL;").then(function() {
    return knex.schema.raw("ALTER TABLE users ALTER COLUMN last_name DROP NOT NULL;")
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.raw("ALTER TABLE users ALTER COLUMN first_name SET NOT NULL;").then(function() {
    return knex.schema.raw("ALTER TABLE users ALTER COLUMN last_name SET NOT NULL;")
  });
};
