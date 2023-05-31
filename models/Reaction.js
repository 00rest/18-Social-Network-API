const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
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
    toJSON: { getters: true, virtuals: true },
    id: false
  }
);

function forDate(createdAt) {
return createdAt + 'your date is now formatted';

};



module.exports = reactionSchema;
