var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
/* GET users listing. */
router.get('/:username', function(req, res, next) {
  if (req.session.username === req.params.username) {
    // Select all interests from a specific user (given username)
    knex.select('t.id')
        .from('topics as t')
        .join('interests_excels as i_e', 'i_e.topic_id', '=', 't.id')
        .join('users as u', 'u.id', '=', 'i_e.user_id')
        .where('u.username', '=', req.session.username)
        .then(function(interests) {
          interests = interests.map(function(curObj) {
            return curObj.id;
          });
          // Select recommended users with titles and ids of what they excel at (matching to an array of ids)
            knex('u').distinct('u.username')
              .select('u.id', 'u.first_name', 'u.last_name', 'u.auth_acct', 'u.bio', 'u.available', 'u.photo')
              .from('users as u')
              .join('interests_excels as i_e', 'i_e.user_id', '=', 'u.id')
              .join('topics as t', 't.id', '=', 'i_e.topic_id')
              .whereIn('t.id', interests)
              .whereNot('u.username', '=', req.session.username)
              .then(function(recommendedUsers) {
                //res.json(recommendedUsers);
                res.render('users.nunjucks', {users: recommendedUsers, loggedInUser: {username: req.session.username, photo: req.session.photo}});
              })
              .catch(function(err) {
                console.log(`There was an error gathering recommended users for user ${req.session.username}: ${err}`);
                res.sendStatus(500);
              });
        })
        .catch(function(err) {
          console.log(`There was an error gathering the interests for user ${req.session.username}: ${err}`);
          res.sendStatus(500);
        });
        // res.render('users.nunjucks', { username: req.session.username });
  } else {
    res.redirect('/login');
  }
});

router.get("/info", function(req, res, next) {
  // var userId = req.query.userId;
  // knex.select("topics.name").from("topics")
  // .join("interests_excels", "interests_excels.topic_id", "=", "topics.id")
  // .where({"interests_excels.user_id": userId})
  // .then(function(listOfIE) {
  //   var interests = [];
  //   var excels = [];
  //   listOfIE.forEach((topic))
  //});
});

router.get('/:username/profile', function(req, res, next) {
  if (req.session.username === req.params.username) {
    res.render('profile.nunjucks', {username: req.params.username});
  } else {
    res.redirect('/login');
  }
});

router.post('/:username/profile', function(req, res, next) {
  if (req.session.username === req.params.username) {
    // Insert into the users table
    knex("users").where({username: req.params.username})
    .update({
      "first_name": req.body.firstName,
      "last_name": req.body.lastName,
      "email": req.body.email,
      "photo": req.body.photo,
      "bio": req.body.bio
    }).returning("*")
    .then(function(users) {
      // Set avatar photo on session
      req.session.photo = users[0].photo;
      // Set user id for later use (in join table inserts bellow)
      var userId = users[0].id;
      // Getting the topic id of all users interests
      knex.select("title", "id").from("topics").whereIn("title", req.body.interests)
        .then(function(topics) {
          var userInterestIds = [];
          topics.forEach((obj) => {
            userInterestIds.push(obj.id);
          });
          var userInterestInsert = [];
          userInterestIds.map((interestId) => {
              userInterestInsert.push({
                "topic_id": interestId,
                "user_id": userId,
                "user_relationship": "interest"
              });
          });
          // Clear out previous interests and excels
          knex("interests_excels").where({"user_id": users[0].id}).del()
          .then(function() {
            // Use topic ids to insert data into the interests_excels table (interests)
            knex("interests_excels").where({"user_id": users[0].id})
            .insert(userInterestInsert)
            .then(function() {
              // Getting the topic id of all users excels
              knex.select("title", "id").from("topics").whereIn("title", req.body.excels)
                .then(function(topics) {
                  var userExcelIds = [];
                  topics.forEach((obj) => {
                    userExcelIds.push(obj.id);
                  });
                  var userExcelInsert = [];
                  userExcelIds.map((excelId) => {
                      userExcelInsert.push({
                        "topic_id": excelId,
                        "user_id": userId,
                        "user_relationship": "excel"
                      });
                  });
                  // Use topic ids to insert data into the interests_excels table (excels)
                  knex("interests_excels").where({"user_id": users[0].id})
                  .insert(userExcelInsert)
                  .then(function() {
                    var links = (req.body.links).split(/\s*,\s*/g);
                    var userLinkInsert = [];
                    links.map((link) => {
                      userLinkInsert.push({
                        "user_id": userId,
                        "source": link
                      });
                    });
                    // Insert data into the links table
                    knex("links").where({"user_id": userId}).del();
                    knex("links").insert(userLinkInsert)
                    .then(function() {
                      res.redirect(`/users/${req.session.username}`);
                    });
                  });
              });
            });
          });
        });
    });
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
