const users = [
  {username: 'Aaran', email: 'Aaran@yahoo.com'},
  {username: 'Bob', email: 'Bob@yahoo.com'},
  {username: 'James', email: 'James@yahoo.com'},
  {username: 'Steven', email: 'Steven@yahoo.com'},
  {username: 'Andrew', email: 'Andrew@yahoo.com'}
];

const thoughts = [
  {thoughtText: 'We eat pizza from the inside out.', username: 'Aaran', reactions: [{reactionBody:'This is interesting', username: 'Andrew'}]},
  {thoughtText: 'If you live to be 70 years old you will spend TEN YEARS of your life on Monday.', username: 'Bob', reactions: [{reactionBody:'Ehh', username: 'Steven'}]},
  {thoughtText: 'Sometime in the future, someone will say your name for the last time.', username: 'Andrew'},
  {thoughtText: 'Deaf people probably don’t understand why farts are funny.', username: 'Steven', reactions: [{reactionBody:'Wow', username: 'James'}]},
  {thoughtText: 'The word ambiguous only has one meaning.', username: 'Bob', reactions: [{reactionBody:'100%', username: 'Aran'}, {reactionBody:'Ok', username: 'Andrew'}]},
  {thoughtText: 'Outer space isn’t empty, it literally contains everything there is.', username: 'James'},
  {thoughtText: 'It’s not possible for Wolverine to get circumcised.', username: 'Aaran'},
  {thoughtText: 'How do vampires always look so neat and tidy if they can’t see themselves in the mirror?', username: 'Andrew'},
  {thoughtText: 'If you drop an Oreo you can still safely eat two thirds of it.', username: 'Aaran'}
];


module.exports = { users, thoughts };
