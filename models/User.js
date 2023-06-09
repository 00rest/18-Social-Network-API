const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'users',
      }
    ],
  },
  {
    toJSON: { getters: true, virtuals: true },
    id: false
  }
);

// Virtual property `friendCount` that counts how many friends this looser has
userSchema.virtual('friendCount').get(function () { return `${this.friends.length}`});


const User = model('user', userSchema);

module.exports = User;
