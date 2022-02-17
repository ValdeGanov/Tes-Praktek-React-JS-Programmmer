import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  NamaBarang: String,
  HargaBeli: Number,
  HargaJual: Number,
  Stock: Number,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
