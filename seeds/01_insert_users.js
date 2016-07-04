var bcrypt = require("bcrypt");

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
        return knex('users').insert({
	        username: 'jimbob101',
	        first_name: 'Jimbob',
	        last_name: 'Harris',
	        email: 'jimibob@gmail.com',
	        password: bcrypt.hashSync('student', 10),
	        auth_acct: null,
	        bio: 'Hi my name is Jimbob and I love programming! I have been coding for a few years now and enjoy teaching my fellow coders!',
	        available: false,
        });
    })
    .then(function () {
        return knex('users').insert({
	        username: 'lizzyliz',
	        first_name: 'Liz',
	        last_name: 'Lasseter',
	        email: 'lizlass@yahoo.com',
	        password: bcrypt.hashSync('teacher', 10),
	        auth_acct: null,
	        bio: 'I am pretty cool. Expert in all things programming. If you need help feel free to reach out!',
	        available: false,
        });
    })
    .then(function () {
        return knex('users').insert({
	        username: 'robobi232',
	        first_name: 'Rob',
	        last_name: 'Bobinaki',
	        email: 'robbobi@msn.com',
	        password: bcrypt.hashSync('reviewer', 10),
	        auth_acct: null,
	        bio: 'Sup, my name is Rob and I am a code review guru. I am not afraid to tell you what is on my mind and promise to make your code much cleaner. Hit me up bro...',
	        available: false,
        });
    })
    .then(function () {
        return knex('users').insert({
	        username: 'yeshi',
	        first_name: 'Yeshi',
	        last_name: 'Meshi',
	        email: 'yeshimeshi@gmail.com',
	        password: bcrypt.hashSync('student', 10),
	        auth_acct: null,
	        bio: 'Arigato! I am an open book. Learning is my forte.',
	        available: false,
        });
    })
    .then(function () {
        return knex('users').insert({
	        username: 'johnsmith',
	        first_name: 'John',
	        last_name: 'Smith',
	        email: 'johnsmith@gmail.com',
	        password: bcrypt.hashSync('teacher', 10),
	        auth_acct: null,
	        bio: 'The name is John. I am here to help. I have alot of exprerience in a variety of languages and enjoy teaching other programmers what I know.',
	        available: false,
        });
    })
    .then(function () {
        return knex('users').insert({
	        username: 'lanban8080',
	        first_name: 'Lan',
	        last_name: 'Banner',
	        email: 'lanbanner34@gmail.com',
	        password: bcrypt.hashSync('reviewer', 10),
	        auth_acct: null,
	        bio: 'Code review is my middle name. I will do my diligence to make sure your code is clean and errorless. Always enjoy providing feedback',
	        available: false,
        });
    })
    .catch(function(err) {
	    console.log(`There was an error inserting into the users table: ${err}`);
    });
};
