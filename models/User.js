const { Schema, model } = require("mongoose");
const moment = require("moment");

const userSchema = new schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //match: //todo - mongoose email validation
    },
    thoughts: [
      {
        type: Schema.Types.objectId,
        ref: "Thoughts",
      },
    ],
    friends: [
      {
        type: Schema.Types.objectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

const User = model('User', userSchema);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})

module.exports = User;
