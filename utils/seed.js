const connection = require('../config/connection');
const { User, Thought } = require('../models');

const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing User
  await User.deleteMany({});

  // Drop existing Thought
  await Thought.deleteMany({});

  // Add user to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  await Thought.collection.insertMany(thoughts);


// Add thoughts ids to to respective owners
  let ts = [];

  await Thought.find()
    .then((data) =>  ts = data )
    .catch((err) => res.status(500).json(err));

  for (let i = 0; i < ts.length; i++) {
    await User.findOneAndUpdate(
      { username: ts[i].username },
      { $addToSet: { thoughts: ts[i]._id } },
      { new: true }
    )
    .catch((err) => res.status(500).json(err));
  }

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
