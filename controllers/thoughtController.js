const { Thought, User } = require('../models');

module.exports = {

  // Get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a thought then find user by name and add thought id to user
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) =>
              User.findOneAndUpdate(
                { username: thought.username },
                { $addToSet: { thoughts: thought._id } },
                { new: true }
               )
        )
      .then((userThought) => res.json(userThought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((th) =>{
        //!thought
         // ? res.status(404).json({ message: 'No thought with that ID' })


         console.log(th);
         console.log(th.username);
         console.log(th._id);
          // User.findOne({username: th.username})
          // .then((user) => console.log('found usser', user))
          // .catch((err) => console.log(err))
         User.findOneAndUpdate(
              { username: th.username },
              { $pull: { thoughts: { _id: th._id } }},
              { new: true }
            )
            .then((user) => console.log('found usser', user))
            .catch((err) => console.log(err))
  })
      .then((data) => res.json({ message: 'Thought deleted!', data }))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
