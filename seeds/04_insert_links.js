exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('links').del()
    .then(function () {
        knex('links').insert({'user_id': 1, source: 'http://www.github.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 1, source: 'http://www.codewars.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 1, source: 'http://www.linkedin.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 2, source: 'http://www.github.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 2, source: 'http://www.codewars.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 2, source: 'http://www.linkedin.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 3, source: 'http://www.github.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 3, source: 'http://www.codewars.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 3, source: 'http://www.linkedin.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 4, source: 'http://www.github.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 4, source: 'http://www.codewars.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 4, source: 'http://www.linkedin.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 5, source: 'http://www.github.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 5, source: 'http://www.codewars.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 5, source: 'http://www.linkedin.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 6, source: 'http://www.github.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 6, source: 'http://www.codewars.com'});
    })
    .then(function () {
        knex('links').insert({'user_id': 6, source: 'http://www.linkedin.com'});
    })
    .catch(function(err) {
	    console.log(`There was an error inserting into links table: ${err}`);
    });
};
