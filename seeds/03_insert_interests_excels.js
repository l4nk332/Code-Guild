exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('interests_excels').del()
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 1,
  	        topic_id: 1,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 1,
  	        topic_id: 2,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 1,
  	        topic_id: 3,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 1,
  	        topic_id: 4,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 1,
  	        topic_id: 5,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 1,
  	        topic_id: 6,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 2,
  	        topic_id: 3,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 2,
  	        topic_id: 4,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 2,
  	        topic_id: 5,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 2,
  	        topic_id: 6,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 2,
  	        topic_id: 7,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 2,
  	        topic_id: 8,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 3,
  	        topic_id: 5,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 3,
  	        topic_id: 6,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 3,
  	        topic_id: 7,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 3,
  	        topic_id: 8,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 3,
  	        topic_id: 9,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 3,
  	        topic_id: 10,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 4,
  	        topic_id: 7,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 4,
  	        topic_id: 8,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 4,
  	        topic_id: 9,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 4,
  	        topic_id: 10,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 4,
  	        topic_id: 11,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 4,
  	        topic_id: 12,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 5,
  	        topic_id: 9,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 5,
  	        topic_id: 10,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 5,
  	        topic_id: 11,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 5,
  	        topic_id: 12,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 5,
  	        topic_id: 13,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 5,
  	        topic_id: 14,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 6,
  	        topic_id: 11,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 6,
  	        topic_id: 12,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 6,
  	        topic_id: 13,
  	        user_relationship: 'excel'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 6,
  	        topic_id: 14,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 6,
  	        topic_id: 15,
  	        user_relationship: 'interest'
          });
    })
    .then(function () {
          return knex('interests_excels').insert({
  	        user_id: 6,
  	        topic_id: 16,
  	        user_relationship: 'interest'
          });
    })
};
