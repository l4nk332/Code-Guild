
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
        // Inserts seed entries
        knex('topics').insert({title: 'Javascript'})
        knex('topics').insert({title: 'SQL'})
        knex('topics').insert({title: 'Java'})
        knex('topics').insert({title: 'PHP'})
        knex('topics').insert({title: 'Python'})
        knex('topics').insert({title: 'Objective-C'})
        knex('topics').insert({title: 'Ruby'})
    });
};
