# Code-Guild

![Code-Guild screenshot](https://github.com/l4nk332/Code-Guild/blob/master/screenshots/code-guild.png)

##Here is a demo of *Code-Guild*: [Video Demo](https://www.youtube.com/watch?v=L6IGNKpJl5o)


## Overview

*Code-Guild* is a web-platform that connects developers from around the globe in a live coding environment. *Code-Guild* enables programmers to both teach the languages they are proficient in and learn the languages that interest them. Code review sessions allow developers to get a second opinion on a module of code.

## Technologies

The technologies implemented in the design and development of *Code Guild* include:

* [Express Framework](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [Knex.js](http://knexjs.org/)
* [Socket.io](http://socket.io/)
* [WebRTC](https://webrtc.org/)
* [Firepad](https://firepad.io/#1)
* [CodeMirror](https://codemirror.net/)

## Deploy

In order to deploy this project you first need to [install npm](https://www.npmjs.com/) if you haven't already.

Once properly cloned or forked run `npm install` to locally install the dependencies for the project.

To locally start the server run `npm start`, visit `http:localhost:9000` in your browser, and you should be off and running with a local instance of Code-Guild!

## Challenges

**Data Model**

The first major hurdle encountered in the development of *Code-Guild* was how to approach modelling the data. The dynamic relationships between users made it difficult to determine how to track when a given user was a coding mentor or student. [Linking tables](https://en.wikipedia.org/wiki/Associative_entity) were used to match programmers who are interested in a particular language to programmers who excel in that language. The [Knex](http://knexjs.org/) query builder allowed us to asynchronously establish these connections, creating a seamless User-Experience.

**Web Sockets**

Once a user has logged in all recommended users will show up on their dashboard as either *available* or *unavailable*. The next step was to allow a user to request a session with another available user. Through the integration of [Socket.io](http://socket.io/) when UserA sends a request to UserB, a socket emitter sends a request to the web socket server, where it is processed and redirected to UserB. This triggers a socket event emitter in UserB client to drop down a request modal. When accepted the server genrates a unique hash and reroutes both UserA and UserB to the page where the coding session will take place.

**WebRTC**

As soon as a session is instantiated between two users a [signaling server](https://en.wikipedia.org/wiki/Session_Initiation_Protocol) establishes a real-time connection between the two client IP addresses. [Firepad](https://firepad.io/#1) along with [CodeMirror](https://codemirror.net/) allow for a shared workspace in which both users can share a single text editor with proper syntax highlighting. [Firepad](https://firepad.io/#1) also ensures that the all code left in the editor at the end of a session will be backed up in [Firebase](https://firebase.google.com/).

## Next Steps

**In-browser REPL**

One limitation of *Code-Guild* is the inability to actually execute code. Due to the necessity of supporting a variety of programming languages, this became difficult to implement. As the project continues to evolve a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) will become a top priority, allowing for coding sessions to be taken one step further.

**Direct Messaging**

Currently when a user recieves a request to connect they only have the option to accept or deny the request. Further utilization of [Socket.io](http://socket.io/) would allow for direct messaging betweeen users to take place before an initial connection is made. This would improve communication between users and the overall User-Experience of *Code-Guild*.

## Contributors

* Yeshe Wingerd
* Omar Sobh
* Ian Jabour
