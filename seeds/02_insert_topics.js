
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('topics').del()
    .then(function () {
        // Inserts seed entries
      return knex('topics').insert({title: 'Javascript'});
    })
    .then(function() {
      return knex('topics').insert({title: 'SQL'});
    })
    .then(function() {
      return knex('topics').insert({title: 'Java'});
    })
    .then(function() {
      return knex('topics').insert({title: 'PHP'});
    })
    .then(function() {
      return knex('topics').insert({title: 'Python'});
    })
    .then(function() {
      return knex('topics').insert({title: 'Objective-C'});
    })
    .then(function() {
      return knex('topics').insert({title: 'C'});
    })
    .then(function() {
      return knex('topics').insert({title: 'C#'});
    })
    .then(function() {
      return knex('topics').insert({title: 'C++'});
    })
    .then(function() {
      return knex('topics').insert({title: 'Ruby'});
    })
    .then(function() {
      return knex('topics').insert({title: 'Swift'});
    })
    .then(function() {
      return knex('topics').insert({title: 'R'});
    })
    .then(function() {
      return knex('topics').insert({title: 'Perl'});
    })
    .then(function() {
      return knex('topics').insert({title: 'MATLAB'});
    })
    .then(function() {
      return knex('topics').insert({title: 'Groovy'});
    })
    .then(function() {
      return knex('topics').insert({title: 'Pascal'});
    })
    .then(function() {
      return knex('topics').insert({title: 'Delphi'});
    }).catch(function(err) {
      console.log('there was an error:', err);
    })
};
