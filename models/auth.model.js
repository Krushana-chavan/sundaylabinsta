const mongoose = require("mongoose");
const AuthSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
   
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    followers: [
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
    following:
    [ {
      type:mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],

    posts:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
      }
    ],
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
  },
  { timestamps: true }
);

const AuthModel = mongoose.model("auth", AuthSchema);

module.exports = {
  AuthModel,
};
