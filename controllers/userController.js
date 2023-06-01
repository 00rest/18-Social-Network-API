const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  getAllUsers(req, res) {
    User.find()
      .then((users) => !users
      ? res.status(404).json({ message: 'No users found' })
      : res.json( users ))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  
  // Get a single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  
  //Update user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true }
    )
      .then((user) => !user
          ? res.status(404).json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err))
  },

  // Delete a user and remove their thoughts
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No such user exists' })
          : Thought.deleteMany(
              { username: user.username },
              { new: true }
            )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'User deleted, but no thoughts found' })
          : res.json({ message: 'User successfully deleted', thought })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Adds friend to the friends array given user and friend ids
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err)});
  },

  // Removes friend from the friends array given user and friend ids
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

};
