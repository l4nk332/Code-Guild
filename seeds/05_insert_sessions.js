exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sessions').del()
  	.then(function() {
        return knex('sessions').insert({
	        'topics_id': 4,
	        student: 1,
	        mentor: 2,
	        rating: 3,
	        comment: "Really hoped to go into more detail on some of the topics we discussed.",
	        type: 'teach',
	        start_date: 1358246824426,
	        end_date: 1434452255791
        });
	})
    .then(function () {
        return knex('sessions').insert({
	        'topics_id': 1,
	        student: 2,
	        mentor: 1,
	        rating: 4,
	        comment: "Learned alot, just wish I had more time to ask questions",
	        type: 'teach',
	        start_date: 1358246824426,
	        end_date: 1434452255791
        });
    })
  	.then(function() {
        return knex('sessions').insert({
	        'topics_id': 8,
	        student: 3,
	        mentor: 4,
	        rating: 5,
	        comment: "Honestly the best code review I have ever recieved! So incredibly helpful.",
	        type: 'review',
	        start_date: 1358246824426,
	        end_date: 1434452255791
        });
	})
  	.then(function() {
        return knex('sessions').insert({
	        'topics_id': 10,
	        student: 4,
	        mentor: 5,
	        rating: 4,
	        comment: "Learned alot about a subject I was not exactly comfortable with. Must say I was pretty impressed, and would definitely have another session.",
	        type: 'teach',
	        start_date: 1358246824426,
	        end_date: 1434452255791
        });
	})
  	.then(function() {
        return knex('sessions').insert({
	        'topics_id': 12,
	        student: 5,
	        mentor: 6,
	        rating: 2,
	        comment: "This code review did not please me. I felt like my code actually got a bit worse, not to mention that some of the 'fixes' actually broke my program!",
	        type: 'review',
	        start_date: 1358246824426,
	        end_date: 1434452255791
        });
	})
  	.then(function() {
        return knex('sessions').insert({
	        'topics_id': 11,
	        student: 6,
	        mentor: 5,
	        rating: 4,
	        comment: "This review was much needed. I definitely made alot of silly syntax errors and amateur mistakes that would have been otherwise overlooked!",
	        type: 'review',
	        start_date: 1358246824426,
	        end_date: 1434452255791
        });
	})
	.catch(function(err) {
		console.log(`There was an error inserting in to the session table: ${err}`);
	});
};

