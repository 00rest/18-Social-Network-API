const { Schema, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: { getters: true, virtuals: true }
  }
);

// Virtual property `reactionCount` that counts how many reactions this thought has
userSchema.virtual('reactionCount').get(function () { return `${this.reactions.length}`});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
