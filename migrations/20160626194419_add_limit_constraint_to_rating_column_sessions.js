exports.up = function(knex, Promise) {
    return knex.schema.raw("ALTER TABLE sessions ADD CONSTRAINT rating_check CHECK (rating BETWEEN 0 AND 5);");
};

exports.down = function(knex, Promise) {
    return knex.schema.raw("ALTER TABLE reviews DROP CONSTRAINT rating_check;");
};
