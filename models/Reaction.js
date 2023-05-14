const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new ObjectId
    },
    reactionBody: {
      type: String,
      default: true,
      required: true,
      maxlength: 280,
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: forDate
    },
    
  },
  {
    toJSON: { getters: true, virtuals: true }
  }
);

function forDate(createdAt) {
return createdAt + 'your date is now formatted';

};


//userSchema.virtual('reactionCount').get(function () { return `${this.reactions.length}`});

module.exports = reactionSchema;
